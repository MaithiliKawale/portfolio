import React from 'react';
import skies from '../assets/imgs/skies.jpeg';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div style={{ 

      backgroundImage: `url(${skies})`}} 
      
      className='bg-center bg-cover flex h-screen w-screen bg-no-repeat justify-center items-center'>
      <div className="contact-2">
      <h1 className="text-7xl text-bold ">CONTACT ME</h1>   
      <div className='grid grid-cols-3 gap-5 icons'>
      <a target="_blank" href="https://www.linkedin.com/in/maithili-kawale-2142b5226/">
      <FaLinkedin/>
      </a>
      <a href="mailto:maithilikawale16@gmail.com">
      <MdOutlineMailOutline />
      </a>
      <a href="tel:+917558752779">
      <FaPhoneAlt />
      </a>
      </div>    
      
    </div>
  </div>

  )
}

export default Contact;