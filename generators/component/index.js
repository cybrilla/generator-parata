var generators = require('yeoman-generator'),
    helper = require('../../helper.js'),
    _ = require('underscore'),
    _s = require('underscore.string');

var getComponentProps = function(context) {
  return {
    name: context.name,
    hasVariant: context.options.variants ? true : false
  }
};

module.exports = generators.Base.extend({
  // Constructor
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.templateOptions = helper.templateOptions.bind(this);

    // Require component name as an argument
    this.argument('name', { type: String, required: true });
    this.name = _s.slugify(this.name).toLowerCase();

    // Support for `variants` flag
    this.option('variants');
  },

  // Create component and associated files
  writing: {
    // Generate the appropriate sass / less file for the component
    generateComponentStyleFile: function() {
      var options = this.templateOptions(),
          config = options.config;

      this.fs.copyTpl(
        this.templatePath('style.css'),
        this.destinationPath(config.componentsDir + '/' + this.name + '/style.' + config.getStyleExtension(config)),
        _.extend(options, getComponentProps(this))
      );
    },

    // Generate the example for the component
    generateComponentExampleFile: function() {
      var options = this.templateOptions(),
          config = options.config;

      this.fs.copyTpl(
        this.templatePath('example.html'),
        this.destinationPath(config.componentsDir + '/' + this.name + '/example.html'),
        _.extend(options, getComponentProps(this))
      );
    },

    // Generate a appropriate custom sass / less file for all the components
    generateCustomStyleFile: function() {
      var options = this.templateOptions(),
          config = options.config;

      this.fs.copyTpl(
        this.templatePath('custom_style.css'),
        this.destinationPath(config.componentsDir + '/style.' + config.getStyleExtension(config))
      );
    }
  }
});
