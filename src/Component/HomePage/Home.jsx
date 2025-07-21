import React from 'react';
import HomeAbout from './HomeAbout';
import Sustainability from './Sustainability';
import "../../assets/css/Home.css"
import VideoEnergy from './VideoEnergy';
import IndustrySection from './IndustrySection';

function Home() {
  return (
    <div>
<HomeAbout/>
<Sustainability/>
    <VideoEnergy/>
    <IndustrySection/>
<div className='container p-0 '>
    <img src={require("../../assets/images/sustainable and recyclable  box.jpeg")} alt="" className='img-fuild w-100' height={500} />
</div>
    </div>
    
  );
}

export default Home;
