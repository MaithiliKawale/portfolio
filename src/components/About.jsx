import React from 'react';
import html from '../assets/imgs/html52.png'; 
import css from '../assets/imgs/css4.png';
import bootstrap from '../assets/imgs/bootstrap.png'; 
import js from '../assets/imgs/js1.png'; 
import react from '../assets/imgs/react1.png'; 
import scss from '../assets/imgs/sass.png'; 
import tailwind from '../assets/imgs/tailw.png'; 
import node from '../assets/imgs/nodeJS.png'; 
import exp from '../assets/imgs/express.png'; 
import mongo from '../assets/imgs/mongoDB.png'; 

const About = () => {
  return (
    <div className='bg-black p-10 flex h-full w-full flex-col items-center justify-center'>      
    <h1 className="text-7xl text-bold gradient__text">ABOUT ME</h1>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-4xl pt-10">A dedicated Full Stack Developer based in Bangalore, India</h1>
        <p className="pt-10 text-xl m-auto px-auto flex items-center justify-center">
          Hi, I'm Maithili Kawale, A creative Web Developer with hands-on experience in React, NodeJS, Express, MongoDB who loves learning and developing intuitive applications, that will enable the customers to have a good experience interacting with it.
        </p>
      </div>

    <div className="flex items-center justify-center w-full h-auto flex-col p-10">
      <h2 className="text-3xl text-bold">Tech Stack</h2>

      <div className="grid lg:grid-cols-5 w-full h-full md:grid md:grid-cols-3 gap-4">
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">HTML</h4>
          <div style={{  backgroundImage: `url(${html})`}} 
          className='w-20 h-20 bg-center bg-cover bg-no-repeat'
         ></div>
        </div>

        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">CSS</h4>
            <div style={{  backgroundImage: `url(${css})`}} 
          className='w-20 h-20 bg-center bg-cover bg-no-repeat'
         ></div>       
          </div>

            <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">JavaScript</h4>
            <div style={{  backgroundImage: `url(${js})`}} 
          className='w-20 h-20 bg-center bg-cover bg-no-repeat'
         ></div>
         </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">Tailwind CSS</h4>
          <div style={{  backgroundImage: `url(${tailwind})`}} 
          className='w-20 h-14 bg-center bg-cover bg-no-repeat'
         ></div>         
         </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">Bootstrap</h4>
          <div style={{  backgroundImage: `url(${bootstrap})`}} 
          className='w-20 h-20 bg-center bg-cover bg-no-repeat'
         ></div> 
        </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">ReactJS</h4>
          <div style={{  backgroundImage: `url(${react})`}} 
          className='w-20 h-20 bg-center bg-cover bg-no-repeat'
         ></div> 
        </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">SCSS</h4>
          <div style={{  backgroundImage: `url(${scss})`}} 
          className='w-20 h-20 bg-center bg-cover bg-no-repeat'
         ></div> 
        </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">NodeJS</h4>
          <div style={{  backgroundImage: `url(${node})`}} 
          className='w-20 h-20 bg-center bg-cover bg-no-repeat'
         ></div> 
        </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">ExpressJS</h4>
          <div style={{  backgroundImage: `url(${exp})`}} 
          className='w-20 h-20 bg-center bg-cover bg-no-repeat'
         ></div> 
        </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">MongoDB</h4>
          <div style={{  backgroundImage: `url(${mongo})`}} 
          className='w-20 h-20 bg-center bg-cover bg-no-repeat'
         ></div> 
        </div>
      </div>
    </div>
</div>
  )
}

export default About;