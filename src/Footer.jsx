import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className="footerbg">
        <div className="container">
            <div className="row w-75 mx-auto jusyify-content-center py-5">
                <div className="col-4">
<div className="h-100">
    <div>
        <img src={require("./assets/images/Media (2).jpeg")} alt="" className='img-fluid h-100 w-100 ' />
    </div>
</div>
                </div>
                <div className="col-8">
<div className="h-100 text-white fw-bold">
<div ><span className='fs-5'> Address :</span> 3rd Floor, 94/ B, August Kranti Marg, Altamount Road, surat - 395006</div>
<div ><span className='fs-5'> Call :</span> +(91) 96385 21470</div>
<div ><span className='fs-5'> Mail :</span> packtrix2025@gmail.com</div>
<div >
    <div className='d-flex mt-2'>
         <div className="p-2 ">
                    <Link
                      to={"https://www.facebook.com/people/Belpatra-Pharmachem/100082567202591/"}
                      style={{ width: "fit-content" }}
                      target="_blank"
                      className="footericon text-center p-2    d-flex text-decoration-none text-white facebookicon">
                      <FaFacebookF />
                    </Link>
                  </div>

                  <div className=" p-2">
                    <Link
                      to={"https://www.instagram.com/belpatra_pharmachem/"}
                      style={{ width: "fit-content" }}
                      className="footericon text-center p-2   d-flex text-decoration-none text-white instaicon">
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className=" p-2">
                    <Link
                      to={"https://twitter.com/Belpatra_Pharma"}
                      style={{ width: "fit-content" }}
                      className="footericon text-center p-2   d-flex text-decoration-none text-white twittericon">
                      <FaTwitter />
                    </Link>
                  </div>
    </div>
    <div className='text-white fw-bold'>
        ©2024 by paktrix.in
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

export default Footer;
