module.exports = function (grunt) {

    grunt.initConfig({
        'gh-pages': {
            options: {
                base: 'build'
            },
            src: '**/*'
        },
        copy: {
            components: {
                files: [{
                    expand: true,
                    src: ['components/**/*.min.js', 'components/**/*.min.js.map'],
                    dest: 'build/'
                }, {
                    expand: true,
                    src: 'components/foundation/css/**.css',
                    dest: 'build/'
                }]
            },
            data: {
                files: [{
                    expand: true,
                    src: 'data/data.ask.json',
                    dest: 'build/'
                }]
            },
            images: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: 'images/**/*',
                    dest: 'build/'
                }]
            },
            html: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.html',
                    dest: 'build/'
                }]
            },
            jssrc: {
                files: [{
                    expand: true,
                    // cwd: '',
                    src: 'src/javascripts/**/*.js',
                    dest: 'build/'
                }]
            }
        },
        uglify: {
            options: {
                beautify:   true,
                compress:   false,
                mangle:     false,
                sourceMap:  true,
                sourceMapName: 'build/javascripts/app.min.js.map'
                // sourceMap: 'build/javascripts/app.min.js.map'
            },
            js: {
                files: {
                    'build/javascripts/app.min.js': ['src/javascripts/**/*.js']
                }
            }
        },
        sass: {
            main: {
                options: {
                    compass: true,
                    require: 'susy',
                },
                files: {
                    'build/stylesheets/styles.css': 'src/stylesheets/style.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy:html'],
                options: {
                    //
                }
            },
            sass: {
                files: ['src/stylesheets/**/*.scss'],
                tasks: ['sass'],
                options: {
                    //
                }
            },
            js: {
                files: ['src/javascripts/**/*.js'],
                tasks: ['uglify'],
                options: {
                    //
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('publish', ['build:main', 'gh-pages']);

    grunt.registerTask('default', ['build:main', 'build:dev', 'watch']);

    grunt.registerTask('build:main', ['uglify', 'sass', 'copy:main']);
    grunt.registerTask('build:dev', ['copy:dev']);

    grunt.registerTask('copy:main', ['copy:components', 'copy:data', 'copy:images', 'copy:html']);
    grunt.registerTask('copy:dev', ['copy:jssrc']);

};
