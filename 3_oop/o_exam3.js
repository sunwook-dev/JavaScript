/*
Prototype
*/

//__proto__ => 모든 객체에 존재하는 프로퍼티

const testObj = {};
//console.log(testObj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}
//console.log(IdolModel.prototype);
console.log(IdolModel.prototype.constructor === IdolModel);

const yuJin = new IdolModel('안유진', 2003);  
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);
console.log(testObj.__proto__ === Object.prototype);
console.log(yuJin.toString());  //yuJin이 Object에 있는 toString함수를 호출할수 있다.
console.log(IdolModel.prototype.__proto__ === Object.prototype);

//IdolModel 생성자 만듬
//yuJin은 __proto__ 를 가짐
//생성자함수가 만든 모든객체는 생성자 함수가 가지는prototype 주소를
// yuJin도 참조하여 사용할수 있음
// 따라서 prototype에 있는 함수를 yuJin 객체도 호출하여 사용가능함
//생성자 함수를 통해 Yujin을 생성하면 모든 객체는 __proto__가 있음

IdolModel.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다`;
}

const wonYoung = new IdolModel('장원영', 2002);
console.log(yuJin.sayHello());
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello === wonYoung.sayHello);
console.log(yuJin.hasOwnProperty('sayHello'));