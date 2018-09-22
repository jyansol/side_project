/*
** 문제 1. 생성자
 */

function Person(name, age, live) {
  this.name = name;
  this.age = age;
  this.live = live;
}

// const Person = function (name, age, live) {

// }

Person.prototype.sayInfo = function() {
  return this.name + '님이 사는 곳은' + this.live + '이며 나이는' + this.age + '세 입니다.';
};

const person = new Person('김김이', 29, '서울');
const person2 = new Person('박박이', 30, '부산');

console.log(person.sayInfo());
console.log(person2.sayInfo());

/*
** 문제 2. 프로토타입
 */

String.prototype.sayString = function() {
  return this + '을 입력하셨네요.';
};

console.log('문자열'.sayString());
