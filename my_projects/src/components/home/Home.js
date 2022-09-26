import React, { Component } from 'react'
import image from "./default.jpg"
export default class Home extends Component {
  render() {
    return (
        <>
        <div className="container mx-5 my-0">
          <div className="row row-cols-1 row-cols-md-3 g-1 my-2">

            <div className="col">
              <a href="/day3">
                <div className="card mx-1 text-dark">
                  <img src={image} className="card-img-top" alt="hii"/>
                  <div className="card-body">
                    <h5 className="card-title">Day 3</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="col">
              <a href="/day4">
                <div className="card mx-1 text-dark">
                  <img src={image} className="card-img-top" alt="hii"/>
                  <div className="card-body">
                    <h5 className="card-title">Day 4</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="col">
              <a href="/day5">
                <div className="card mx-1 text-dark">
                  <img src={image} className="card-img-top" alt="hii"/>
                  <div className="card-body">
                    <h5 className="card-title">Day 5</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="col">
              <a href="/day6">
                <div className="card mx-1 text-dark">
                  <img src={image} className="card-img-top" alt="hii"/>
                  <div className="card-body">
                    <h5 className="card-title">Day 6</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
        </>
    );
  }
}
