import React from 'react';

const Footer = () => {
  const update = new Date();
  let year = update.getFullYear();
    return (
<div className='bg-footer bg-cover'>
<footer className=" py-14 ">
 <div className='footer justify-items-center'>
 <div >
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Emergency Checkup</a>
    <a className="link link-hover">Monthly Checkup</a>
    <a className="link link-hover">Weekly Checkup</a>
    <a className="link link-hover">Deep Checkup</a>
  </div> 
  <div>
    <span className="footer-title">ORAL HEALTH</span> 
    <a className="link link-hover">Fluoride Treatment</a>
    <a className="link link-hover">Teath Whitening</a>
   
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  
 </div>
 
  <div  className="footer footer-center p-4 mt-16 ">
  <p>Copyright © {year} - All right reserved</p>
  </div>
</footer>
</div>
    );
};

export default Footer;