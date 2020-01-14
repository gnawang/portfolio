import React, { Component } from 'react';
import TEXT from '../../const/text';
import Banner from '../modules/Banner';
import BusinessCard from '../modules/BusinessCard';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Banner text={TEXT.GREETING}/>
        <BusinessCard/>
      </div>
    )
  }
}

export default Home;