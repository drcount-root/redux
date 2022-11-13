const person = { name: "John" };
const updated = Object.assign({}, person, { name: "Bob" });
// Object.assign() takes 3 arguments - 1. empty obj, 2. the obj to copy, 3. updated properties

console.log(updated);

// Same thing with spread operator
const person1 = { name: "John" };
const updated1 = { ...person1, name: "Bob" };
console.log(updated1);

// Both Object.assign() & Spread operator do a 'shallow-copy' of the object

//
//
//
//

// Deep-Copy

const a = {
  foods: {
    dinner: "Pasta",
  },
};
let b = JSON.parse(JSON.stringify(a));
b.foods.dinner = "Soup";
console.log(b.foods.dinner); // Soup
console.log(a.foods.dinner); // Pasta
