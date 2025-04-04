/*
비동기식(Async)
*/

// function longwork() {
//   const now = new Date();
//   const millisecond = now.getTime();
//   const afterTwoSeconds = millisecond + 2 * 1000;
  
//   while(new Date().getTime() < afterTwoSeconds) {}
//   // 2초 대기
//     console.log('완료');
// }

//동기식 프로그래밍
// console.log('Hello');
// longwork(); // 2초 대기
// console.log('World'); // 2초 대기 후 출력

//비동기식 프로그래밍
function longwork() {
  setTimeout(() => {  //setTimeout은 비동기식으로 동작
    console.log('완료');
  }, 2000); // 2초 대기
}

console.log('Hello');
longwork();
console.log('World');