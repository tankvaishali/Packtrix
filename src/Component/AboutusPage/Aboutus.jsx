import React from 'react';
import HOC from '../../HOC';

function Aboutus() {
  return (
   <>
   <div className="container text-center">
    <div className="abou_image text-center">
      <img src="https://static.wixstatic.com/media/df52bc_35532c34ac314815a6ae769a3f37d4e1~mv2.jpg/v1/fill/w_720,h_337,al_c,lg_1,q_80,enc_avif,quality_auto/Gallery%20600X308_2.jpg" alt="" className='img-fluid w-75' />
    </div>
    <div className="w-75 mx-auto text-center">
<h2 className='py-2 fw-bold text-success'> About Us</h2>
<p className='pera w-75 mx-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.</p>
    </div>

    <div className="py-3 w-75 mx-auto text-center">
      <h2 className='py-2 fw-bold text-success'>Our Mission</h2>
      <p className='pera w-75 mx-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores.</p>
      <p className='pera w-75 mx-auto pt-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores.</p>
    </div>
    <div className="py-3 w-75 mx-auto text-center">
      <h2 className='py-2 fw-bold text-success'>Dreamers. Innovators. Creators.</h2>
      <p className='pera w-75 mx-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores.</p>
      <p className='pera w-75 mx-auto pt-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores, aliquam recusandae corrupti totam repellendus rerum omnis quam autem odit earum exercitationem veniam quod esse adipisci perferendis? Tempora voluptas sed soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati aliquid eaque quidem et incidunt ipsam quasi consequatur dolores.</p>
    </div>


 <div className='text-center mb-4' >
        <img src="https://www.shutterstock.com/image-photo/small-trees-green-leaves-grow-600nw-1722922765.jpg" alt="" className='img-fuild w-75 object-fit-cover' style={{objectPosition:"bottom center"}} height={400} />
      </div>

   <div className="py-3 w-75 mx-auto text-center">
      <h2 className='py-2 fw-bold text-info'>Why does it matter?</h2>
      <p className='pera w-75 mx-auto' >Our manufacturing facilities are powered by renewable energy sources, and we have implemented several energy-efficient practices to reduce carbon emissions for us and our esteemed customers. We currently save more than 1 million trees to cut, more than 20,000 tons of single-use plastic, 25,000 tons of CO2, 4.3 Million kWh of electricity, and 250,000 barrels of oil.</p>
      <p className='pera w-75 mx-auto pt-2' >At our company, we believe in transparency and open communication with

our customers. We are committed to providing the highest level of customer service and support, and we are always willing to work with our customers to find the best sustainable packaging solutions for their needs.</p>
    </div>


   </div>
   </>
  );
}

export default HOC(Aboutus);
