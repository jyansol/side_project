// const myObj1 = {
//   car: 'Lambo',
// };

// const myObj3 = {
//   name: 'Amie',
//   age: 25,
//   favLanguage: 'Rails',
// };

// Object.assign(myObj1, myObj3);
// //clone
// console.log(myObj1);

// console.log(Object.entries(myObj3));
// //key val

// const myObj = Object.getOwnPropertyDescriptor(myObj3);
// console.log(myObj3);

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

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//생성자 함수 : 대문자로 시작 , this - 인스턴스 , 객체를 만들고 초기화(setting)
//ex) array.filter(),map()이 되는 이유도 array.prototype
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.setOlder = function() {
//   this.age += 1;
// };

// Person.prototype.getAge = function() {
//   return this.age;
// };

// const gomu = new Person('고무곰', 30);
// const iu = new Person('아이유', 25);
// console.log(gomu.setOlder());
// console.log(gomu.setOlder());
// console.log(gomu.setOlder());
// console.log(gomu.getAge());

//class로 바꾸기
class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
  setOlder() {
    this.age += 1;
    return this.age;
  }
}
const person = new Person({ name: '고무곰', age: 30 });
console.log(person.setOlder());

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// String.prototype.myMethod = String에 부여할 수 있음

// function Family(n, a) {
//   this.name = n;
//   this.age = a;
// }
// Family.prototype.sayName = function() {
//   return this.name;
// };
// const me = new Family('쟌솔', 29);
// const pika = new Family('피카', 4);

// console.log(me.sayName());

//class로 바꾸기
class Family {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    return this.name;
  }
}
const me = new Family({ name: '쟌솔', age: 29 });
const pika = new Family({ name: '피카', age: 6 });

console.log(me.sayName());
console.log(pika.sayName());
