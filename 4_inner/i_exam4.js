/*
정규표현식
*/
//1. 문자열.match(정규표현식) => 매칭된 결과(문자열) 리턴
// const result = 'sports'.match(/sp/);
// console.log(result);

//2. RaqExp.exec('문자열') => 매칭된 결과(문자열) 리턴
//정규표현식이 앞, 뒤가 문자열
// const str = 'fadsfaskjjk ffssdfjs sdfJS';
// const re = /js/ig;  //i: 대소문자 구분없이, g: 전역검사
// let result = re.exec(str);

// while (result) {
//   console.log(result);
//   result = re.exec(str);
// }

//퀴즈 : 정규표현식
// const str = 'This is a data: April 3 2025';
// const re = /\w*\s\d+\s\d+/ig;
// let result = re.exec(str);
// while (result) {
//     console.log(result);
//     result = re.exec(str);
// }
  
//문자열.replace(정규표현식, 변경 문자열)
const str = '오늘 우리는 SW 세상에 살고 있다. sw가 매우 중요하다.';
const result = str.replace(/sw/ig, '소프트웨어');
console.log(result);

//이메일 체크
//정규표현식.test(문자열) => (true/false)
//정상: dolsam77@nate.com
//비정상: 33dolsam77@nate.com
//비정상: dolsam77nate.com
//비정상: 33dolsam77@nate.comjkj

//const mailCheck = /^[a-zA-Z]+\w*@[a-z]+.com$/;
// console.log(mailCheck.test('dolsam77@nate.com'));
// console.log(mailCheck.test('33dolsam77@nate.com'));
// console.log(mailCheck.test('dolsam77nate.com'));
// console.log(mailCheck.test('33dolsam77@nate.comjkj'));

const str2 = 'dolsam77@nate.com';
const re = /^\D\w+@\w+\.\w{2,3}$/ig;
const result2 = re.test(str2);

if (result2) {
  console.log('정상');
} else {
  console.log('비정상');
}