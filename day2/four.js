/*
4.	Create an arrow function that accepts an array and returns the unique elements in the array.
*/ 
let arr = [1,1,1,5,99,76,33,33,56,56,39,89]
let arrowFunction = (arr)=>{
    return arr.filter((item,index,array)=>array.indexOf(item)==index)
}
console.log(arrowFunction(arr));
