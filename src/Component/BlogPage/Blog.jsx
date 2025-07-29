import React from 'react';
import HOC from '../../HOC';
import "../../assets/css/Blog.css";

const blogData = [
  {
    image: "https://static.wixstatic.com/media/df52bc_6234cf7770794498bcfb0eba63aa3e70~mv2.jpg",
    date: "22-07-2025",
    title: "Sustainable Packaging Solutions | Why Eco‑Friendly Packaging Matters",
    content: "Discover what sustainable packaging is, why it matters, and how Bambrew’s BioPhil plant‑based, compostable solutions help brands reduce waste and cut carbon."
  },
  {
    image: "https://static.wixstatic.com/media/df52bc_3340ab833b87436d870b00fa49919265~mv2.jpeg/v1/fill/w_981,h_736,fp_0.50_0.50,q_90,enc_avif,quality_auto/df52bc_3340ab833b87436d870b00fa49919265~mv2.jpeg",
    date: "23-07-2025",
    title: "What is Kraft Paper: The 101 Guide",
    content: "Kraft paper is a powerhouse in the world of sustainable packaging—strong, versatile, and eco-friendly. This guide breaks down everything you need to know about kraft paper, from how it’s made to why it’s a go-to choice for eco-"
  },
];

function Blog() {
  return (
    <div className='container mt-3 mb-4'>
      <div className='row justify-content-center'>
        {blogData.map((blog, index) => (
          <div className='col-12 col-lg-6 col-md-6 p-3' key={index}>
            <div data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
              data-aos-delay={index * 250}>
              <div className='blog-card h-100 overflow-hidden rounded-4 bg-white'>
                <div className='blog-image position-relative'>
                  <img src={blog.image} className='img-fluid w-100' alt={blog.title} />
                  <div className='blog-date position-absolute text-white px-3 py-2 rounded fw-medium'>
                    {blog.date}
                  </div>
                </div>
                <div className='blog-content p-3'>
                  <div className='titlecolor fw-bold fs-5 mt-2 blog-title' style={{ wordBreak: "break-word" }}>
                    {blog.title}
                  </div>
                  <div className='pera mt-2' style={{ textAlign: "justify" }}>
                    {blog.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HOC(Blog)