  var test1 = function b(a,b,c){};
  var test1 = function anonymous(a,anonymous,c){};
  var test2 = [function c(a,b,c){}];
  var test3 = (function d(c,d,e){return 'hello';})();
  var test4 = {
    test: function e(d,e,f){}
  };
  var test4 = {
    test: !function e(d,e,f){}
  };