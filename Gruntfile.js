module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        bower_concat: {
            all: {
                dest: 'build/bower.js',
                cssDest: 'build/bower.css',
                bowerOptions: {
                    relative: false
                }
            }
        }      
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('default', ['jshint']);

};
