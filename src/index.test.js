var expect = require('chai').expect;
var snfe = require('../build/index').snfe;

describe('Basics', function() {
  it('should strip function name as expected', function() {
    var testCases = [
      {
        raw: 'var test1 = function b(a,b,c){};',
        expected: 'var test1 = function(a,b,c){};'
      },
      {
        raw: 'var test1 = function anonymous(a,anonymous,c){};',
        expected: 'var test1 = function(a,anonymous,c){};'
      },
      {
        raw: 'var test2 = [function c(a,b,c){}];',
        expected: 'var test2 = [function(a,b,c){}];'
      },
      {
        raw: 'var test3 = (function d(c,d,e){return "hello";})();',
        expected: 'var test3 = (function(c,d,e){return "hello";})();'
      },
      {
        raw: 'var test4 = { test: function e(d,e,f){} };',
        expected: 'var test4 = { test: function(d,e,f){} };'
      },
      {
        raw: 'var test4 = { test: !function e(d,e,f){} };',
        expected: 'var test4 = { test: !function(d,e,f){} };'
      }
    ];

    for (var c = 0; c < testCases.length; c++) {
      var raw = testCases[c].raw;
      var expected = testCases[c].expected;
      var result = snfe(raw);
      expect(result).to.be.equal(expected);
    }
  });

  it('should not strip function name because JS is case-sensitive', function() {
    var testCases = [
      {
        raw: 'var test1 = function B(a,b,c){};',
        expected: 'var test1 = function B(a,b,c){};'
      },
      {
        raw: 'var test1 = function Anonymous(a,anonymous,c){};',
        expected: 'var test1 = function Anonymous(a,anonymous,c){};'
      },
      {
        raw: 'var test2 = [function C(a,b,c){}];',
        expected: 'var test2 = [function C(a,b,c){}];'
      },
      {
        raw: 'var test3 = (function D(c,d,e){return "hello";})();',
        expected: 'var test3 = (function D(c,d,e){return "hello";})();'
      },
      {
        raw: 'var test4 = { test: function E(d,e,f){} };',
        expected: 'var test4 = { test: function E(d,e,f){} };'
      },
      {
        raw: 'var test4 = { test: !function E(d,e,f){} };',
        expected: 'var test4 = { test: !function E(d,e,f){} };'
      }
    ];
    for (var c = 0; c < testCases.length; c++) {
      var raw = testCases[c].raw;
      var expected = testCases[c].expected;
      var result = snfe(raw);
      expect(result).to.be.equal(expected);
    }
  });
  it('should throw expecetion when input is empty', function() {
    expect(function() {
      snfe('');
    }).to.throw('input was empty');
  });

  it('should throw expecetion when input is invalid', function() {
    expect(function() {
      snfe();
    }).to.throw('input must be a string');
  });
});