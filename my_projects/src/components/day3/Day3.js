import React, { Component } from 'react'
import "../../App.css"
import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'

export default class Day3 extends Component {
  render() {
    return (
    <div className='container mt-5'>
            <div className="row">
        <div className="col-sm-6">
        <div className="card">
            <div className="card-body bg-dark">
                <FunctionalComponent/>
            </div>
        </div>
        </div>
        <div className="col-sm-6">
        <div className="card">
            <div className="card-body bg-dark">
                <ClassComponent/>
            </div>
        </div>
        </div>
        </div>
        
    </div>
    )
  }
}
