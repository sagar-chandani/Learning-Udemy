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

/* Array Destructuring */
function getScores () {
  return [10, 20, 30, 40, 50]
}

let [x, y, z] = getScores()

console.log(x)
console.log(y)
