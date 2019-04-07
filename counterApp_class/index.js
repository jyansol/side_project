// 1. 초기값은 0 이지만 변경가능하다
// 2. +. - 실행시 증가 감소
// 3. +, - 호출시 원하는 만큼 증가
// 4. 카운터를 초기화하는 리셋
// 5. 로컬스토리지에 crud

class Counter {
  constructor(number = 0) {
    this.number = number;
  }
  increment(number = 0) {
    return ++this.number + number;
  }
  decrement(number = 0) {
    return --this.number + number;
  }
  reset() {
    this.number = 0;
    return this.number;
  }
}
const counter = new Counter(0);

console.log(counter.increment());
console.log(counter.decrement());
