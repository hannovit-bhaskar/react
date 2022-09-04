// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             const error = true;
//             if (!error){
//                 console.log("Your promise has been resolved");
//                 resolve();
//             }else{
//                 console.log("Your promise has been rejected");
//                 reject("Sorry not fulfilled");
//             }
//         },2000)
//     });
// }
// func1().then(function(){
//     console.log("shivam : Thanks for resolving");
// }).catch(function(error){
//     console.log("shivam: very bad bro ! Reason : "+error);
// });

// A JSON return from web server
let students = [
    {"number":1,"name":"Shivam Mahor","subject":"CySec"},
    {"number":2,"name":"Ashutosh Goyal","subject":"Javascript"},
    {"number":3,"name":"Rohit Shakya","subject":"Nodejs"},
]

function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            try{
                students.push(studen);
                console.log("students has been enrolled");
                resolve();
            }catch{
                error = false;
                reject();
            }
        },3000);
        
    });
}

function getStudents(){
    setTimeout(function(){
        let str = '';
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`;
        })
        document.getElementById("students").innerHTML = str;
        console.log("Studnet has been fetched successfully.");
    },6000);
}

let newStudent = {"number":4,"name":"Sunny Singh","subject":"Pharmacy"};
// the function inside then method is a resolved function.
// the function inside a catch method is a reject function.
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("The error occured.")
})