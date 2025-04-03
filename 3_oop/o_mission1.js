/*
과제1 > Rectangle 생성자 함수를 class 기반으로 수정.
    2 > 상속을 이용해서 Squarte 구현해보자 
*/


class Rectangle {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
 
  constructor(length) {
    super(length, length);
  }
}

const rectangle = new Rectangle(10, 50);
console.log(rectangle.getArea());

const square = new Square(5);
console.log(square.getArea());
