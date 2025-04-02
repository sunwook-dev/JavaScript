// 함수의 실행 컨텍스트
// Lexical Scope : 함수가 선언된 위치가 상위 스코프를 결정한다.
// Dynamic Scope : 함수가 실행한(호출한) 위치가 상위 스코프를 결정한다.

let var1 = 10;
function func() {
  let var2 = 20;
  console.log(var1);
}
func();

//let value = "value1";
function printFunction() {
  let value = "value2";
  
  function printValue() {
    return value;
  }
  console.log(printValue());
}

printFucntion();


//함수가 정의된 위치의 상위 스코프가 결정이 된다
let value = "value1";
function printFucntion(func) {
  let value = "value2";
  console.log(func());
}

printFucntion(printValue);
//출력 : value1

let numberTree = 3;
function functionOne() {
  let numberTree = 100;
  functionTwo();
}

function functionTwo() {
  console.log(numberTree);
}

functionOne();

// 1.functionOne 호출
// 2.functionTwo() 함수호출
// 3.functionTwo 함수에서 numberTree출력
// 4.함수가 선언된 위치의 상위인 let numberTree =3 이 출력

console.log('========================');

/*
var 키워드 함수 레벨 스코프만 적용
let, const 키워드는 함수레벨 스코프와 블록 레벨 스코프도 적용
*/


//아래에서는 i값이 999이지만 블록레벨 스코프는 적용이 안되기 때문에 i값이
//for문으로 인해 변경되어 10이 출력된다.
var i = 999;
for (var i = 0; i < 10; i++) {  
  console.log(i);
}
console.log(i);


let i = 999;
for (let i = 0; i < 10; i++) {  //for문은 블록레벨 스코프(함수레벨 스코프)
  console.log(i);
}
console.log(i);
//let과 const는 블록레벨(for문)과 외부의 i값을 분리하기 떄문에 똑같은 i여도 다른값임


//var는 함수레벨 스코프는 가지고 있으므로 
//for문 안에 있는 func3함수안에서는 200이 출력되고 밖에서는 100이 출력됨
var var3 = 100;
function func3() {
  var var3 = 200;
  console.log(var3);
}

func3();
console.log(var3);
