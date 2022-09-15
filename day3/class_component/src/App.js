import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "Bhaskar";
  render() {
    return (
      <div>
        Hello world <br/>
        My Name is {this.c}
      </div>
    )
  }
}
/*
In Class based component we create render function then return
state,props etc. are little bit different as compared functional component

*/ 
