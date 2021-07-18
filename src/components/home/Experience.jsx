import React, { useState, useEffect, Profiler } from "react";
import Boeing from "../../editable-stuff/boeing.jpg";
import upwork from "../../editable-stuff/upwork.jpg";
import suven from "../../editable-stuff/suven.jpg";
import stock from "../../editable-stuff/stock.jpg";
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={suven}
                        alt="dell technologies logo"
                        width="420"
                        height="70"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Java Coding Internship:<br/>
                        Successfully completed 4 weeks Java Coding Internship.<br/>
                        1) Consumer Loan Assistant Project <br/>
                        2) Home Inventory Manager Project
           
                        <br/>
                        June - July 2021
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={upwork}
                        alt="dell technologies logo"
                        width="420"
                        height="70"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                       I Worked as a Freelancer at upwork:<br/>
                       First I started with Data Entry, Transcription, <br/>
                       Image Editing<br/>
                       Now I iam doing Web Devolopment and Graphics Designing <br/>
                       <a href="https://www.upwork.com/freelancers/~01445ee98652754a58">Upwork Profile Link</a>
                        <br/>
                        2019-2021
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Boeing}
                        alt="boeing logo"
                        width="300"
                        height="80"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Virtual Experience Program:<br/>
                        Get to know Microsoft’s values
                       Respect, Integrity and Accountability.<br/>
                       Realize the impact of a positive first impression. <br/>
                        May - August 2020
                    </p>
                    {/* <h3>Boeing</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={stock}
                        alt="boeing logo"
                        width="300"
                        height="80"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Two years of Experience in Stock market.<br/>
                        In NSE and BSE Trades are taken using technical analysis and price action.I Made Consistant Profits over the past 2 years and build a Suscessfull Portofolio.<br/>
                        2019-2021
                    </p>
                    {/* <h3>Boeing</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;