var path = require('path');
var fs = require('fs');
var rmrf = require('rimraf');

var TEST_TEMP_DIRNAME = 'temp';

module.exports = {

  _testTempDirname: TEST_TEMP_DIRNAME,

  testTempDirPath: path.join(__dirname, '..', TEST_TEMP_DIRNAME),

  setupTestEnv: function(callback) {
    this.cleanTestTempDir(function() {
      fs.mkdirSync(this.testTempDirPath);
      callback();
    }.bind(this));
  },

  cleanTestTempDir: function(callback) {
    if(fs.existsSync(this.testTempDirPath)) {
      rmrf(this.testTempDirPath, function() {
        callback();
      }.bind(this));

      return;
    }
    callback();
  }

};
