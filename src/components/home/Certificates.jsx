import React, { useState, useEffect, Profiler } from "react";
import Carousel from 'react-bootstrap/Carousel'
import goo from "../../editable-stuff/goo.jpg"
import Googledigitalmarketing from "../../editable-stuff/Googledigitalmarketing.jpg"
import Internship from "../../editable-stuff/Internship.jpg"
import Python from "../../editable-stuff/Python.jpg"
import tcs from "../../editable-stuff/tcs.jpg"
import virtual from "../../editable-stuff/virtual.jpg"
import youtube from "../../editable-stuff/youtube.jpg"
import analytic from "../../editable-stuff/analytic.jpg"

const Certificates = () => {
    return ( 
        <div id="Certificates" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#f7f7f7'}}>
          <div className="container container-fluid">
            <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                <h1 className="display-4 mb-3 text-center">Certificates</h1>
                {/* <p className="lead text-center" style={{fontSize:'22px'}}>
                    I empower people to acheive their goals. And I absolutely love it.
                </p><br/><br/> */}
                <br/>
                <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                  <p className="lead text-left">
                  I have taken a lot of certification Courses and exams over the last 4 years. 
                  I can’t say that I am ever excited to take an exam, but I have done well on them. 
                  Over the years I have developed an approach to taking exams and have generally passed many more than I have failed.
                 </p>  
              </div>
              
                <div className="col d-lg-inline align-self-center">
                
                <Carousel>
                    <Carousel.Item>
                {/* <div className="col d-none d-lg-inline align-self-center"> */}
                  <img
                    className="rounded"
                    src={Googledigitalmarketing}
                    alt="Googledigitalmarketing"
                    width="615"
                    height="450"
                  /> 
                  {/* <Carousel.Caption>
                    <h2>Student Engineering Council Vice President</h2>
                    <h5>Cultivated an organizational Googledigitalmarketing of inclusivity, collaboration, and ambition.</h5>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                {/* </div>
                </div>
                <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={goo}
                    alt="goo"
                    width="615"
                    height="450"
                  /> 
                  {/* <Carousel.Caption>
                <h2>Student Engineering Council goo Director</h2>
                <h5>Promoted student involvement in the community through volunteering and philanthropy.</h5>
                </Carousel.Caption> */}
                  </Carousel.Item>
                {/* </div>
                </div> */}
                {/* <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                {/* <Carousel.Item>
                  <img
                    className="rounded"
                    src={Code}
                    alt="codeorange"
                    width="300"
                    height="475"
                  /> 
                  </Carousel.Item> */}
                {/* </div>
                </div> */}
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={youtube}
                    alt="youtube"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={tcs}
                    alt="tcs"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={analytic}
                    alt="custodialappreciation"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Internship}
                    alt="Internship"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Python}
                    alt="volunteer"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={virtual}
                    alt="family"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                </Carousel>
              </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      );
    };

export default Certificates;