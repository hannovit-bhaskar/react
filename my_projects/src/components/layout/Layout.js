import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet/>        
      </>
    )
  }
}
