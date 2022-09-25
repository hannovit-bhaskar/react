import React, { Component } from 'react'
import "../../App.css"
import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'

export default class Day3 extends Component {
  render() {
    return (
    <div className='container mt-5'>
            <div class="row">
        <div class="col-sm-6">
        <div class="card">
            <div class="card-body bg-dark">
                <FunctionalComponent/>
            </div>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="card">
            <div class="card-body bg-dark">
                <ClassComponent/>
            </div>
        </div>
        </div>
        </div>
        
    </div>
    )
  }
}
