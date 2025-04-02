// 함수를 호출할 때 함수의 파라미터 개수가 일치하지 않아도 오류x
// function add(a, b, c) {
//   console.log(a, b, c);
// }

// add(10, 30, 50, 60, 70);
// add(10, 20);

//파라미터 개수가 많을 경우 arguments객체로 대체할 수 있다.
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {  //
    sum += arguments[i];    
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//함수 파라미터에 기본값 설정 (디폴트값이 여러개여도 상관없지만 맨 마지막에 와야함)
function calcurate(total, tax = 0.1, tip = 0.2) { 
  return total + (total * tax) + (total * tip);
}

console.log(calcurate(100));
console.log(calcurate(100, 0.5, 0.1));


//화살표 함수(함수형 프로그래밍)
let greeting = function (name) {
  return "Hello " + name;
}
console.log(greeting('박길동'));

//위 내용을 화살표 함수로
let greeting2 = name => {
  return `Hello ${name}`;
}
console.log(greeting2('조길동'));

//위 내용 더 줄이기
let greeting3 = name => `Hello ${name}`;
console.log(greeting3('최길동'));

//퀴즈 : 아래의 함수를 화살표 함수로 고치기
const add = function (a, b) {
  return a + b;
}
console.log(add(10, 20));

//화살표 함수 
const direct = (a, b) => a + b;
console.log(direct(100, 200));

//제곱근을 하고자 할때(map)
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num => num * num);
console.log(result);

//성적관리와 관련된 예제 만들기
const names = ['김길동', '박길동', '조길동', '한길동'];
const scores = [72, 88, 65, 84];

//평균점수를 구하는 함수

let avgnum = scores.reduce((sum, num) => sum + num);
console.log(avgnum/4);
  
//최고점수를 구하는 함수
// function max() {
//   for (let i = 0; i < scores.length; i++) {
//     for (let j = 0; j < names.length; j++) {

//     }
//       if (scores[i] > scores[i + 1]) {
//         return -1;
//       } else if (scores[i] < scores[i+1]) {
//         return 1;
//       } else {
//         return 0;
//       }
//   }
// }

const maxscore = Math.max(...scores);
const maxindex = scores.indexOf(maxscore);
const nameindex = names[maxindex];
console.log(`${nameindex} : ${maxscore}`);


//합격자 목록을 출력하는 함수(80점 이상)
