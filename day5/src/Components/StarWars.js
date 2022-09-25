import React,{useState,useEffect} from "react";


const StarWars = ()=> {
  const [people,setPeople] = useState(0);
    useEffect(()=>{
      if (people!==0){
        console.log(people)
      }
    })
    const getPeople=()=>{
      let url = "https://swapi.dev/api/people/";
      fetch(url).then((response) => {
          return response.json();
        }).then((data) => {
          if (data.results){
            // people = data.results
            setPeople(data.results);
          }
        });
    };
  return (
    <>
      <div className="text-center mt-5">
        <p className="h5">Star Wars API</p>
        <button className="btn btn-primary" onClick={getPeople}>
          Cick to Get People List
        </button>
        <div className="people">
          {people===0?'':
          people.map((people)=>{
           return(
            <div>
              Name: {people.name}
            </div> 
           )
          })
          }
        </div>
      </div>
    </>
  );
}

export default StarWars
