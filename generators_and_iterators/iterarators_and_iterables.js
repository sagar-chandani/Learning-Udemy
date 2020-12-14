function myIterator(start,finish){
    let index = start;
    let count = 0;

    return {
        next(){
            let result;
            if(index < finish){
                result = {value: index, done: false}
                index += 1;
                count++;
                return result;
            }
            return {
                value: count,
                done: true
            }
        }       
    }
}

const it = myIterator(0,10);
let res = it.next();
while(!res.done){
    console.log(res.value)
    res = it.next()
}

// What is an Iterable? : Some object that can be iterated it self, e.g.: Array
// An object to be iterable it must implement the iterator method, object must be having a property called "Symbol.iterator" key

// For..of loop is iterator

const arr = [0,3,4,6];

const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const map = new Map();
map.set('key1','val1');
map.set('key2','val2');
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);

for(const [key,value] of map){
    console.log(`${key} and ${value}`)
}

const mySet= new Set();
mySet.add('uno');
mySet.add('dos');

const setIterator = mySet[Symbol.iterator]();
console.log(setIterator.next());
console.log(setIterator.next());

for(const value of mySet){
    console.log(value)
}