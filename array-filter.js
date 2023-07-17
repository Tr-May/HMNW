

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let oddNumbers = numbers.filter( n=>{
    if (n % 2 != 0) return true;
    return false;
});
console.log(oddNumbers);
