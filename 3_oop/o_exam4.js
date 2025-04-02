function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다`;
}

//자식 생성자
function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;  

  this.dance = function () {
    return `${this.name}가 춤을 춥니다.`;
  }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(gaEul.sayHello());
console.log(ray.dance());

/*
함수의 prototype 변경 => 상속 구현
*/
FemaleIdolModel.prototype = IdolModel.prototype;  //아이돌모델의 prototype을 Female 아이돌에게줌
const eSeo = new FemaleIdolModel('이서', 2007);
console.log(eSeo.sayHello());