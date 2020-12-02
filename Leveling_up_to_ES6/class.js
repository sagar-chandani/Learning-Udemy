'use strict';
/* Check if class expressions or declarations are hoisted */


const Person = class {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    jump(){
        console.log("Jump")
    }

    getName () {
        return this.name + ' :)'
    }


    setName (name) {
        this.name = name;
    }
}

const person = new Person('test1',43);

console.log(person)

const person2 = new Person('test',43);
console.log(person2)
console.log(person.getName())
person.setName('hey')
console.log(person.getName())
console.log(person);