ac = console.log;
function container(arr, value){
    ac(arr.length)
  for(let i = 0; i < arr.length; i++){
      ac(">>>",arr[i],value)
    if(arr[i] == value){ 
      return true;
    } else {
      return false;
    }
  }
}
 
const c = [12,84,55,37,48];
// console.log(container([12,84,55,37,48], 55))    


const g = () => {
  var hey = this.name  
  console.log(this.name)
  return hey;
}
const p = {name : "hello"};
g.call(this.p)

const add = {

  street : 'elm str',
  state: 's',
}

const {street:s,state:d} = add;
console.log("str",s)
console.log("state",d)


function calculate(arr,msg){
  arr[1] = 150;
  msg = 'inside'
  console.log('arr === ',arr[0],arr[1])

  console.log(arr[0]  + arr[1]);
  console.log(msg)
}

const arr = [100]
console.log('arr === ',arr)
let  msg = 'outside'

calculate(arr, msg)
console.log('arr === ',arr[0],arr[1])

console.log(arr[0]  + arr[1]);
console.log(msg)

console.log('=====================')

const x = {};
x['foo'] = 'bar'
x.bar = {
  'first': 100,
  'second': 200
}
console.log(x.bar['first'] + x.bar['second'])

console.log('=====================')

var bar = 5;
function foo(bar){
  if(bar >= 5){
    bar = 'zzz'
  }else{
    let bar = 'qux'
  }
  console.log(bar)
}
foo(2)
foo(6)
console.log(bar)