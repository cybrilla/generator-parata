var generators = require('yeoman-generator'),
    _ = require('underscore'),
    _s = require('underscore.string');

module.exports = generators.Base.extend({
  
  // On Initialize
  initalizing: function() {
    var config = _.extend(this.config.getAll(), {
      isUsingSass: function() {
        if(this.cssPreProcessor === 'sass') {
          return true;
        }

        return false;
      },

      isUsingLess: function() {
        if(this.cssPreProcessor === 'less') {
          return true;
        }

        return false;
      }
    });

    // Set what all options / variables are available to the templates
    this.templateOptions = {
      _s: _s,
      config: config,
    };
  },

  // Prompt for details on bootstrapping
  prompting: function() {
    var done = this.async();
    this.prompt([

      // Prompt for the project name
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        store: true,
        default: this.appname
      },

      // Prompt for the css pre-processor
      {
        type: 'list',
        name: 'cssPreProcessor',
        message: 'Your preferred CSS pre-processor',
        choices: [
          'sass',
          'less'
        ],
        default: 'sass',
        store: true
      },

      // Prompt for the components directory
      {
        type: 'input',
        name: 'componentsDir',
        message: 'Your preferred directory to store the components',
        default: 'components',
        store: true
      },

      // Prompt for the build destination
      {
        type: 'input',
        name: 'dest',
        message: 'Your preferred destination directory where all built components are compiled into',
        default: 'dist',
        store: true
      },

      // Prompt for the server port
      {
        type: 'input',
        name: 'serverPort',
        message: 'Your preferred port where your app will be served',
        default: '8888',
        store: true
      },
    ], function(answers) {
      console.log(answers);
      this.config.set(answers);
      done();
    }.bind(this));
  },

  // Writing
  writing: {

    // Write `package.json`
    packageJSON: function() {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        this.templateOptions
      );
    },

    // Write `Gruntfile.js`
    gruntfile: function() {
      this.fs.copyTpl(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js'),
        this.templateOptions
      );
    }
  }
});
