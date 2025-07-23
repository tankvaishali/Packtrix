import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footerbg">
        <div className="container">
          <div className="row w-75 mx-auto jusyify-content-center align-items-center pt-5">
            <div className="col-12 col-lg-5 mb-4">
              <div className="h-100">
                <div className='bg-white' style={{ width: "100%", height: "180px" }}>
                  <img src={require("./assets/images/Media (2).jpeg")} alt="" className='img-fluid h-100 w-100 object-fit-contain' />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="h-100 text-white">
                <div className='fw-medium pera'><span className='fs-5 fw-bold'>Address :</span> <Link to={""} className='text-decoration-none text-white'>3rd Floor, 94/ B, August Kranti Marg, <div>Altamount Road, surat - 395006.</div></Link></div>
                <div className='fw-medium pera my-2'><span className='fs-5 fw-bold'>Call :</span> <Link to={"tel:+9196385 21470"} className='text-decoration-none text-white'>+(91) 96385 21470</Link></div>
                <div className='fw-medium pera'><span className='fs-5 fw-bold'>E-mail :</span> <Link to={"mailto:packtrix2025@gmail.com"} target="_blank" className='text-decoration-none text-white'>packtrix2025@gmail.com</Link></div>
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
          <hr className='border border-dark' />
          <div className='pera text-white fw-medium text-center pb-3'>
            © 2025 by paktrix.in
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer