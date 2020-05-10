import React, { Component } from "react";
import Navbar from '../components/navbar';
import Fotterfamo from '../components/footer';
import '../styles/home.css';
import '../styles/footer.css';
import FeatureCard from '../components/feature_card';
import HeroSection from '../components/hero_section';

class Home extends Component{
  render(){
      return (
        <div className="main">
          <Navbar/>
          <div className="header mb-4 mt-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className='text-part'>
                <h1>The Next generation of Supplychain is here.  </h1>
                <p>the future is transparent</p>
                <button type='button' className='main-btn' id="btn">Book a free demo</button>
              </div>
              </div>
              <div className="col-12 col-md-6">

              </div>
            </div>
          </div>
          <div className="features mb-4">
            <h1 className="centre-items mb-3">Why Cultivo</h1>
            <div className='row wid80 center-items'>
              <div className="col-12 col-md-3">
                <FeatureCard
                  imgsrc=""
                  title="Digitise"
                  desc="Automate your operations and focus on what you do best."/>
              </div>
              <div className="col-12 col-md-3">
                <FeatureCard
                  imgsrc=""
                  title="Digitise"
                  desc="Automate your operations and focus on what you do best."/>
              </div>
              <div className="col-12 col-md-3">
                <FeatureCard
                  imgsrc=""
                  title="Digitise"
                  desc="Automate your operations and focus on what you do best."/>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="col-12">
              <HeroSection
                title="Transactions"
                className="mb-3"
                desc="Our Transaction module handles all components of commodity buying, selling and logistics. Designed to make your processes incredibly streamlined, the Transactions module connects your customers and suppliers to a single live view of contracts, deliveries, prices, orders, consignments and invoices."/>

              <HeroSection
                  title="Transactions"
                  className="mb-3"
                  desc="Our Transaction module handles all components of commodity buying, selling and logistics. Designed to make your processes incredibly streamlined, the Transactions module connects your customers and suppliers to a single live view of contracts, deliveries, prices, orders, consignments and invoices."/>

                <HeroSection
                    title="Transactions"
                    className="mb-3"
                    desc="Our Transaction module handles all components of commodity buying, selling and logistics. Designed to make your processes incredibly streamlined, the Transactions module connects your customers and suppliers to a single live view of contracts, deliveries, prices, orders, consignments and invoices."/>
              </div>
              </div>
              <Fotterfamo/>
        </div>
      )
    }
}
export default Home;
