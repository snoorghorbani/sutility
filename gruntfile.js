/*global module:false*/

/**
 * Javascript Project Boilerplate
 * Version 0.1.0
 */

module.exports = function (grunt) {
    "use strict";
    var pkg, config;
    
    pkg = grunt.file.readJSON('package.json');
    //options.search = grunt.file.readJSON('tasks/options/search.json');
    var cuatomConfig = grunt.file.readJSON('config.json');
    var FilesPattern = {
        modules: ['src/modules/*.js']
    };
    
    config = {
        banner : [
            '/**\n',
            ' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n',
            ' * <%= pkg.description %>\n',
            ' *\n',
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n',
            ' * Licensed <%= pkg.license %>\n',
            ' */\n'
        ].join(''),
        sources : [
            { name: 'core', value: 'src/export.js' , checked: true }
        ],
        pkg : pkg,
        browserPlatformModulesIdentifiers: /document|XHR|css|attribute|className|@pltf->bro/,
        nodePlatformModulesIdentifiers: /@pltf->node/
    };
    var files = {
        modules: grunt.file.expand(['src/modules/*.js']),
        uglifyFiles : {},
        clearFiles: {},
        nodeModules: [],
        browserModules: []
    }
    
    for (var i = 0; i < files.modules.length; i++) {
        var name = files.modules[i].substring(files.modules[i].lastIndexOf('/') + 1, files.modules[i].lastIndexOf('.'));
        var module = {
            name : name,
            value: files.modules[i].toString()
        };
        config.sources.push(module);
    }
    var platforms = {
        bro: "bro",
        node: "node",
    };
    var modules = {
        //path:path
        //dependencies:[moduleName]
        //platform:[bro andor node]
    };
    var initModules = function () {
        for (var i = 0; i < files.modules.length; i++) {
            var name = files.modules[i].substring(files.modules[i].lastIndexOf('/') + 1, files.modules[i].lastIndexOf('.'));
            modules[name] = {
                path : files.modules[i],
                dependencies: [],
                platform: []
            };
        }
    }();
    var nodeAndBroPack = { files: {} };
    var getNodeModules = function () {
        files.browserModules.splice(0, files.browserModules.length);
        files.nodeModules.splice(0, files.nodeModules.length);
        for (var name in modules) {
            var module = modules[name];
            if (module.platform.indexOf(platforms.node) == -1)
                files.browserModules.push(module.path);
            if (module.platform.indexOf(platforms.bro) == -1) {
                files.nodeModules.push(module.path);
            }
        }
        files.browserModules.unshift('src/intro.js');
        files.browserModules.push('src/outro.js');
        
        files.nodeModules.unshift('src/intro.js');
        files.nodeModules.push('src/outro.js');
        
        //fill nodeAndBroPack params
        nodeAndBroPack.options = {
            banner: config.banner
        };
        nodeAndBroPack.files[config.dist_node] = files.nodeModules;
        nodeAndBroPack.files[config.dist_bro] = files.browserModules;
    };
    
    // setup dynamic filenames
    config.versionedName = [config.pkg.name, config.pkg.version].join('-');
    config.dist_node = ['dist/', '.node.js'].join(config.versionedName);
    config.dist_bro = ['dist/', '.browser.js'].join(config.versionedName);
    files.clearFiles[['dist/', '.browser.clear.js'].join(config.versionedName)] = config.dist_bro;
    files.clearFiles[['dist/', '.node.clear.js'].join(config.versionedName)] = config.dist_node;
    files.uglifyFiles[['dist/', '.browser.min.js'].join(config.versionedName)] = config.dist_bro;
    files.uglifyFiles[['dist/', '.node.min.js'].join(config.versionedName)] = config.dist_node;
    
    
    
    // Project configuration.
    grunt.initConfig({
        pkg : config.pkg,
        lint : {
            files : ['gruntfile.js', 'test/*.js', 'src/*']
        },
        clean : {
            dist : ['dist/']
        },
        prompt : {
            concat : {
                options : {
                    stripBanners : true,
                    banner : config.banner,
                    questions: [
                        {
                            config: 'concat.dist.src',                  // arbitray name or config for any other grunt task
                            type: 'checkbox',                       // list, checkbox, confirm, input, password
                            message: 'Select your modules:',
                            'default': 'basic',                       // default value if nothing is entered
                            choices: config.sources,
                            validate: function (value) {         // return true if valid, error message if invalid
                                grunt.log.writelns("value");
                                return true
                            },
                            filter: function (value) {           // modify the answer
                                grunt.log.writelns(value);
                                return ['src/intro.js' , value , 'src/outro.js'];
                            },
                            //when: function (answers) { }            // only ask this question when this function returns true
                        }]
                }
            }
        },
        concat: {
            nodeAndBroPack: nodeAndBroPack
        },
        uglify : {
            main : {
                options : {
                    mangle : true,
                    sourceMap: true,
                    beautify: false,
                    banner: config.banner,
                    compress: {
                        global_defs: {
                            "DEBUG": false
                        },
                        dead_code: true,
                        drop_console: true,
                        conditionals: true,
                    }
                },
                files : files.uglifyFiles
            },
            clear: {
                options : {
                    mangle : false,
                    sourceMap: false,
                    beautify: true,
                    banner: config.banner,
                    compress: {
                        global_defs: {
                            "DEBUG": false
                        },
                        dead_code: true,
                        drop_console: true,
                        properties : true,
                        drop_debugger: true,
                    }
                },
                files : files.clearFiles
            },
            modules: {
                options: {
                    mangle: true,
                    sourceMap: true,
                    beautify: false,
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
                    compress: {
                        global_defs: {
                            "DEBUG": false
                        },
                        dead_code: true,
                        drop_console: true,
                        conditionals: true,
                        join_vars: true,
                    },
                },
                files: [{
                        expand: true,
                        cwd: 'src/modules',
                        src: '*.js',
                        dest: 'dist/modules'
                    }]
            }
        },
        "jasmine" : {
            "tests" : {
                src : ['dist/', '.min.js'].join(config.versionedName),
                options : {
                    specs : 'test/spec/*.spec.js',
                    template : 'test/grunt.tmpl'
                }
            }
        },
        "jshint" : {
            "options": {
                "jshintrc": 'jshint.json'
            },
            "source" : config.dist
        },
        "search": {
            "methods": {
                "files": {
                    "src": files.modules
                },
                "options": {
                    "searchString": /_\.(.\w+)/g,
                    "logFile": "tmp/results.json"
                }
            },
            "createModulesDependency": {
                "files": {
                    "src": cuatomConfig.scriptPath
                },
                "options": {
                    "searchString": /_\.(.\w+)/g,
                    "logFile": "tmp/results.json",
                    "onComplete": function (matches) {
                        console.log('************************************************************'['magenta']);
                        console.log('*******************:: Dependencies ::*******************'['magenta']);
                        console.log('************************************************************'['magenta']);
                        for (var filePath in matches.matches) {
                            var fileName = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
                            modules[fileName] = modules[fileName] || {};
                            modules[fileName].dependencies = modules[fileName].dependencies || [];
                            for (var i = 0, m; m = matches.matches[filePath][i]; i++) {
                                var dep = m.match.substring(2, m.match.length);
                                if (modules[fileName].dependencies.indexOf(dep) < 0)
                                    modules[fileName].dependencies.push(dep);
                            }
                            console.log('------------------------------------------------------------'['grey']);
                            
                            var fixWidthName = fileName + new Array(20 - fileName.length).join(' ');
                            console.log(fixWidthName + ' : ' + modules[fileName].dependencies);
                        }
                    }
                }
            },
            "findBrowserModule": {
                "files": {
                    "src": cuatomConfig.scriptPath
                },
                "options": {
                    "searchString": config.browserPlatformModulesIdentifiers,
                    "logFile": "tmp/browserModules.json",
                    "onComplete": function (matches) {
                        console.log('************************************************************'['magenta']);
                        console.log('*******************:: Browser Modules ::*******************'['magenta']);
                        console.log('************************************************************'['magenta']);
                        
                        for (var filePath in matches.matches) {
                            var fileName = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
                            console.log('------------------------------------------------------------'['grey']);
                            console.log('Module Name :: '['grey'] + fileName);
                            
                            modules[fileName].platform.push(platforms.bro);
                        }
                    }
                }
            },
            "findNodeModule": {
                "files": {
                    "src": cuatomConfig.scriptPath
                },
                "options": {
                    "searchString": config.nodePlatformModulesIdentifiers,
                    "logFile": "tmp/browserModules.json",
                    "onComplete": function (matches) {
                        console.log('************************************************************'['magenta']);
                        console.log('*******************:: Node Modules ::*******************'['magenta']);
                        console.log('************************************************************'['magenta']);
                        
                        for (var filePath in matches.matches) {
                            var fileName = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
                            console.log('------------------------------------------------------------'['grey']);
                            console.log('Module Name :: '['grey'] + fileName);
                            
                            modules[fileName].platform.push(platforms.node);
                        }
                    }
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-search');
    grunt.loadNpmTasks('grunt-prompt');
    
    // Default task.
    //grunt.registerTask('default', ['clean', 'prompt:concat', 'concat', 'uglify', 'jasmine']);
    grunt.registerTask('default', function (target) {
        if (!target) {
            console.log('use "grunt" build for create sutility-[version].[platform].[type].js files in dist folder"'['green'])
        }
    });
    
    grunt.registerTask('build', 'build sutility'['green'], function () {
        grunt.task.run(['clean', 'search:createModulesDependency', 'search:findBrowserModule', 'search:findNodeModule']);
        getNodeModules();
        grunt.task.run(['concat']);
        grunt.task.run(['uglify:main', 'uglify:clear']);
        grunt.task.run(['uglify:modules']);
    });
    //grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('pro', ['prompt']);
};