import React, { Component } from "react";
import '../styles/proton.css';
import '../styles/typography.css';

class HeroSection extends Component{
  render(){
      return (
        <div className="main">
          <div className="hero row wid80">
            <div className="col-10 col-md-5">
              <img src={this.props.imgsrc}/>
            </div>
            <div className="col-10 col-md-5">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
          </div>
        </div>
        </div>
      )
    }
}
export default HeroSection;
