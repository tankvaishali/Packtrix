import React from 'react';
import HOC from '../../HOC';
import "../../assets/css/Blog.css";
import { Link } from 'react-router-dom';

const blogData = [
  {
    image: require("../../assets/images/sustainable packing image.jpg"),
    title: "Sustainable Packaging: A Competitive Advantage For Forward-Thinking Businesses",
    content: "In today’s marketplace, sustainability is no longer optional—it’s a competitive necessity. Consumers, regulators, and investors increasingly expect companies to adopt eco-friendly practices."
  },
];

function Blog() {
  return (
    <div className='container mb-4 mt-3 mt-lg-4'>
      <div className='row justify-content-center p-2'>
        {blogData.map((blog, index) => (
          <div className='col-12 col-lg-10' key={index}>
            <div data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
              data-aos-delay={index * 250}
              className='blog-card d-flex flex-column flex-md-row overflow-hidden rounded-4 bg-white'>

              <div className='blog-image flex-shrink-0'>
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className='blog-content p-3 d-flex flex-column justify-content-center'>
                <div className='titlecolor fw-bold fs-4 blog-title' style={{ wordBreak: "break-word" }}>
                  {blog.title}
                </div>
                <div className='pera mt-2' style={{ textAlign: "justify" }}>
                  {blog.content}
                </div>
                <Link to={"/blogdetails"}>
                  <button className="bubbles py-2 px-4 mt-3">
                    <span className="text">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HOC(Blog)