/*
생성자 함수를 이용한 객체 생성 => 다수의 객체를 생성하기 위함
*/

function Student(name, kor, eng, mat) {
  //객체 초기화 
  this.name = name; 
  this.kor = kor;
  this.eng = eng;
  this.mat = mat;

  //함수
  // this.getSum = function () {
  //   return this.kor + this.eng + this.mat;
  // }
  // this.getAverage = function () {
  //   return this.getSum() / 3;
  // }
  // this.toString = function () {
  //   return this.name + '\t' + this.getSum() + '\t' + this.getAverage();
  // }
}

Student.prototype = {
  getSum: function () {
    return this.kor + this.eng + this.mat;
  },
  getAverage: function () {
    return this.getSum() / 3;
  },
  toString: function () {
    return this.name + '\t' + this.getSum() + '\t' + this.getAverage();
  }  
}

//배열생성
let students = [];

//두개의 Student 객체를 배열에 추가
students.push(new Student('박길동', 80, 70, 90));
students.push(new Student('김길동', 60, 40, 80));

//배열출력(for ~ in)
for (let key in students) {
  console.log(students[key].toString());
}

//배열출력(for ~ of)
for (let student of students) {
  console.log(student.toString());
}



//퀴즈> Rectangle 생성자 함수를 만들고 사각형 넓이를 구하여보자.
//      width, height, getArea()

function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  //함수
  this.getArea = function () {
    return this.width * this.height;
  }
}

let area = new Rectangle(50, 30);
console.log(area.getArea());

//여러개의 개체 생성할 경우
// //배열생성
// let area = [];
// area.push(new Rectangle(50, 30));
// area.push(new Rectangle(60, 80));

// //배열출력
// for (let key in area) {
//   console.log(area[key].getArea());
// }

