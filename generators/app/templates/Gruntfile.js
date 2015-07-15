module.exports = function(grunt) {

  grunt.initConfig({
    
    // Server all the components
    connect: {
      server: {
        options: {
          port: <%= config.serverPort %>,
          base: '<%= config.dest %>'
        }
      }
    },<% if(config.isUsingSass()) { %>
    sass: {
      dist: {
        files: {
          config.dest + '/app.dist.css': config.componentsDir + '/**/*.scss'
        }
      }
    },<% } if(config.isUsingLess()) { %>
    less: {
      dist: {
        files: {
          config.dest + '/app.dist.less': config.componentsDir + '/**/*.less'
        }
      }
    },<% } %>

    // Watch files and build
    watch: {
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');<% if(config.isUsingSass()) { %>
  grunt.loadNpmTasks('grunt-contrib-sass'); <% } if(config.isUsingLess()) { %>
  grunt.loadNpmTasks('grunt-contrib-less'); <% } %>
};
