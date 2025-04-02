/*
예외처리
try ~ catch
throw : 인위적으로 예외 발생
finally : 예외 발생 유무와 상관없이 반드시 실행
*/

function runner() {
  console.log('hello');
  try {
    throw new Error('문제 발생');  
  } catch (e) {
    console.log('error catch');
  } finally {
    console.log('finally block')
  }  
}

runner()