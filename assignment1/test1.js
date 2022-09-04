// Call back function practice
// JSON return from web server
let students = [
    {"number":1,"name":"Shivam Mahor","subject":"CySec"},
    {"number":2,"name":"Ashutosh Goyal","subject":"Javascript"},
    {"number":3,"name":"Rohit Shakya","subject":"Nodejs"},
]
// this function will hold callback utill it perform a particular task.
function enrollStudents(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("students has been enrolled successfully.");
        callback();
    },3000)
}
// this function is a call back function 
function getStudents(){
    setTimeout(function(){
        let str = '';
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`;
        })
        document.getElementById("students").innerHTML = str;
        console.log("Studnet has been fetched");
    },8000);
}

let newStudent = {"number":4,"name":"Sunny Singh","subject":"Pharmacy"};
// we are passing a callback function in enrollstudents functions.
enrollStudents(newStudent,getStudents);