/*
Question 4:	Write a function that will async function that will fetch 10 peoples from star wars api 
and print the total height of first 10 people. 

API URL: https://swapi.dev/documentation#start
*/ 

async function get_people(){
    let url = 'https://swapi.dev/api/people/';
    let response = await fetch(url);
    let people = await response.json();
    total_height = 0;
    for(let i=0;i<people.results.length;i++){
        total_height+=parseInt(people.results[i].height)
    }
    return total_height;
}
get_people().then(data=>console.log("total height >> ",data)).catch(error=>console.log("error happened",error));