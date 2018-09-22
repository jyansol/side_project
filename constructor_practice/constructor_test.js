const myObj1 = {
  car: 'Lambo',
};

const myObj3 = {
  name: 'Amie',
  age: 25,
  favLanguage: 'Rails',
};

Object.assign(myObj1, myObj3);
//clone
console.log(myObj1);

console.log(Object.entries(myObj3));
//key val

const myObj = Object.getOwnPropertyDescriptor(myObj3);
console.log(myObj3);

// .definePropertier() / seal

//writable : false 을 값으로 넣으면 할당안됨.
//.getOwnPropertyDescriptor() 해야 정보

// .freeze()
// isFrozen

// key = prop = 속성
// .keys()

//js 객체!
// var arr = ['a','a','a'] === var arr = { 0 : 'a', 1 : 'b', 2 : 'c'}
// entries(), keys(), values()
// dd['vv[0]']

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function Person(n, a) {
  this.name = n;
  this.age = a;
} //생성자 함수 : 대문자로 시작 , this - 인스턴스 , 객체를 만들고 초기화(setting)

Person.prototype.setOlder = function() {
  this.age += 1;
};

Person.prototype.getAge = function() {
  return this.age;
};
//prototype
//ex) array.filter(),map()이 되는 이유도 array.prototype

const gomu = new Person('고무곰', 30);
const iu = new Person('아이유', 25);

// ---------------------------------------

function Family(n, a) {
  this.name = n;
  this.age = a;
}

Family.prototype.sayName = function() {
  return this.name;
};

const me = new Family('쟌솔', 29);
const pika = new Family('피카', 4);

console.log(me.sayName());

// String.prototype.myMethod = String에 부여할 수 있음
