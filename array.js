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


const hey = (a, b) => {
    let c = a+b;
    return c
}

console.log(`test : ${hey(3,5)}`);

const fruits = [4, 10, 30, 50, 60];

for (const fruit of fruits){
    console.log(`과일 : ${fruit}`);
}

