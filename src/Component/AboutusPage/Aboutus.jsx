import React from 'react';
import HOC from '../../HOC';
import "../../assets/css/About.css";

function Aboutus() {
  return (
    <>
      <div className='aboutus_bg'>
        <div className="container text-center pt-5">
          <div className="abou_image text-center" data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true">
            <img
              src="https://static.wixstatic.com/media/df52bc_35532c34ac314815a6ae769a3f37d4e1~mv2.jpg/v1/fill/w_720,h_337,al_c,lg_1,q_80,enc_avif,quality_auto/Gallery%20600X308_2.jpg"
              alt=""
              className="img-fluid aboutus_content"
            />
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-4 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">About Us</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.
            </p>
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-2 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Our Mission</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores.
            </p>
            <p className="pera aboutus_content mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores.
            </p>
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-2 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Dreamers. Innovators. Creators.</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores.
            </p>
            <p className="pera aboutus_content mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores.
            </p>
          </div>

          <div className="text-center mt-4 aboutus_content mx-auto" data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true">
            <img
              src="https://www.shutterstock.com/image-photo/small-trees-green-leaves-grow-600nw-1722922765.jpg"
              alt=""
              className="img-fluid w-100 object-fit-cover"
              style={{ objectPosition: 'bottom center' }}
            />
          </div>

          <div className="aboutus_content mx-auto text-center pb-4">
            <h2 className="mt-4 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Why does it matter?</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              Our manufacturing facilities are powered by renewable energy sources, and we have implemented several energy-efficient practices to reduce carbon emissions for us and our esteemed customers. We currently save more than 1 million trees to cut, more than 20,000 tons of single-use plastic, 25,000 tons of CO2, 4.3 Million kWh of electricity, and 250,000 barrels of oil.
            </p>
            <p className="pera aboutus_content mx-auto">
              At our company, we believe in transparency and open communication with our customers. We are committed to providing the highest level of customer service and support, and we are always willing to work with our customers to find the best sustainable packaging solutions for their needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(Aboutus)