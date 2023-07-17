// function declaration

function double(n) {
  return n * 2;
}

// function expression
// let x = 3;
let double = function (n) {
  return n * 2;
};

// arrow function
let double = (n) => n * 2;
console.log(double(3));
