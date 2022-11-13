// If everytime we call it and give it the same arguments, it always returns the same result

// In pure functions, we can't use - random values, current date/time, global state(DOM, files, db, etc), no mutation of parameters

//
//

function myFunction(number) {
  return number * Math.random();
}
// It's not a pure function, as everytime we call this function the Math.random() method generates a new value

//
//

function myFunction(number) {
  return number * 2;
}
// This is pure function

//
//

function isEligible(age) {
  return age > minAge;
}
// This is not a pure function, as we are depending on the global parameter (for this case : minAge). To make this function pure, we have to pass the minAge as a parameter.

function isEligible(age, minAge) {
  return age > minAge;
}
// Now this is pure function

//
//
//
//

// Benefits of pure functions:

// 1. Self documenting, everything the function needs is clearly specified in the function declaration/expression
// 2. Easier to test, as we don't have to set any global state for this function
// 3. Concurrency, as we don't use global state or change it, we can run this functions in parallel
// 4. Cacheable, we can store the result, suppose for add(1,2) = 3, in cache and use in the future to optimize the computing power