//2가지 이상 ㅁ인수를 받아서
//받은 문자열을 받아서 리턴(this사용)
//값4 2-매개변수 2-this

function strReturn(name, age) {
  return `이름은 ${name} 나이는 ${age} 사는곳은 ${this.city}`;
}

strReturn('1', '이름');
//this : 사용될때 결정

// call
function strReturn(name, price) {
  strReturn.call(this, name, price);
  this.city = 'seoul';
}

var person = function(name, age) {
  return `이름은 ${name} 나이는 ${age} 사는곳은 ${this.city} 취미는 ${this.hobby}`;
};

// fun.apply(thisArg, [argsArray]);
var obj = {
  city: 'seoul',
  hobby: 'drawing',
};
var obj2 = {
  city: 'dfe',
  hobby: 'greh',
};

person.call(obj, '이름', '11');
person.call(obj2, '이름', '11');
person.call({});

//apply
person.apply(obj, ['이름', 12]);

//bind
var getObj = person.bind(obj, '이름', 12);

getObj();
