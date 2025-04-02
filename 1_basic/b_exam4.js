//연산자
// console.log(5 == 5);
// console.log(5 == '5');
// console.log(5 === '5');

// console.log(0 == ''); //true(둘다 false이기 때문)
// console.log(true == 1); //true(숫자 0이 아니면 전부 true)

//for ~ in  vs  for ~ of
const gilDong = {
  name: '홍길동',
  year: 2000,
  company: 'kosa'
};

//for ~ in => key 값을 가져옴(key와 value값 전부 알고싶을떄떄)
for (let key in gilDong) {
  console.log(key);   //key값 가져옴
  console.log(gilDong[key]);  //value 값 가져옴
}

const kosaMember = ['이민영', '강신혁', '김선욱', '유지훈'];
console.log('====================');

for (let key in kosaMember) {
  console.log(key);
  console.log(`${key}: ${kosaMember[key]}`);
}

//for ~ of => value 값만 가져옴
for (let value of kosaMember) {
  console.log(value);
}


//OR 연산자
console.log('' || 'Dog'); //앞에 값이 있으면 출력 없으면 뒤에값 출력

let event2 = '';
event2 = event2 || '영화보기';  //event2가 있으면 출력 없으면 영화보기 출력

if (event2) {   //event2 값이 영화보기 이므로 값이 있기때문에 true (빈문자열이 아닌경우 전부 true)
  console.log('놀기');  
} else {
  console.log('일하기');
}

