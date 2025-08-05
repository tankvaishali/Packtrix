import React from 'react';
import HOC from '../../HOC';
import "../../assets/css/About.css";

function Aboutus() {
  return (
    <>
      <div className='aboutus_bg'>
        <div className="container text-center pt-4 pt-lg-5">
          <div className="abou_image text-center" data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true">
            <img
              src={require('../../assets/images/Packtrix box packing factory image.png')}
              alt=""
              className="img-fluid aboutus_content about_image"
            />
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-4 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">About Us</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              With over 15 years of experience in the packaging industry, we at PAKTRIX have built a
              trusted reputation as both manufacturers and traders of high-quality corrugated boxes.
              Our journey has been driven by a commitment to excellence, reliability, and innovation,
              enabling us to serve a wide range of industries with packaging solutions that are not only
              durable but tailored to your brand’s identity.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              At the core of our operations is our use of premium-grade paper, sourced through long-
              standing partnerships with some of the best paper mills in the country. This ensures that
              every box we produce meets the highest standards of strength, sustainability, and finish.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              As a manufacturer, we bring hands-on expertise to every project, while our strong network
              of packaging partners allows us to offer a comprehensive range of products—all under one
              roof. This unique advantage helps us cater to large-scale demands efficiently and ensures
              quicker turnarounds without compromising on quality.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              Our belief in quality and customization drives everything we do. Whether you&#39;re a startup
              or an established brand, we work closely with you to create packaging that truly reflects your
              values and meets your functional needs.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              Our dedicated customer care team is always ready to respond with clarity, speed, and
              genuine support—because we don’t just deliver boxes; we build long-term relationships
              based on trust, transparency, and service.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              Choose PAKTRIX-where experience meets innovation, and your packaging vision becomes reality.
            </p>
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-2 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Our Mission</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              To deliver sustainable, high-quality corrugated packaging solutions that are fully recyclable, customizable, and designed to meet the unique needs of every brand—while minimizing environmental impact and maximizing customer satisfaction.
            </p>
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-2 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Our Vision</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              To become the most trusted partner in green packaging, transforming the industry with innovative, recyclable designs that protect products, elevate brands, and preserve the planet.
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

          <div className="text-center mt-4 mx-auto" data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true">
            <img
              src="https://www.shutterstock.com/image-photo/small-trees-green-leaves-grow-600nw-1722922765.jpg"
              alt=""
              className="img-fluid object-fit-cover aboutus_content about_image"
            />
          </div>

          <div className="aboutus_content mx-auto text-center">
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

          <div className='aboutus_content mx-auto text-center pb-4'>
            <h2 className="mt-2 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Meet Paktrix
            </h2>
            <div style={{ width: "200px" }} className='mx-auto'>
              <img
                src={require("../../assets/images/Meet paktrix logo.png")}
                alt=""
                className="img-fluid w-100 object-fit-cover"
                style={{ objectPosition: 'bottom center' }}
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HOC(Aboutus)