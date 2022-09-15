/*
1.	Write and explain the output
function test(a, ...b) {
    console.log(b)
}
test(1, 2, 3, 4)
*/ 
function test(a, ...b) {
    console.log(b)
}
test(1, 2, 3, 4)
/*
in test function first parameter is "a" so it consider 1 & after that we see the spread operator which means
rest of the parameters are being stored in b
*/