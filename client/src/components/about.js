import React, { Component } from 'react';
import logo from '../images/FLBanner.png';
import './about.css';

class About extends Component {
 render() {
   return (
     
      <div className="about-flex-container">
         <img src= {logo} width="1000" height="500" alt="foodlabpic" />

          <div className="true"><p>This app will make it easy for you to recreate that favorite recipes in the kitchen and keep track of your ingredients. It allows everyone to make an account and add recipes that they made along with uploading pictures of their greatest creation! Never forget that one key ingredient again while cooking because The Food Lab makes it easy to record and edit ingredients and recipes. </p>
          </div>
          
          <p>howto1</p>
          <p>howto2</p>
          <p>howto3</p>
        </div>
    
    
  );
 }
}

export default About;