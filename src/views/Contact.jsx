import React, { Component } from "react";
import Navbar from '../components/navbar';
import Fotterfamo from '../components/footer';
import '../styles/footer.css';
import '../styles/proton.css';
import '../styles/contact.css';

class Contact extends Component{
  render(){
      return (
        <div className="main">
          <Navbar/>
          <div className="contact_header">
            <div class="row">
            <div className="col-12 col-md-5 wid80">
              <h1>Direct Contacts</h1>
              <p style={{ margin:'0px' }}>Email:</p>
              <span style={{ margin:'0px' }}>enquiry@famo4india.com</span>

                <p style={{ marginBottom:'0px' }}>Office:</p>
                <span style={{ margin:'0px' }}>
                  F-31, 3rd floor, Lajpat Nagar-1,
                  New Delhi - 110024
                </span>
            </div>
            <div className="col-12 col-md-7 center-items">
              <div class="mapouter"><div class="gmap_canvas">
                <iframe width="600" height="315" id="gmap_canvas" src="https://maps.google.com/maps?q=28.5710569%2C77.2320955&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div></div>
            </div>
          </div>
          </div>

          <div className="conatact_form mt-4 col-12 wid80 centre-items">
            <div className="col-12 col-md-45 mb-3"><h1>Drop us a line</h1></div>
                <div className="row">
                  <div className="col-12 col-md-45">
                    <div className="material-textfield">
                        <input placeholder="" type="text"/>
                        <label>Full Name</label>
                      </div>
                  </div>
                  <div className="col-12 col-md-45">
                    <div className="material-textfield">
                        <input placeholder="" type="text"/>
                        <label>Email address</label>
                    </div>
                  </div>
                </div>
              <div className="row">
                <div className="col-12 col-md-45">
                  <div className="material-textfield">
                      <input placeholder="" type="text"/>
                      <label>Mobile Number</label>
                    </div>
                </div>
                <div className="col-12 col-md-45">
                  <div className="material-textfield">
                      <input placeholder="" type="text"/>
                      <label>Subject</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <div className="material-textfield">
                  <textarea required placeholder=""></textarea>
                  <label>Your message/feedback</label>
                </div>
              </div>
              </div>
              <button className="main-btn wid50 mb-4 centre">CONTACT US</button>
          </div>
        <Fotterfamo/>
        </div>
      )
    }
}
export default Contact;
