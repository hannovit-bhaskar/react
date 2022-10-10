import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'
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
            <Link className="nav-link active" role="button" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" role="button" aria-current="page" to={null} >Practices</Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle active" to={null} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Task
            </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/day3" role="button">Day3</Link></li>
                <li><Link className="dropdown-item" to="/day4" role="button">Day4</Link></li>
                <li><Link className="dropdown-item" to="/day5" role="button">Day5</Link></li>
                <li><Link className="dropdown-item" to="/day6" role="button">Day6</Link></li>
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
