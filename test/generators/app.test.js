var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');
var support = require('../support.js');

describe('parata:app', function() {
  before(function(done) {
    support.setupTestEnv(done);
  });

  describe('with default options', function() {
    var generator;
    before(function(done) {
      generator = helpers.run(path.join(__dirname, '../../generators/app'))
                         .inDir(support.testTempDirPath, function(dir) {
                           done();
                         });
    });

    it('creates the expected files / directories', function(done) {
      var expected = [
        'Gruntfile.js',
        'package.json',
        '.yo-rc.json'
      ];

      generator.on('end', function() {
        assert.file(expected);
        done();
      });
    });
  });
});
