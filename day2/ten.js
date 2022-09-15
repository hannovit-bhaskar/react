/*
10.	Write and explain the output
const getValue  = (array) => {
	const [b, …m] = array;
	return b;
}
Console.log(getValue([1, 2, 3, 4])
*/ 
const getValue  = (array) => {
	const [b, ...m] = array;
	return b;
}
console.log(getValue([1, 2, 3, 4]));
/* on line number 10 the first value store to b after that because of spread operator the rest
	values are being stored in m
*/