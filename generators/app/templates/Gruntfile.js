module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: <%= config.serverPort %>,
          base: '<%= config.dest %>'
        }
      }
    },
    watch: {
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
