/*
Array 배열
*/

let kosaMembers = [
  '현서', '지현', '유정', '효연'
];

console.log(kosaMembers);

//가변성 함수
//push()
console.log(kosaMembers.push('시관'));
console.log(kosaMembers);

//pop() : 배열의 마지막 요소를 제거하고 그 값을 반환
//        배열의 마지막 요소 뽑아냄          
console.log(kosaMembers.pop());
console.log(kosaMembers);

//shift() : 배열의 첫번쨰 요소를 뽑아냄
console.log(kosaMembers.shift());
console.log(kosaMembers);

//splice() : 잘라낸 데이터만 뽑아냄
console.log(kosaMembers.splice(0, 2));
console.log(kosaMembers);


//불변성 함수
kasaMembers = [
  '인우', '지혜', '정윤', '지훈'
];

console.log('==========================');
console.log(kasaMembers);

//concat()
console.log(kasaMembers.concat('서진'));
console.log(kasaMembers);

//slice() : 일정 부분을 자름
console.log(kasaMembers.slice(0,2));
console.log(kasaMembers);

//배열복사(얕은 복사)
//kasaMembers의 배열을 kasaMembers2에 복사하게 되면 주소값이 동일하기 때문에
//둘중 한곳에서 배열을 수정하면 다른 한 배열도 수정된다.
// let kasaMembers2 = kasaMembers;
// console.log(kasaMembers2 === kasaMembers);
// kasaMembers2.push('길동');
// console.log(kasaMembers);

//spread operator(...)
//배열 복사를해도 하나의 배열이 나머지 배열의 영향을 받지않게함
let kasaMembers2 = [...kasaMembers];
kasaMembers2.push('길동');
console.log('==========================');
console.log(kasaMembers2);
console.log(kasaMembers);
console.log(kasaMembers2 === kasaMembers);

//배열의 중간에도 포함시킬 수 있다.
let kosaMembers2 = ['민영', '신혁', ...kasaMembers, '선욱'];
console.log(kosaMembers2);

//spread 연산자 활용
let arr = [100, 200, 300];

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...arr));

console.log('==========================');

//join()
console.log(kasaMembers.join());
console.log(kasaMembers.join(' '));
console.log(kasaMembers.join('/'));
console.log('==========================');

//sort() : 정렬
console.log(kasaMembers.sort());
//reverse() : 역정렬
console.log(kasaMembers.reverse());
console.log('==========================');

// let foo = function (func) {
//   if (typeof func === 'function') {
//     func();
//   }
// }

// foo(function () {
//   console.log('파라미터에 함수를 전달하는 예제');
// })

const books = [
  {
    name: '프로그래밍',
    price: 35000,
    publisher: '길벗'
  },
  {
    name: '도커의 완성',
    price: 20000,
    publisher: '이지스퍼블릭'
  },
  {
    name: '부자되는 방법',
    price: 60000,
    publisher: '리치컴퍼니'
  }
];

// function book(a, b) {
  
//   if (a.name > b.name) {
//     return -1;  
//   } else if (a.name < b.name) {
//     return 1;   
//   } else {
//     return 0; 
//   }
// }
// console.log(books.sort(book));

const result = books.sort((a, b) => a.name < b.name ? -1 : 1);
console.log(result);

// for each
console.log('=====================================================');
books.forEach((book) => {
  console.log(`책 이름: ${book.name}, 책 가격: ${book.price}, 출판사: ${book.publisher}`);
})

console.log('=====================================================');
// for in
for (let i in books) {
  let book = books[i];
  console.log(`책 이름: ${book.name}, 책 가격: ${book.price}, 출판사: ${book.publisher}`);
}

console.log('=====================================================');

//for of
for (let book of books) {
  console.log(`책 이름: ${book.name}, 책 가격: ${book.price}, 출판사: ${book.publisher}`);
}


