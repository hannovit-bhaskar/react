/*
for api https://api.github.com/users
post api 
*/

let btn = document.getElementById("sec_btn");
let content = document.getElementById("my-content");

// GET REQUEST USING FETCH API.
function get_data(){
    console.log("starting get data");
    // fetch is asynchronous which is running in background & takes two parameters
    // url = "https://api.github.com/users";
    url = "https://swapi.dev/api/people/";
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.json();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}
// POST using FETCH API.
function post_data(){
    url = "url's_api";
    data = {"name":"rajesh singh 2389","salary":2500,"age":23};
    parameters = 
    {
        method:'POST',
        header:{
            'Contenet-Type':'application/json',
        },
        body:JSON.stringify(data)  // if data is object then use stringify or if data is already in string then there is no need.
    }
    // fetch(url,parameters).then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //     console.log(data);
    // });
    fetch(url,parameters).then(response=>response.json()).then(data => console.log(data)); //also can be written as
}
console.log("before get data");
get_data();
console.log("after running get data");
// post_data();

