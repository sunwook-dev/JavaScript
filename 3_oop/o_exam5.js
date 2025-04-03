/*
class 기반의 객체지향 프로그래밍
*/

class IdolModel{
  #name;  //private 선언
  #year;

  constructor(name, year) {
    this.#name = name;
    this.#year = year;
  }

  set name(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get toString() {
    return this;
  }

  static returnGroupName() {
    return '아이브';
  }
}

let yuzin = new IdolModel('안유진', 2003);
//yuzin.name = '장원영';
console.log(yuzin.name);
console.log(yuzin);
console.log(IdolModel.returnGroupName());
