import React, { Component } from "react";
import '../styles/footer.css';
import '../styles/proton.css';
import '../styles/typography.css';

class Fotterfamo extends Component {
    render(){
        return (
            <div className="footer pt-4">
              <div className="row centre">
                  <div className="col-12 col-md-4 align-top">
                    <div className="famo_logo">Cultivo</div>
                    <div className="famo_desc wid80">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. anim id est laborum.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 centre align-top">
                    <h3>CONTACT US</h3>
                    <ul className="contact_details wid80">
                      <li>info@papachristou.org</li>
                      <li>+91-822 875-0996</li>
                      <li>3 Dasoupoleos Str. 2nd floor – Nicosia 2015, 201 office</li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-4 align-top">
                    <h3>STAY UPDATED</h3>
                    <div className="inline wid50">
                      <i className="fab fa-instagram"></i>
                      <i className="fab fa-facebook"></i>
                      <i className="fab fa-linkedin"></i>
                    </div>
                  </div>
              </div>
              <div className="copyright_credits wid100 mt-3">
                <div className="row">
                    <div className="col-10 col-md-5">
                    <p>All Rights Reserved 2020.</p>
                    </div>
                    <div className="col-10 col-md-5 right">
                      <p>Developed by Harsh Vardhan</p>
                    </div>
                </div>
              </div>
            </div>
          )
      }
  };

  export default Fotterfamo;
