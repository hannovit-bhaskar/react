import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import logo from "../logo.svg"
import "../App.css"

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
            <img className='navbar-brand App-logo' src={logo} alt="" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" role="button" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" role="button" aria-current="page" href={() => false}>Practices</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href={() => false} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Task
            </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/day3" role="button">Day3</a></li>
                <li><a className="dropdown-item" href="/day4" role="button">Day4</a></li>
                <li><a className="dropdown-item" href="/day5" role="button">Day5</a></li>
                <li><a className="dropdown-item" href="/day6" role="button">Day6</a></li>
                </ul>
            </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
        </div>
        </nav>
        <Outlet />
      </>
    )
  }
}
