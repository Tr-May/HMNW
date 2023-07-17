console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false
console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false
console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false
console.log(Boolean(undefined));// false
