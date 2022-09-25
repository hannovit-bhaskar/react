import React, { Component } from 'react'
import "./day5.css"
class Day5 extends Component {
  constructor(props,timer){
    super(props);
    this.timer = timer;
    this.state = {
      hours:0,
      minutes:0,
      seconds:0,
      milisecond:0,
      apiData:'',
      counter:0
    };
  }

  startWatch = ()=>{
    this.timer = setInterval(()=>{
      this.setState(prevState=>{
        return {
          milisecond:prevState.milisecond+1
        }
      });
      if(this.state.milisecond===100){
        this.setState(prevState=>{
          return{
            seconds:prevState.seconds+1,
            milisecond:0
          }
        })
      }
      if(this.state.seconds===60){
        this.setState(prevState=>{
          return{
            minutes:prevState.minutes+1,
            seconds:0,
          }
        })
      }
      if(this.state.minutes===60){
        this.setState(prevState=>{
          return{
            hours:prevState.hours+1,
            minutes:0
          }
        })
      }
    },10)
  }
  resetWatch = ()=>{
    clearInterval(this.timer);
    this.setState(()=>{
      return{
        hours:0,
        minutes:0,
        seconds:0,
        milisecond:0
      }
    })
  }
  stopWatch = ()=>{
    clearInterval(this.timer);
  }

  setPeople = (peopleData) => {
    console.log(peopleData)
    this.setState(()=>{
      return{
        apiData:peopleData
      }
    })
  }

  getPeople = () => {
    let url = "https://swapi.dev/api/people/";
    fetch(url).then((response) => {
          return response.json();
        }).then((people) => {
          if (people.results){
            this.setPeople(people.results)
          }
        });
  }

  increaseCounter = () => {
    this.setState(()=>{
      return{
        counter:this.state.counter<10?this.state.counter+1:this.state.counter
      }
    })
  }
  decreaseCounter = () => {
    this.setState(()=>{
      return{
        counter:this.state.counter>0?this.state.counter-1:this.state.counter
      }
    })
  }

  render() {
    return (
      <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3 bg-secondary text-center">
              <div className="card-body">
                <h5 className="card-title text-info"><Header/></h5>
                  <div className="card-text my-4">
                  <Timer time={this.state} />
                  </div>
                <Action startWatch={this.startWatch} resetWatch={this.resetWatch} stopWatch={this.stopWatch} />
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3 bg-secondary text-center">
              <div className="card-body">
                  <h5 className="card-title text-info h3">Counter Application</h5>
                  <i className="bi bi-dash-circle counter-btn mx-5" onClick={this.decreaseCounter}></i>
                    <span className='counter'>{this.state.counter}</span>
                  <i className="bi bi-plus-circle counter-btn mx-5" onClick={this.increaseCounter}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="star-wars mt-2 container text-center">
        <div className="h2">Star Wars API</div>
        <ApiAction getPeople={this.getPeople} />
        <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
           <AppendPeople people = {this.state} />
        </div>
      </div>
      <hr />
      </>
    )
  }
  // rendering method end
}
//  STOP WATCH COMPONENTS STARTS
const Header = ()=>{
  return <div className="h3">Stop Watch</div> 
}
const Timer = (props)=>{
  return (
    <>
    <div className="h4 mx-3 d-inline">
      {props.time.hours}
    </div>:
    <div className="h4 mx-3 d-inline">
      {props.time.minutes}
    </div>:
    <div className="h4 mx-3 d-inline">
      {props.time.seconds}
    </div>:
    <div className="h4 mx-3 d-inline">
      {props.time.milisecond}
    </div>
    </>
  )
}
const Action = (props)=>{
  return (
    <>
    <button className='btn btn-success rounded-pill mx-2' onClick={props.startWatch} >Start</button>
    <button className='btn btn-warning rounded-pill mx-2' onClick={props.resetWatch} >Reset</button>
    <button className='btn btn-danger rounded-pill mx-2' onClick={props.stopWatch} >Stop</button>
    </>
  )
}
// STOP WATCH COMPONENT END
const AppendPeople = (props) => {
    if(props.people.apiData){
     return( 
      props.people.apiData.map((data,i)=>{
        return(
        <div className="col text-start" key={i}>
          <div className="card mx-1 text-dark">
            <div className="card-body">
              <p className="card-text m-0"><span className="fw-bold">Name:</span> {data.name}</p>
              <p className="card-text m-0"><span className="fw-bold">Gender:</span> {data.gender}</p>
              <p className="card-text m-0"><span className="fw-bold">Height:</span> {data.height} cm.</p>
              <p className="card-text m-0"><span className="fw-bold">Eye Color:</span> {data.eye_color}</p>
              <p className="card-text"><small className="text-muted">Last updated  {data.edited}</small></p>
            </div>
          </div>
        </div>
        )
      }) 
      );
    }
    else{
      return (
        <></>
      );
    }
}

const ApiAction = (props)=>{
  return(
    <button className='btn btn-primary' onClick={props.getPeople} >Click to get data</button>
  )
}

export default Day5;