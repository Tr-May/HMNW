const person = {
  firstName: "John",
  lastName: "Doe",
  age: 45,
  greet: function () {
    return `Welcome ${this.firstName} ${this.lastName}`;
  },
};
// name = "his name is "+person.firstName + " " + person.lastName;
// console.log(`his name is ${person.firstName} ${person.lastName}`);
console.log(person.greet());
