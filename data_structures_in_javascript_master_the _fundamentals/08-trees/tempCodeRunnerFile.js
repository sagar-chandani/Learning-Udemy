let fibonacci = {
    [Symbol.iterator]() {
      let pre = 0, cur = 1;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { done: false, value: cur }
        }
      }
    }
  }
  
  for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 9000000000000000000)
      break;
    console.log(n);
  }

  // Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;
console.log()
// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set

// Binary and Octal Literals
// Two new numeric literal forms are added for binary (b) and octal (o).

// 0b111110111 === 503 // true
// 0o767 === 503 // true

let array = [1,67,43,78,2,566,3,4,6,67,67,78678,234,23,324,546,85678,3453]

let sortedArray = array.sort()
console.log(sortedArray)

let joinedArray = sortedArray.join()
console.log(joinedArray)