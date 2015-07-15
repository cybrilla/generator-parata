var _ = require('underscore'),
    _s = require('underscore.string');

module.exports = {
  templateOptions: function() {
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
      },

      getStyleExtension: function(config) {
        if(config.isUsingSass()) {
          return 'scss';
        }
        else if(config.isUsingLess()) {
          return 'less';
        }
        else {
          throw 'Style pre-processor missing in config.';
        }
      }
    });

    // Set what all options / variables are available to the templates
    return {
      _s: _s,
      config: config,
    };
  }
};
