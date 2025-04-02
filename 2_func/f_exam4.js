/*
함수 클로저
=> 함수 호출 이후에도 함수의 실행 컨텍스트 영역을 유지
*/

function outerFunc() {
  let x = 10;
  let innnerFunc = function () {
    console.log(x);
  }
  return innnerFunc;
}

let inner = outerFunc();
inner();

//1. x값을 사용하는 함수를 만든다(innerFunc)
//2. 그 함수를 리턴한다.

//데이터 캐싱에 사용
// 데이터 캐싱 전
function cashFunction(newNumb) {
  //아주 오래 소요되는 작업 => 함수를 호출할때마다 작업을 계속해줘야함
  let number = 10 * 10;
  return number * newNumb;
}
console.log(cashFunction(10));
console.log(cashFunction(20)); //함수를 호출할때마다 let number = 10* 10작업을 계속해야함

//데이터 캐싱 후 
function cashFunction2(newNumb) {
  let number = 10 * 10;

  function innerCashFunction(newNumb) {
    return number * newNumb;
  }
  return innerCashFunction;
}

const runner = cashFunction2();
console.log(runner(30));
console.log(runner(40));

//1. cashFunction2 호출시 처음 let number 값이 생성
//2. 그 다음부터는 number는 고정되어 있고 innerCashFunction의 리턴받은 값을 가지고사용
//3. 작업순서
//   1)console.log(runner(30)); 실행
//     -> number = 100,   newNumb = 30
//     -> return 값 : 3000
//   2)console.log(runner(40)); 실행
//     -> number = 100은 이미 고정이 되어있으므로 return에서는 넘어오는 newNumb 값만 받아서 사용
//     -> return 값 : 100*40 = 4000

// function outer(arg1, arg2) {
//   let num = 1000;

//   function outerFunction(arg1, arg2) {
//     return num / (arg1 + arg2);
//   }
//   return outerFunction;
// }

// //방법1
// const run = outer();
// console.log(run(16, 14));
// console.log(run(19, 23));
// console.log(run(50, 80));
// console.log('==================');

// //방법2
// console.log(outer()(16, 14)); //outer() => run과 같음
// console.log(outer()(19, 1));
// console.log(outer()(90, 70));

function outer(arg1, arg2) {
  function inner(innerArg) {
    console.log((arg1 + arg2) / innerArg);
  }
  return inner;
}

//let inner2 = outer(16,14);
//inner2(10);
//위 두줄을 아래와 같이 한줄로 사용가능
outer2(16, 14)(10);