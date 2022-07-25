import React from 'react'
import Award from '../../img/award.jpg'
import Me from '../../img/me2.png'
import './about.css'

export const About = () => {
  return (
<div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a React Js developer and a front developer.
        </p>
        <p className="a-desc">
         I design many different websites for customers according to their demand and choice.
         I start my career as a web developer but after seeing my interest i parsue my carrer as a React Developer
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Lahore College Web developer Award 2018</h4>
            <p className="a-award-desc">
              In Lahore college Web developer compitition I create best website by my team and get first position 
              in this compitition.
            </p>
          </div>
        </div>
        </div>
      </div>
  )
}
