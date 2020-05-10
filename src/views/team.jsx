import React, { Component } from "react";
import Navbar from '../components/navbar';
import Fotterfamo from '../components/footer';
import '../styles/team.css';
import '../styles/proton.css';
import MemberCard from '../components/member_card';

class Ourteam extends Component{
  render(){
      return (
        <div className="main">
          <Navbar/>
            <h1 className="centre-items pb-2">Our Team</h1>
            <div class="row wid-80 mt-3 mb-3 centre-items">
              <div class="col-12 col-md-3">
                <MemberCard
                  name="Manish"
                  bio="CEO & Founder"/>
              </div>
              <div class="col-12 col-md-3">
                <MemberCard
                  name="Manish"
                  bio="CEO & Founder"/>
              </div>
              <div class="col-12 col-md-3">
                <MemberCard
                  name="Manish"
                  bio="CEO & Founder"/>
              </div>
            </div>
            <div class="row wid-80 mt-3 mb-3 centre-items">
              <div class="col-12 col-md-3">
                <MemberCard
                  name="Manish"
                  bio="CEO & Founder"/>
              </div>
              <div class="col-12 col-md-3">
                <MemberCard
                  name="Manish"
                  bio="CEO & Founder"/>
              </div>
              <div class="col-12 col-md-3">
                <MemberCard
                  name="Manish"
                  bio="CEO & Founder"/>
              </div>
            </div>
          <Fotterfamo/>
        </div>
      )
    }
}
export default Ourteam;
