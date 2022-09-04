//Question : Promisify the setTimeout function.

let students = [
    {"number":1,"name":"Shivam Mahor","subject":"CySec"},
    {"number":2,"name":"Ashutosh Goyal","subject":"Javascript"},
    {"number":3,"name":"Rohit Shakya","subject":"Nodejs"},
]

function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            try{
                students.push(student);
                console.log("students has been enrolled after 3 seconds.");
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
        console.log("Studnet has been fetched successfully after 6 seconds.");
    },6000);
}

let newStudent = {"number":4,"name":"Sunny Singh","subject":"Pharmacy"};
// the function inside then method is a resolved function.
// the function inside a catch method is a reject function.
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("The error occured.")
})
