import React from 'react';

function HomeAbout() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center mt-5">
        <div className="col-12 col-lg-7">
          <div className="h-100">
            <h1 className="titlecolor">Meet Paktrix : Lorem, ipsum dolor.</h1>
            <p className='pera pe-lg-5 pe-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae ipsam voluptates et id rerum, praesentium cumque rem illo ad atque delectus, iure libero minus necessitatibus quo beatae aspernatur explicabo blanditiis! Iusto soluta culpa ipsa nisi iste doloremque, iure amet.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae ipsam voluptates et id rerum, praesentium cumque rem illo ad atque delectus, iure libero minus necessitatibus quo beatae aspernatur explicabo blanditiis! Iusto soluta culpa ipsa nisi iste doloremque, iure amet.
            </p>

            <button class="bubbles p-1 px-4">
              <span class="text">About Us</span>
            </button>

          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="h-100">
            <div className='text-center ms-auto' >
              <img src={require("../../assets/images/earth image 2 copy.png")} alt="" className='img-fluid w-100 h-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
