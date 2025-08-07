import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footerbg">
        <div className="container">
          <div className="footer_width row mx-auto jusyify-content-center align-items-center pt-5 overflow-hidden">
            <div className="col-12 col-lg-6 mb-4">
              <div className="h-100">
                <div className='bg-white' data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-once="true" style={{ width: "100%", height: "180px" }}>
                  <img src={require("./assets/images/Media (2).jpeg")} alt="" className='img-fluid h-100 w-100 object-fit-contain' />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="h-100 text-white" data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-once="true">
                <div className="fw-medium pera d-flex align-items-start mb-2">
                  <span className="fw-bold me-2 mt-1" style={{ color: "#f8f9fad6" }}><FaMapLocationDot className='fs-4' /></span>
                  <Link to={""} className="text-decoration-none text-white">
                    3rd Floor, 94/ B, August Kranti Marg,
                    <div>Altamount Road, Surat - 395006.</div>
                  </Link>
                </div>

                <div className="fw-medium pera d-flex align-items-center mb-2">
                  <span className="fw-bold me-2" style={{ color: "#f8f9fad6" }}><BiSolidPhoneCall className='fs-4' /></span>
                  <Link to={"tel:+9196385 21470"} className="text-decoration-none text-white">
                    +(91) 96385 21470
                  </Link>
                </div>

                <div className="fw-medium pera d-flex align-items-center">
                  <span className="fw-bold me-2" style={{ color: "#f8f9fad6" }}><IoMail className='fs-4' /></span>
                  <Link to={"mailto:packtrix2025@gmail.com"} target="_blank" className="text-decoration-none text-white">
                    packtrix2025@gmail.com
                  </Link>
                </div>
                <div>
                  <div className='d-flex mt-3 mb-4'>
                    <div className="">
                      <Link
                        // to={"/"}
                        style={{ width: "fit-content" }}
                        className="footericon text-center p-2 d-flex text-decoration-none text-white facebookicon">
                        <FaFacebookF />
                      </Link>
                    </div>

                    <div className="px-3">
                      <Link
                        // to={"/"}
                        style={{ width: "fit-content" }}
                        className="footericon text-center p-2 d-flex text-decoration-none text-white instaicon">
                        <FaInstagram />
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        // to={"/"}
                        style={{ width: "fit-content" }}
                        className="footericon text-center p-2 d-flex text-decoration-none text-white twittericon">
                        <FaTwitter />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='border border-white' />
          <div className='pera text-white fw-medium text-center pb-3'>
            © 2025 by paktrix.com
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer