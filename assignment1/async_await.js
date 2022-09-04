 
async function async(){
    console.log('inside async function');
    let response = await fetch("https://api.github.com/users");
    console.log("after resolve fetch api");
    let users = await response.json();
    console.log('after resolve response')
    return users;
}
console.log("before calling async")
let a = async();
console.log("after calling async")
console.log(a);
a.then(data=>console.log(data));
console.log("last line of this file ")