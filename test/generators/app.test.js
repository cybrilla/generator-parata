var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');
var fs = require('fs');
var support = require('../support.js');

describe('parata:app', function() {
  before(function(done) {
    support.setupTestEnv(done);
  });

  describe('with default options', function() {
    var generator;
    before(function(done) {
      generator = helpers.run(path.join(__dirname, '../../generators/app'))
                         .inDir(support.testTempDirPath)
                         .on('end', done);
    });

    it('creates the expected files / directories', function() {
      var expected = [
        'Gruntfile.js',
        'package.json',
        '.yo-rc.json'
      ];

      assert.file(expected);
    });

    it('uses sass', function() {
      assert.fileContent('package.json', 'grunt-contrib-sass');
      assert.fileContent('Gruntfile.js', 'sass: {');
    });
  });

  describe('with custom options', function() {
    var generator;
    before(function(done) {
      generator = helpers.run(path.join(__dirname, '../../generators/app'))
                         .inDir(support.testTempDirPath)
                         .withPrompts({ cssPreProcessor: 'less' })
                         .on('end', done);
    });

    it('creates the expected files / directories', function() {
      var expected = [
        'Gruntfile.js',
        'package.json',
        '.yo-rc.json'
      ];

      assert.file(expected);
    });

    it('uses less', function() {
      assert.fileContent('package.json', 'grunt-contrib-less');
      assert.fileContent('Gruntfile.js', 'less: {');
    });
  });
});
