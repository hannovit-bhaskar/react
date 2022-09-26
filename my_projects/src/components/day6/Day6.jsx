import React, { Component } from 'react';
import {data} from "./data.jsx";
import Rendertask1 from "./Rendertask1";
import Rendertask2 from './Rendertask2';
import Rendertask3 from './Rendertask3.jsx';

class Day6 extends Component {
    constructor(props){
        super(props);
        this.state={
            is_task1:false, is_task2:false, is_task3:false,
            search:'', email:"", password:"", checkbox:false,
            email_error:"", password_error:"", checkbox_error:"",
            form_data:"",weatherAPI:"",
        }
    }
    getSearch=(event)=>{
        let value = event.target.value;
        this.setState(()=>{
            return {search:value}
        });
    }
    getTask1 = (event)=>{
        this.setState({is_task1:true,is_task2:false,is_task3:false});
    }
    getTask2 = (event)=>{
        this.setState({is_task2:true,is_task1:false,is_task3:false});
    }
    getTask3 = (event) =>{
        this.setState({is_task3:true,is_task1:false,is_task2:false})
    }
    handleChange = (event) => {
        if(event.target.name === "email"){
            this.setState({email:event.target.value.trim()});
            this.setState({email_error:""});
        }
        if(event.target.name === "password"){
            this.setState({password:event.target.value});
            this.setState({password_error:""});
        }
        if(event.target.name === "checkbox"){
            this.setState({checkbox:event.target.checked});
            this.setState({checkbox_error:""});
        }
    }
    formSubmit = (event) =>{
        event.preventDefault();
        if(!this.state.email){
            this.setState({email_error:"Please enter your email"});
        }if(!this.state.password){
            this.setState({password_error:"Please enter your password"});
        }if(!this.state.checkbox){
            this.setState({checkbox_error:"Please select checkbox"});
        }
        if(this.state.email && this.state.password && this.state.checkbox){
            this.setState({email_error:""});
            this.setState({password_error:""});
            this.setState({checkbox_error:""});
            this.setState(()=>{
                return{
                    email:"",
                    password:"",
                }
            })
            this.setState({form_data:[{"key":1,"email":this.state.email,"password":this.state.password}]})
        }
    }
    getWeather = (event) => {
        event.preventDefault();
        let location = event.target.location.value.trim();
        if (location){
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=40d038ea42c445736d9534b518ecd1c2`;
            fetch(url).then(response=>response.json()).then((apiData)=>{
                this.setState({weatherAPI:[apiData]});
            });
        }

    }
    render() {
    return (
    <div className='container'>
        <p className='d-flex fst-italic mt-3 fs-5 justify-content-center' >Click here to display tasks.</p>
        <div className="d-flex mt-3 justify-content-center">
        <button className={this.state.is_task1 ? 'btn mx-3 btn-success rounded-pill':'btn mx-3 btn-light rounded-pill'} onClick={this.getTask1} >Show Task 1</button>
        <button className={this.state.is_task2 ? 'btn mx-3 btn-success rounded-pill':'btn mx-3 btn-light rounded-pill'} onClick={this.getTask2} >Show Task 2</button>
        <button className={this.state.is_task3 ? 'btn mx-3 btn-success rounded-pill':'btn mx-3 btn-light rounded-pill'} onClick={this.getTask3} >Show Task 3</button>
        </div>
        <Rendertask1 task1={this.state} getSearch={this.getSearch} search={this.state.search} data={data}/>
        <Rendertask2 task2 = {this.state} formSubmit={this.formSubmit} handleChange={this.handleChange} />
        <Rendertask3 task3 = {this.state} getWeather={this.getWeather} />
    </div>
    )
  }  
}
export default Day6;
