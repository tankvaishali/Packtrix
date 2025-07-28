import React from 'react';
import HomeAbout from './HomeAbout';
import Sustainability from './Sustainability';
import "../../assets/css/Home.css"
import VideoEnergy from './VideoEnergy';
import IndustrySec from './IndustrySec';
import HOC from '../../HOC';
import HomeCarousel from './HomeCarousel';
import HomeSlider from './HomeSlider';

function Home() {
  return (
    <div>
      {/* <HomeCarousel /> */}
      <HomeSlider />
      <HomeAbout />
      <Sustainability />
      <VideoEnergy />
      <div className='overflow-hidden'>
        <div className='container p-0' data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-once="true">
          <img src={require("../../assets/images/sustainable and recyclable  box.jpeg")} alt="" className='img-fuild w-100' height={"auto"} />
        </div>
      </div>
      <IndustrySec />
    </div>
  );
}

export default HOC(Home)