/*
타입 형변환
1) 암묵적
2) 명시적
*/

//명시적
let age = 20;
let stringAge = age.toString();
console.log(typeof stringAge); //string

//암묵적
let test = age + '';
console.log(typeof test); //string

//되지만 쓰지말기
console.log('100' + '2'); 
console.log('100' * '2');
console.log('100' - '2');

//문자열 => number : eval(), Number(), parseInt(), parseFloat()
let num = '100';

// let num = '100안녕';
// num = Number(num);

num = eval(num);
num = Number(num);
num = parseInt(num);
num = parseFloat(num);
let result = num + 100;
console.log(result);  //200

/*
Hoisting(호이스팅) - 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼
                    느껴지는 현상
*/

console.log('============================');
console.log(name);  //undefined
var name = '홍길동';

console.log(kim);
let kim = '김씨';