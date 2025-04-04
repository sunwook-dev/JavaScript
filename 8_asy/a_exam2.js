/*
Promise
*/

// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("완료");
//   }, 2000);
// });

// timeoutPromise.then((res) => {
//   console.log('------then------');
//   console.log(res); // 완료
// })


// const getPromise = (second) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('완료');
//   }, second * 1000);
// })

// getPromise(3)
//   .then((res) => {
//     console.log('------1th then------');
//     console.log(res);
//     return getPromise(2);
//   }).then((res) => {
//     console.log('------2th then------');
//     console.log(res);
//   })

//Await 방식
const getPromise = (second) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료');
  }, second * 1000);
})

async function runner() {
  const result = await getPromise(1);
  console.log(result);  
  const result2 = await getPromise(2);
  console.log(result2); 
  const result3 = await getPromise(3);
  console.log(result3); 
}
// runner();
// console.log('실행 끝');

console.log('============================');

//실습문제 = Promise활용
function moneyLend(borrow) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject('채무자 파산');
      }
      resolve(borrow * 1.1); // 10% 이자
    }, 1000);
  });
}

async function lend() {
  try {
    const lend1 = await moneyLend(10);  // 10만원 대출
    const lend2 = await moneyLend(10);  // 10만원 대출
    const lend3 = await moneyLend(10);  // 10만원 대출
    const lend4 = await moneyLend(10);  // 10만원 대출
    const lend5 = await moneyLend(10);  // 10만원 대출
    console.log('대출금액: ' + lend5 + '만원'); 
  }catch (e) {
    console.log(e); // 채무자 파산
  }finally {
    console.log('대금 종료');
  }
}

lend();

console.log('============================');

