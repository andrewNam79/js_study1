'use strict';
const arr1 = new Array();
const arr2 = ['돼지','똥','말'];

console.log(arr2);

for (let i = 0; i< arr2.length;i++){
    console.log(arr2[i]);
}

for (let arr of arr2){
    console.log(arr);
}

arr2.forEach( function (arr, index, array){
    console.log(arr);
    console.log(index);
    console.log(array);
} )  ;

arr2.push('사자','똥개');
arr2.pop();

//forEach 값마다 내가 전달 한 함수를 호출 함
arr2.forEach((arr, index) =>{
    console.log(arr);
});


//pop 이나 push는 빠름 제일 뒤에 그냥 넣기 때문
//unshift , shift 는 앞에서부터 해야 하므로 다른 값을 옮겨야 하므로 느림
