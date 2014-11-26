module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: ["development/app/**/*.js"],
        clean: {
            production: ["production/"]
        },
        requirejs: {
            compile: {
                options: {
                    appDir: "./development",
                    mainConfigFile : "development/app/main.js",
                    baseUrl: "app",
                    removeCombined: true,
                    findNestedDependencies: true,
                    dir: "./production",
                    optimize: 'uglify',
                    optimizeCss: 'standard.keepLines',
                    skipDirOptimize: true,
                    wrap: true,
                    modules: [
                        {
                            name: "main",
                            exclude: [
                                "dashboard/main",
                                "mobil/main",
                                "motor/main",
                                "rumah/main"
                            ]
                        },                         {
                            name: 'dashboard/main',
                            exclude:[
                                'jquery',
                                'underscore',
                                'backbone',
                                'bootstrap',
                                'text'
                            ]
                        },                        {
                            name: 'mobil/main',
                            exclude:[
                                'jquery',
                                'underscore',
                                'backbone',
                                'bootstrap',
                                'text'
                            ]
                        },
                        {
                            name: 'motor/main',
                            exclude:[
                                'jquery',
                                'underscore',
                                'backbone',
                                'bootstrap',
                                'text'
                            ]
                        },
                        {
                            name: 'rumah/main',
                            exclude:[
                                'jquery',
                                'underscore',
                                'backbone',
                                'bootstrap',
                                'text'
                            ]
                        },
                    ]
                }
            }
        },
        mocha: {
            test: {
                src: ['development/test/index.html'],
                options: {
                    mocha: {
                        ignoreLeaks: false,
                    },
                    reporter: 'Spec',
                    run: true
                }
            }
        },
        'ftp-deploy': {
            upload: {
                auth: {
                    host: 'iflexinspira.com',
                    port: 21,
                    authKey: 'key1',
                    authPath: '.ftpConfig'
                },
                src: 'production',
                dest: 'public_html/aboutbatam.com'
            }
        }
    });
    grunt.file.defaultEncoding = 'utf8';
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-processhtml');
    // grunt.loadNpmTasks('grunt-text-replace');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask(
        'default',
    [
        'clean',
        'jshint',
        'requirejs',
        'mocha'
        // 'ftp-deploy'
    ]);
};
