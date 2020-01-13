import React, { Component } from 'react';
import Banner from '../modules/Banner';
import BusinessCard from '../modules/BusinessCard';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Banner/>
        <BusinessCard/>
      </div>
    )
  }
}

export default Home;