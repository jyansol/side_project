/*
** 문제 1. 생성자
 */

// function Person(name, age, live) {
//   this.name = name;
//   this.age = age;
//   this.live = live;
// }

// Person.prototype.sayInfo = function() {
//   return this.name + '님이 사는 곳은' + this.live + '이며 나이는' + this.age + '세 입니다.';
// };

// const person = new Person('김김이', 29, '서울');
// const person2 = new Person('박박이', 30, '부산');

// console.log(person.sayInfo());
// console.log(person2.sayInfo());

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ES2015에서 도입된 클래스는 생성자의 기능을 대체합니다.
// class 표현식을 사용하면, 생성자와 같은 기능을 하는 함수를 훨씬 더 깔끔한 문법으로 정의할 수 있습니다.
// class는 함수가 아닙니다!
// 객체 => 생성자 => 프로토타입 => Class
class Person {
  constructor({ name, age, live }) {
    this.name = name;
    this.age = age;
    this.live = live;
  }
  sayInfo() {
    return `${this.name}님이 사는 곳은 ${this.live}이며, 나이는${this.age}세 입니다.`;
  }
}
const person = new Person({ name: '김김이', age: 29, live: '서울' });
const person2 = new Person({ name: '박박이', age: 29, live: '부산' });
console.log(person.sayInfo());
console.log(person2.sayInfo());

/*
** 문제 2. 프로토타입
 */

String.prototype.sayString = function() {
  return this + '을 입력하셨네요.';
};

console.log('문자열'.sayString());
