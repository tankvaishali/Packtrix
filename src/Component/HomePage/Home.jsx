import React from 'react';
import HomeAbout from './HomeAbout';
import Sustainability from './Sustainability';
import "../../assets/css/Home.css"
import VideoEnergy from './VideoEnergy';
import IndustrySec from './IndustrySec';
import HOC from '../../HOC';

function Home() {
  return (
    <div>
      <HomeAbout />
      <Sustainability />
      <VideoEnergy />
      <IndustrySec />
      <div className='container p-0'>
        <img src={require("../../assets/images/sustainable and recyclable  box.jpeg")} alt="" className='img-fuild w-100' height={"auto"} />
      </div>
    </div>
  );
}

export default HOC(Home)