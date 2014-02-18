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
            images: {
                files: [{
                    expand: true,
                    src: 'src/images/**/*',
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
            }
        },
        uglify: {
            options: {
                beautify:   true,
                compress:   false,
                mangle:     false,
                sourceMap: 'build/javascripts/app.min.js.map'
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
                    compass: true
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

    grunt.registerTask('publish', ['build', 'gh-pages']);

    grunt.registerTask('default', ['build', 'watch']);

    grunt.registerTask('build', ['uglify', 'copy', 'sass']);

};
