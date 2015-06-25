/*global module:false*/

/**
 * Javascript Project Boilerplate
 * Version 0.1.0
 */
module.exports = function (grunt) {
    "use strict";
    var pkg, config;
    
    pkg = grunt.file.readJSON('package.json');
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
    };
    var files = {
        modules: grunt.file.expand(['src/modules/*.js']),
        uglifyFiles : {},
        clearFiles: {},
    }
    for (var i = 0; i < files.modules.length; i++) {
        var name = files.modules[i].substring(files.modules[i].lastIndexOf('/') + 1, files.modules[i].lastIndexOf('.'));
        var module = {
            name : name,
            value: files.modules[i].toString()
        };
        config.sources.push(module);
    }
    
    // setup dynamic filenames
    config.versionedName = [config.pkg.name, config.pkg.version].join('-');
    config.dist = ['dist/', '.js'].join(config.versionedName);
    files.uglifyFiles[['dist/', '.min.js'].join(config.versionedName)] = config.dist;
    files.clearFiles[['dist/', '.clear.js'].join(config.versionedName)] = config.dist;


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
                            } ,
                            filter: function (value) {           // modify the answer
                                grunt.log.writelns(value);
                                return ['src/intro.js' , value , 'src/outro.js'];
                            } ,
                            //when: function (answers) { }            // only ask this question when this function returns true
                        }]
                }
            }
        },
        concat : {
            options : {
                stripBanners : true,
                banner : config.banner
            },
            dist : {
                src : config.sources,
                dest : config.dist
            }
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
        jasmine : {
            tests : {
                src : ['dist/', '.min.js'].join(config.versionedName),
                options : {
                    specs : 'test/spec/*.spec.js',
                    template : 'test/grunt.tmpl'
                }
            }
        },
        jshint : {
            options : {
                jshintrc : 'jshint.json'
            },
            source : config.dist
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-prompt');
    
    // Default task.
    //grunt.registerTask('default', ['clean', 'prompt:concat', 'concat', 'uglify', 'jasmine']);
    grunt.registerTask('default', function (target) {
        if (!target) {
            grunt.task.run(['clean', 'prompt:concat', 'concat']);
        }
    });
    // Debug task.
    //grunt.registerTask('debug', ['lint', 'concurrent:debug']);
    
    // Secure task(s).
    //grunt.registerTask('secure', ['env:secure', 'lint', 'concurrent:default']);
    
    // Lint task(s).
    //grunt.registerTask('lint', ['jshint', 'csslint']);
    
    // Build task(s).
    grunt.registerTask('build', ['uglify:main', 'uglify:modules']);
    grunt.registerTask('clear', ['uglify:clear']);
    
    // Test task.
    //grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
    
};