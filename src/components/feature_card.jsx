import React, { Component } from "react";

class FeatureCard extends Component{
  render(){
      return (
        <div className="main">
          <div className="card">
            <img src={this.props.imgsrc}/>
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
          </div>
        </div>
      )
    }
}
export default FeatureCard;
