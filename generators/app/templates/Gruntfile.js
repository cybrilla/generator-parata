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

    // Compile `sass` files
    sass: {
      dist: {
        files: {
          config.dest + '/app.dist.css': config.componentsDir + '/**/*.scss'
        }
      }
    },<% } if(config.isUsingLess()) { %>

    // Compile `less` files
    less: {
      dist: {
        files: {
          config.dest + '/app.dist.less': config.componentsDir + '/**/*.less'
        }
      }
    },<% } %>

    // Configuration for `parata`
    parata: {
      options: {
        dest: '<%= config.dest %>'
      }
    },

    // Watch files and build
    watch: { <% if(config.isUsingSass()) { %>
      sass: {
        files: [ '**/*.scss' ],
        tasks: [ 'sass' ],
        options: {
          spawn: false
        }
      } <% } if(config.isUsingLess()) { %>
      less: {
        files: [ '**/*.less' ],
        tasks: [ 'less' ],
        options: {
          spawn: false
        }
      } <% } %>
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');<% if(config.isUsingSass()) { %>
  grunt.loadNpmTasks('grunt-contrib-sass'); <% } if(config.isUsingLess()) { %>
  grunt.loadNpmTasks('grunt-contrib-less'); <% } %>

  // Load `parata` task
  grunt.loadNpmTasks('parata');

  // Default grunt task
  grunt.registerTask('default', [ '<%= config.cssPreProcessor %>', 'parata' ]);
};
