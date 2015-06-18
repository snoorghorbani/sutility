/*global module:false*/

/**
 * Javascript Project Boilerplate
 * Version 0.1.0
 */
module.exports = function (grunt) {
    "use strict";
    var pkg, config;
    
    pkg = grunt.file.readJSON('package.json');
    var Files = {
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
            'src/intro.js',
            // add'l packages

            'src/export.js',

            'src/modules/css.js',
            'src/modules/catchall.js',
            'src/modules/array.js',
            'src/modules/catchall.js',
            'src/modules/className.js',
            'src/modules/compare.js',
            'src/modules/css.js',
            'src/modules/dictionary.js',
            'src/modules/enableBackup.js',
            'src/modules/flyWeight.js',
            'src/modules/framework.js',
            'src/modules/is.js',
            'src/modules/if.js',
            'src/modules/publisher.js',
            'src/modules/select.js',

            'src/outro.js'
        ],
        modules: [
        ],
        pkg : pkg,
        uglifyFiles : {}
    };
    
    // setup dynamic filenames
    config.versioned = [config.pkg.name, config.pkg.version].join('-');
    config.dist = ['dist/', '.js'].join(config.versioned);
    config.uglifyFiles[['dist/', '.min.js'].join(config.versioned)] = config.dist;
    
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
                            //validate: function (value) { } ,        // return true if valid, error message if invalid
                            //filter: function (value) { } ,          // modify the answer
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
            main: {
                options : {
                    mangle : true,
                    sourceMap: true,
                    beautify: false,
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
                    compress: {
                        global_defs: {
                            "DEBUG": false
                        },
                        dead_code: true,
                        drop_console: true
                    },
                },
                dist : {
                    files : config.uglifyFiles
                }
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
                        drop_console: true
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
                src : ['dist/', '.min.js'].join(config.versioned),
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
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-prompt');
    
    // Default task.
    grunt.registerTask('default', ['clean', 'prompt:concat', 'concat', 'uglify', 'jasmine']);
    // Debug task.
    //grunt.registerTask('debug', ['lint', 'concurrent:debug']);
    
    // Secure task(s).
    //grunt.registerTask('secure', ['env:secure', 'lint', 'concurrent:default']);
    
    // Lint task(s).
    //grunt.registerTask('lint', ['jshint', 'csslint']);
    
    // Build task(s).
    grunt.registerTask('build', ['uglify']);
    
    // Test task.
    //grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
    
    grunt.registerTask('boilerplate-check', 'Ensures defaults have been updated.', function () {
        var configured, log;
        
        configured = true;
        log = grunt.log;
        if (pkg.name === 'project-name') {
            log.writeln('project.json.name has not been configured.');
            configured = false;
        }
        if (pkg.version === '0.0.0') {
            log.writeln('project.json.version has not been configured. Consider 0.0.1');
            configured = false;
        }
        if (pkg.author === 'Your Name <your.name@domain.com>') {
            log.writeln('project.json.author has not been configured.');
            configured = false;
        }
        if (pkg.description === '') {
            log.writeln('project.json.description has not been configured.');
            configured = false;
        }
        if (pkg.contributors[0].name === 'Your Name') {
            log.writeln('project.json.contributors name has not been configured.');
            configured = false;
        }
        if (pkg.contributors[0].email === 'your.name@domain.com') {
            log.writeln('project.json.contributors email has not been configured.');
            configured = false;
        }
        if (pkg.main === null) {
            log.writeln('project.json.main is null. Use grunt --force and find the file in ./dist');
            configured = false;
        }
        if (pkg.repository.url === 'https://github.com/...') {
            log.writeln('project.json.repository.url has not been configured.');
            configured = false;
        }
        if (!pkg.keywords.length) {
            log.writeln('project.json.keywords have not been configured.');
            configured = false;
        }
        return configured;
    });
};