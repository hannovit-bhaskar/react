/*
5.	Explain the output of the following code:
var person = {
	name: 'bob',
	age: 10,
	getName() {
		return this.name;
	},
	getAge: () => {
		return this.age
	}
}

Console.log(person.getName());
Console.log(person.getAge());

*/ 
var person = {
	name: 'bob',
	age: 10,
	getName() {
		return this.name;
	},
	
	getAge: () => {
		return this.age
	}
}

console.log(person.getName());
// Explain getName ==> we can use "this" in a regular function because it represent the object
console.log(person.getAge());
/*
Explain getAge:
An arrow function preserves the lexical scope in which it was defined
*/