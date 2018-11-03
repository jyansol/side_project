class Animals {
  constructor({ name, say }) {
    this.name = name;
    this.say = say;
  }
  introduce() {
    return this.say;
  }
}

class Person extends Animals {
  constructor({ say, ...rest }) {
    super(rest);
    //super 부모클래스 생성자 호출
    this.say = say;
  }
  introduce() {
    return (this.say = '안녕');
  }
}

class Pig extends Animals {
  constructor({ say, ...rest }) {
    super(rest);
    this.say = say;
  }
  introduce() {
    return (this.say = '꿀꿀');
  }
}

const person = new Person({});
const pig = new Pig({});

console.log(person.introduce());
console.log(pig.introduce());
