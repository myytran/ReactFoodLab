import React, { Component } from 'react';
import logo from '../images/FoodBanner.png';
import CssModules from 'react-css-modules';
import styles from './about.css';

class About extends Component {
 render() {
   return (
     <div stylename="wrapper">
      <div stylename="about-flex-container">
         <img src= {logo} width="1000" height="500" alt="foodlabpic" />

          <div stylename="intro"><p>This app will make it easy for you to recreate that favorite recipes in the kitchen and keep track of your ingredients. It allows everyone to make an account and add recipes that they made along with uploading pictures of their greatest creation! Never forget that one key ingredient again while cooking because The Food Lab makes it easy to record and edit ingredients and recipes. </p>
          </div>
            <div stylename="guide">
          <p>howto1</p>
          <p>howto2</p>
          <p>howto3</p>
        </div>
      </div>
</div>



   );
 }
}

export default CssModules(About, styles);