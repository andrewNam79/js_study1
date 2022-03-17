//반드시 선언 해야 사용 할 수 있게 하는 키워드
'use strict';

console.log('hello hello');

var var1; // 옛날 방식 ( scope 가 안먹힘 )
let var2; // 이제 이걸 써야 함 mutable
const var4 = 5; // immutable ( 특별하게 변경될일이 없다면 되도록  const 사용 )

let var5 = 'hey'; // global scope
{
    let var6 = 'local hey'; //local scope
    console.log(var5);
}

console.log(`type ${typeof var5}`);

/*
object 는 immutable 이지만 내부 속성은 mutable
*/

//data structure
const stvar = {mem1: 1, mem2:"name"};
console.log(stvar.mem2);


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// or일 경우 첫번째것만 true이면 그 다음것은 확인 하지 않음
// 그러므로 연산이 복잡한것일수록 뒤로 보내는것이 좋음
// 아래코드의 경우 Function parameter는 리소스를 많이 소요 하므로 뒤로 보냄
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// and의 경우 첫번째 것이 False 이면 뒤에 구문 실행 하지 않음
console.log(`and: ${value1 && value2 && check()}`);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}