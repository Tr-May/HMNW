let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const checkEven = (number) => {
  if (number % 2 == 0) return true;
  return false;
};

let evenNumbers = numbers.filter(checkEven);

console.log(evenNumbers);
