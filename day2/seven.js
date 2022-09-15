/*
7.	Write for..in loop to print an value of all properties in an object
*/ 
const object = { "shivam": 28, "harsh": 32, "anshu": 23 };
for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}