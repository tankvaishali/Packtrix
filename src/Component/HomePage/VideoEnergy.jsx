import React from 'react';
import videoSourceMP4 from '../../assets/images/videoenergy.mov';

function VideoEnergy() {
  return (
    <>
      {/* <div className="container overflow-hidden p-0">
        <div className="mainvideo  position-relative overflow-hidden ">
          <div className="video-background">
            <video autoPlay loop muted playsInline>
              <source src={videoSourceMP4} type="video/mp4" />
            </video>
          </div>
          <div className="video-overlay-content-wrapper d-flex align-items-center justify-content-center w-100 h-100 text-white text-center p-4 p-md-5">
            <div className="video-overlay-content">
              <h1 className='text_video text-capitalize' data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-once="true">Empowering <span className='text-info'>Sustainability</span></h1>

            </div>
          </div>
        </div>
      </div> */}

      <div className="container overflow-hidden p-0">
        <div className="mainvideo position-relative overflow-hidden text-white text-center d-flex align-items-center justify-content-center">
          <div className="video-overlay-content-wrapper d-flex align-items-center justify-content-center w-100 h-100 text-white text-center w-100 h-100 p-4 p-md-5">
            <div className="video-overlay-content">
              <h1
                className='text_video text-capitalize'
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Empowering <span className='text-info'>Sustainability</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoEnergy;
