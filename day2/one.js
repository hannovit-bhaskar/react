/***
1.	Create an arrow function named “diff” that returns the array of property names that has been modified 
from the first object to the second object
    a.	diff({ name: ‘alice’}, { name: ‘bob’ }) should return -> [‘name’]
    b.	diff({name: ‘bob’}, {name: ‘bob’}) should return -> []
    c.	diff({name: ‘bob’ }, {age: 12}) should return -> []
 
***/
const diff = (obj1, obj2) => {
  if (obj1.name != obj2.name) {
    return Object.keys(obj1);
  } else {
    return [];
  }
};
let a = diff({ name: "alice" }, { name: "bob" });
console.log(a);
let b = diff({ name: "bob" }, { name: "bob" });
console.log(b);
let c = diff({ name: "bob" }, { name: "bob" });
console.log(c);
