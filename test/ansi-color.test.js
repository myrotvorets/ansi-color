const { afterEach, before, describe, it } = require('node:test');
const { strictEqual } = require('node:assert/strict');
const { log, set, replace } = require('../lib/ansi-color');

describe('ansiColor', function() {
  describe('#set()', function() {
    it('should return a string with the specified color', function() {
      strictEqual(set('hello', 'red'), '\u001B[31mhello\u001B[0m');
      strictEqual(set('world', 'green'), '\u001B[32mworld\u001B[0m');
    });

    it('should not modify the string when color is empty', function() {
      strictEqual(set('hello', ''), 'hello');
    });
  });

  describe('#log()', function() {
    let consoleLog;

    before(() => {
      consoleLog = console.log;
    });

    afterEach(() => {
      console.log = consoleLog;
    });

    it('should log a message with the specified color', function() {
      let output = '';
      console.log = function(message) {
        output += message;
      };

      log('hello', 'red');
      strictEqual(output, '\u001B[31mhello\u001B[0m');
    });
  });

  describe('#replace()', function() {
    it('should replace all occurrences of a regex with the specified color', function() {
      strictEqual(replace('hello world', 'l', 'red'), 'he\u001B[31ml\u001B[0m\u001B[31ml\u001B[0mo wor\u001B[31ml\u001B[0md');
      strictEqual(replace('foo bar baz', 'a', 'green'), 'foo b\u001B[32ma\u001B[0mr b\u001B[32ma\u001B[0mz');
    });
  });
});
