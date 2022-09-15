/*
3.	Demonstrate the difference between Map and plain objects in Javascript
*/
// plain object can initialized using literals whereas map requires Map() Constructor.
const obj = {
  name: 1,
  age: 2,
};
const map = new Map([
  ["name", 1],
  ["age", 2],
]);
console.log(map, obj);
console.log("/********************************************************/")
// Plain objects only accepts strings and symbols as keys
// Map can accept keys of any type(including functions,objects or any primitive)
const obj1 = {};
const key = function (){};

obj1[key] = 1;
console.log("obj: ", obj1);

const map1 = new Map();

map1.set(key, 1);
console.log("map: ", map1);

console.log("/********************************************************/")
/*  We can use the for...of statement or Map.prototype.forEach 
 to iterate directly over the properties of a Map, while plain objects cannot be iterated directly.
 */
const obj3 = {
  name: 1,
  age: 2,
};
const map3 = new Map([
  ["name", 1],
  ["age", 2],
]);
for (const [key, value] of map3) {
  console.log(`${key}: `, value); // name: 1, age: 2
}
map3.forEach((value, key) => {
  console.log(`${key}: `, value); // name: 1, age: 2
});
// Plain objects are not iterable directly.
// But we can use functions like `Object.keys` to help us.
Object.keys(obj3).forEach((key) => {
  console.log(`${key}: `, obj3[key]); // name: 1, age: 2
})