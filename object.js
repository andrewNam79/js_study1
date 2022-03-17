'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

const obj1 = {};//'object literal' syntax
const obj2 = new Object(); // 생성

function print(person){
    console.log(`name : ${person.name}`);
    console.log(`age : ${person.age}`);
}

const sehwan = {name:'sehwan', age : 33};
//console.log(`print.. ${print(sehwan)}`);
print(sehwan);

// with JavaScript magic (dynamically typed language)
// can add properties later
sehwan.hasJob = true;
console.log(sehwan.hasJob);

delete sehwan.hasJob;
console.log(sehwan.hasJob);

console.log(sehwan.name);
console.log(sehwan['name']);
sehwan['hasJob'] = true;
console.log(sehwan.hasJob);

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
  }

// 5. in operator: property existence check (key in obj)
console.log('name' in sehwan);
console.log('age' in sehwan);
console.log('random' in sehwan);
console.log(sehwan.random);
// 6. for..in vs for..ofß
// for (key in obj)
console.clear();
for (let key in sehwan) {
console.log(key);
}  



// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);