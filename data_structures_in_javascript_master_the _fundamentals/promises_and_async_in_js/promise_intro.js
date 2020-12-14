// Promise : Objects that represents the eventual completion of an asynchronous operation, and its resulting value.

// Promise States :
// 1. Pending : Initial state
// 2. Fulfilled : call document
// 3. Rejected : call rejected like catch function

// Promise are not Lazy in JS

// Carved Rock Fitness APIs

// github.com/taylonr/async-programming-promises

const print = console.log
function hello() { return "Hello"; }
console.log(hello());

async function hello1() { return "Hello" };
console.log(hello1())

let hello2 = async function(){ return "Hello"};
console.log(hello2());

let hello3 = async () => {return "Hello3"};
print(hello3());


