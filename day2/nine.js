/*
9.	Write and explain the output
function merge(a, b) {
    return {
        ...a,
        ...b
    }
}
Console.log(merge({name: 'bob'}, {name: 'alice'}))
*/ 
function merge(a, b) {
    return {
        ...a,
        ...b
    }
}
console.log(merge({name: 'bob',age:10}, {name: 'alice'}))