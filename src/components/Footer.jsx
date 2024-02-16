import React from 'react'
import '../App.css'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (     
    <div className="flex items-center justify-around h-16 w-full text-2xl">
    <div >Copyright &copy; Maithili Kawale 2024</div>
    <a href="https://github.com/MaithiliKawale" target='_blank'><FaGithub  className="text-3xl"/></a>
    </div>
  )
}

export default Footer;