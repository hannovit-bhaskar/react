import React from 'react'
import "./day6.css"
function Rendertask3(props) {
  if(props.task3.is_task3){
      return (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 mt-4 justify-content-center">
            <div className="col">
            <div className="card text-dark text-center">
                <div className="card-header text-center bg-warning">Weather App</div>
                <div className="card-body">
                <form onSubmit={props.getWeather}>
                  <div className="mb-3">
                    <input type="text" name='location' className="form-control rounded-pill" placeholder='Enter City' />
                  </div>
                </form>
                <div className="card-text">
                  {/* MAPPING WEATHER INFORMATION */}
                {props.task3.weatherAPI?props.task3.weatherAPI.map((item)=>(
                  <div className='fst-italic' key={item.name} >
                  <img src={`http://openweathermap.org/img/w/${item.weather[0]["icon"]}.png`} alt="img" />
                  <sub>
                  <span className='fst-italic fw-bold'>
                    {item.weather[0]["main"]}
                  </span>
                  </sub> 
                  <div className="h2">
                    {item.main["temp"]}
                  </div>  
                  <div>
                    <span className="fw-bold">Description : </span>{item.weather[0]["description"]}
                  </div>
                  <div>
                    <span className="fw-bold">Location : </span>{item.name}
                  </div>
                  </div>
                  )):""}
                  {/* MAPPING WEATHER INFORMATION END */}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }else{
    return(
        <></>
    )
  }
}

export default Rendertask3