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
console.log(container([12,84,55,37,48], 55))    