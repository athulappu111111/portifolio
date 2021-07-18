import React, { useState, useEffect, Profiler } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import {
    aboutHeading,
    aboutDescription,
    showInstaProfilePic,
    instaLink,
    instaUsername,
    instaQuerry,
  } from "../../editable-stuff/configurations.json";
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#f7f7f7'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {/* <p className="lead text-center">
              Outside of software engineering, I love to meditate, read, and play soccer!
            </p><br/> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                <p className="lead text-center" style={{fontSize:'28px'}}>Morning routine</p>
                <img src="https://img.icons8.com/nolan/128/light.png"/>
                <p className="lead text-center">
                  Every morning, I begin my day with money control articles.
                  Read the latest business, financial news on Moneycontrol and read articles related to Technology I always try to keep updated with latest Technology.
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Stock Market</p>
                <img src="https://img.icons8.com/nolan/64/stock-share.png"/>
                <p className="lead text-center">
                There is an old expression in business that, if you fail to plan, you plan to fail. It may sound glib, but people that are serious about being successful, including traders. I Trade on differnt instruments listed in Indian market and make profits Safer and consistantly.
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Soccer</p>
                <img src="https://img.icons8.com/nolan/64/football2.png"/>
                <p className="lead text-center">
                  I first picked up a soccer ball when I was 4 years old and have played the beautiful game. 
                  I played competitively for Lucky star club, while also playing for my high school soccer team. In college
                  and frequently look for pick-up games to play!
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Food</p>
                <img src="https://img.icons8.com/nolan/128/meal.png"/>
                <p className="lead text-center">
                  I am a big foodie! Growing up with a mom who cooks the best food, I fell in love with food at an early age.
                  original recipes and am learning more about cooking too. I love trying new restaurants and recipes!
                  I try spicy recipies more.
                </p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
