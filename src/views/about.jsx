import React, { Component } from "react";
import Navbar from '../components/navbar';
import Fotterfamo from '../components/footer';
import '../styles/home.css';
import '../styles/proton.css';

class About extends Component{
  render(){
      return (
        <div className="main">
          <Navbar/>
          <div className="header mb-4 mt-4 wid80 centre-items">
            <h2>
              Bringing trust and transparency to agricultural supply chains
            </h2>
            <p>
              At AgriDigital, we come to work every day because we want to solve real world problems. We are farmers, engineers, business people and agri-specialists with a passion to make digital supply chains a reality. We’re bringing a mix of technology and finance to de-risk supply chains, increase efficiency and reduce back office costs and errors. So whether you’re a farmer, trader, elevator or processor, big or small, we help you make data-driven decisions and future proof your business.
            </p>
            <img src=""/>
          </div>
          <Fotterfamo/>
        </div>
      )
    }
}
export default About;
