const mainFunction = function(someVal, func, type) {
  // func(someVal);
  // 객체의 각괄호로 접근
  if (!func.hasOwnProperty(type)) {
    return console.log('없는메서드');
  }
  func[type](someVal);
};

// mainFunction('hahaha', (str) => console.log(str), 'log');
mainFunction({ a: 1, b: 2 }, console, 'log');
mainFunction({ a: 1, b: 2 }, console, 'dir');
mainFunction({ a: 1, b: 2 }, console, 'table');
mainFunction({ a: 1, b: 2 }, console, 'error');
mainFunction({ a: 1, b: 2 }, console, 'ss');
