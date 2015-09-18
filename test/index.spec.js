let before = `
  var test1 = function b(a,b,c){};
  var test2 = [function c(a,b,c){}];
  var test3 = (function d(c,d,e){return 'hello';})();
  var test4 = {
    test: function e(d,e,f){}
  };
  var test4 = {
    test: !function e(d,e,f){}
  };
`;
console.log(before);

let after = before.replace(/([\=|\[|\,|\(|\:|\!])[\s]*function\s+([\w]+)(\([\w|\,|\s]*?\2[\w|\,|\s]*?\))/g, '$1function$3');
console.log(after);