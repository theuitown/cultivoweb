import React, { Component } from "react";

class MemberCard extends Component{
  render(){
      return (
        <div className="main">
          <a href={this.props.url}>
          <div className="card">
            <img src={this.props.imgsrc}/>
            <h3>{this.props.name}</h3>
            <p>{this.props.bio}</p>
          </div>
          </a>
        </div>
      )
    }
}
export default MemberCard;
