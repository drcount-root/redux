// Currying is a technique that allows us to take a function that has N arguments and convert to a function that have 1 argument

const addN = (a, b) => {
  return a + b;
};

console.log(addN(1, 5));

// Using func currying technique
const add = (a) => (b) => a + b;

console.log(add(1)(5));
