/*
class 기반 상속 구현
*/

class IdolModel {
  name;
  year;

  //생성자
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name} 입니다`;
  }
}

class FemaleIdolModel extends IdolModel{
  part;

  constructor(name, year, part) {
    super(name, year);  //부모 생성자 초기화하기 위하여 사용
    this.part = part; //자기가 가지고 있는 생성자
  }

  dance() {
    return `여자 아이돌이 춤을 춥니다`;
  }

  //오버라이딩
  sayHello() {
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin.dance());

//자기에게 있는 함수가 아니지만 상속을 했으므로 사용가능
console.log(yuJin.sayHello()); 
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof IdolModel);