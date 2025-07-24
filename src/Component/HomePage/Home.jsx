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
      <div className='overflow-hidden'>
        <div className='container p-0' data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-once="true">
          <img src={require("../../assets/images/sustainable and recyclable  box.jpeg")} alt="" className='img-fuild w-100' height={"auto"} />
        </div>
      </div>
    </div>
  );
}

export default HOC(Home)