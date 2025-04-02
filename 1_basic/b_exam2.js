//console.log('abc');

/*
여러줄 주석
*/

// 변수 선언, 초기화
// var num = 100; //숫자는 전부 number
console.log(num);
console.log(typeof num);

//자바스크립트는 변수 선언시 타입을 명시하지 않음 데이터 타입 값이 들어갈 때에 결정
//컴파일 언어 : 데이터, 문법 => 엄격히 요구
//인터프리터 언어 : 문법적으로 느슨한 것을 요구
num = '안녕'; 
console.log(num); 
console.log(typeof num); //num의 데이터 타입 : string

//var : 여러 큰 소코프에서 공유하기 위한 최상위 변수 사용
//let : 작은 스코프에서 로컬변수 사용
//const : 상수값으로 사용(자바의 final과 동일)
//현재는 대부분 let과 const만 사용

//데이터 타입(자료형)
//숫자형(number)
let intNum = 10;
let floatNum = 3.14;
console.log(typeof intNum);
console.log(typeof floatNum);

//문자형(string)
let sinS = 'single';
let doubleS = 'double';
console.log(typeof sinS);
console.log(typeof doubleS);

/*
Template Literal
1. newline -> \n
2. tab -> \t
3. 백슬러시 문자열 안에서 표현 -> \\
*/

const kosa = '이현서\n최지현';
const kosa2 = '이현서\t최지현';
const kosa3 = '이현서\\최지현';
const kosa4 = `
  홍길동 \\\ 박길동
  ^^ "김길동"
  `;
console.log(kosa);
console.log(kosa2);
console.log(kosa3);
console.log(kosa4);

const groupName = 'kosa'
console.log(groupName + ' 김길동');
console.log(`${groupName} 박길동 조길동`);

//논리형(boolean)
/*
아래의 경우 전부 false
  => string:빈 문자열
  => 값이 없는 경우 null
  => 0
*/

let boolVar = true;
console.log(typeof boolVar);  //boolean
console.log(!!false); //false
console.log(!!'');  //false
console.log(!!0); //false
console.log(!!undefined); //false
console.log(!!null) //false
console.log(!!'0')  //true : '0' 문자이므로 true
console.log(!!{})  //true : {}객체이므로 true
console.log(!![])  //true : []배열이므로 true

//undefined
let emptyVar; 
console.log(typeof emptyVar); //값은 선언했지만 초기화 하지 않음

//null
let nullVar = null;
console.log(nullVar); //값이 없음

//함수(function)
let fun = function () { };
console.log(typeof fun);  //function이라는 데이터 타입

//객체(object) : 중괄호는 객체
let person = {
  name: '홍길동',
  age : 20
}
console.log(typeof person);
console.log(person.name);
console.log(person['age']); //person.age와 같음

//배열(Array) : 대괄호는 배열
const kosaMember = [
  "백시관", "김도원", "조성욱", "김효연"
];
console.log(typeof kosaMember);
console.log(kosaMember);


//데이터 타입까지 비교할때
const test1 = "1";
const test2 = 1;
console.log(test1 == test2);
console.log(test1 === test2);

//Symbol 타입 : 유일무이한 값을 생성할때 사용
const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1 === symbol2);
