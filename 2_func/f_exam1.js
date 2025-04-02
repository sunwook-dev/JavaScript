// console.log(add(10, 20));
// console.log(add2(100, 200));

// 선언적 함수 : 선언적 함수는 먼저 메모리에 올라감(top-down 방식에서 예외)
// 메모리에 먼저 올라가므로 에러가 안남
// function add(a, b) {
//   let sum = a + b
//   return sum;
// }

// console.log(add(10, 20));

//익명 함수 : 변수에 함수를 담을 수 있다 (변수를 함수처럼 사용가능) 
// -> top-down방식으로 인해 메모리에 올라가는 순서가 변수가 선언되기전에 호출하므로 에러남

// let add2 = function (a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(typeof add2);
// console.log(add2(100, 200));

// add2 vs add2()
// let plus = add2;  //함수자체가 전달 : 주소값 할당(plus도 함수)
// let plus2 = add2(20, 30)
// console.log(typeof plus);
// console.log(plus(50, 100));
// console.log(plus2);
// console.log('=========================');

//함수의 파라미터에 함수를 전달할 수 있다.(콜백함수)
// let foo = function (func) {
//   if (typeof func === 'function') {
//     func();
//   }
// }

// foo(function () {
//   console.log('파라미터에 함수를 전달하는 예제');
// })

//함수가 함수를 리턴 할 수 있다.
//함수를 리턴하는 예제와 함께 리턴된 함수를 호출해 보자.
// let foo2 = function () {
//   return function () {
//     console.log('함수를 리턴하는 예제');
//   }
// }

// let box = foo2();
// box();

//함수의 파라미터에(plus or minus) 호출
//plus - > plus 기능을 하는 함수를 리턴
//minus -> minus 기능을 하는 함수를 리턴
//리턴받은 함수를 호출해서 사용하자

// function call(mode) {
//   if (mode === 'plus') {
//     return function (left, right) {
//       return left + right;
//     } 
//   }else if (mode === 'minus') {
//       return left - right;  
//     }
// };

function call(mode) {
  let obj = {
    'plus': function (left, right) {  
      return left + right;
    },
    'minus': function (left, right) {
      return left - right;
    }
  };
  return obj[mode]; //어떤 값이 들어올지 모르기 때문에 mode에는 속성값을 넣어줌
}


//플러스 함수를 리턴
let func1 = call('plus');
console.log(func1(50, 30));

//마이너스 함수를 리턴
let func2 = call('minus');
console.log(func2(50, 30));



//콜백함수(함수의 파라미터에 전달되는 함수)
function sortDesending(a, b) {
  //return b - a; //내림차순(큰 수부터)
  //return a - b; //오름차순 (작은 수부터)
  
  if (a > b) {
    return -1;  //자리를 바꾸지 않음
  } else if (a < b) {
    return 1;   //자리를 바꿈
  } else {
    return 0;  //a와 b가 같을 경우도 있을수도 있기때문에
  }
}

let arr = [94,48,22,35,10,88,55];
console.log(arr.sort(sortDesending));

//즉시 실행 함수 : 함수 정의와 함께 호출
(function (a, b) {
  console.log(a + b); //함수 내용작성
})(10, 5);  //함수 호출