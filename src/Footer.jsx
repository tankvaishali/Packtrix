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
          <div className="footer_width row mx-auto jusyify-content-center align-items-center pt-3 pt-lg-5 pb-4 pb-lg-3 overflow-hidden">
            <div className="col-12 col-lg-4 mb-3 mb-lg-4">
              <div className="h-100">
                <div className='' data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-once="true" style={{ width: "100%" }}>
                  <img src={require("./assets/images/paktrix.png")} alt="" className='img-fluid h-100 w-100' />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="h-100 text-white" data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-once="true">
                <div className="fw-medium pera d-flex align-items-start mb-2">
                  <span className="fw-bold me-2 mt-1" style={{ color: "#f8f9fad6" }}><FaMapLocationDot className='fs-4' /></span>
                  <Link to={"https://maps.app.goo.gl/KGQK1Zw1yB8VPfNH7"} target="_blank" className="text-decoration-none text-white">
                    No.-29, Sai Kripa Society, Anjanafarm, Nr. Raghukul Mkt., Railway Bridge, Ring Road, Surat-395007.
                  </Link>
                </div>

                <div className='d-lg-flex'>
                  <div className="fw-medium pera d-flex align-items-center mb-2 me-3">
                    <span className="fw-bold me-2" style={{ color: "#f8f9fad6" }}><BiSolidPhoneCall className='fs-4' /></span>
                    <Link to={"tel:+919099924140"} className="text-decoration-none text-white">
                      +(91) 90999 24140
                    </Link>
                  </div>

                  <div className="fw-medium pera d-flex align-items-center mb-2">
                    <span className="fw-bold me-2" style={{ color: "#f8f9fad6" }}><IoMail className='fs-4' /></span>
                    <Link to={"mailto:packtrix2025@gmail.com"} target="_blank" className="text-decoration-none text-white">
                      packtrix2025@gmail.com
                    </Link>
                  </div>
                </div>
                <div className='d-flex mt-3 mt-md-2 mb-4'>
                  <div className='d-flex'>
                    <div className="">
                      <Link
                        to={"https://www.facebook.com/people/Paktrix/61577301784476/"}
                        target='_blank'
                        style={{ width: "fit-content" }}
                        className="text-decoration-none text-white">
                        <FaFacebookF className='fw-bold fs-5' />
                      </Link>
                    </div>

                    <div className="px-2">
                      <Link
                        to={"https://www.instagram.com/paktrix_packagings/?igsh=MW05ZWdtc29xdm94Mw%3D%3D&utm_source=qr#"}
                        target='_blank'
                        style={{ width: "fit-content" }}
                        className="text-decoration-none text-white">
                        <FaInstagram className='fw-bold fs-5' />
                      </Link>
                    </div>
                  </div>
                  <div className='pera text-white fw-medium ms-auto pe-2 pe-lg-5'>
                    © 2025 by paktrix.com
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer