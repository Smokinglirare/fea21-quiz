const person = {
  firstName: "Oscar",
  lastName: "Nilsson",
  age: 30,
};

function printName(first, last) {
  return `${first} ${last}`;
}

const fullName = printName(person.firstName, person.lastName);
console.log(fullName); // "Oscar Nilsson"

module.exports = printName;