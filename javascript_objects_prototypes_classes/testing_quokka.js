console.log('Hey')

// The Object Literal :
const person = {
  firstName: 'Sagar',
  lastName: 'Chandani',
  email: 'asd'
}

const {a, b} = person

console.log(a, b)

const anyfunction = (a) => {
  return console.log(a.firstName)
}

anyfunction(person)

var firstname = person.firstName
console.log(firstname)
