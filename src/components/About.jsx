import React from 'react';
import html from '../assets/imgs/html1.svg'; 
import css from '../assets/imgs/css1.svg';
import bootstrap from '../assets/imgs/bootstrap.png'; 
import js from '../assets/imgs/js.svg'; 
import react from '../assets/imgs/react.svg'; 
import scss from '../assets/imgs/scss1.svg'; 
import tailwind from '../assets/imgs/tail.svg'; 

const About = () => {
  return (
    <div className='bg-black p-20 flex h-full w-full flex-col items-center justify-center'>      
    <h1 className="text-7xl text-bold gradient__text">ABOUT ME</h1>
      <div>
        <h1 className="text-5xl pt-10 flex items-center justify-center">A dedicated Front-end Developer based in Nagpur, India</h1>
        <p className="pt-10 text-left rtl:text-right ">
          As a Junior Front-End Developer, I possess an impressive arsenal
          of skills in HTML, CSS, JavaScript, Tailwind CSS, and SCSS along with a Bachelor's degree in Computer Science and Engineering. I excel in
          designing and maintaining responsive websites that offer a smooth
          user experience. My expertise lies in crafting dynamic, engaging
          interfaces through writing clean and optimized code and utilizing
          cutting-edge development tools and techniques. I am also a team
          player who thrives in collaborating with cross-functional teams to
          produce outstanding web applications.
        </p>
      </div>

    <div className="flex items-center justify-center w-full h-auto flex-col p-10">
      <h2 className="text-3xl text-bold">Tech Stack</h2>

      <div className="grid lg:grid-cols-5 w-full h-full md:grid md:grid-cols-3 gap-4">
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">HTML</h4>
          <div style={{  backgroundImage: `url(${html})`}} 
          className='w-20 h-20 bg-contain bg-center bg-cover bg-no-repeat'
         ></div>
        </div>

        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">CSS</h4>
            <div style={{  backgroundImage: `url(${css})`}} 
          className='w-20 h-20 bg-contain bg-center bg-cover bg-no-repeat'
         ></div>       
          </div>

            <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">JavaScript</h4>
            <div style={{  backgroundImage: `url(${js})`}} 
          className='w-20 h-20 bg-contain bg-center bg-cover bg-no-repeat'
         ></div>
         </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">Tailwind CSS</h4>
          <div style={{  backgroundImage: `url(${tailwind})`}} 
          className='w-20 h-20 bg-contain bg-center bg-cover bg-no-repeat'
         ></div>         
         </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">Bootstrap</h4>
          <div style={{  backgroundImage: `url(${bootstrap})`}} 
          className='w-20 h-20 bg-contain bg-center bg-cover bg-no-repeat'
         ></div> 
        </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">ReactJS</h4>
          <div style={{  backgroundImage: `url(${react})`}} 
          className='w-20 h-20 bg-contain bg-center bg-cover bg-no-repeat'
         ></div> 
        </div>
        <div className="card flex items-center justify-center flex-col p-10">
          <h4 className="p-3">SCSS</h4>
          <div style={{  backgroundImage: `url(${scss})`}} 
          className='w-20 h-20 bg-contain bg-center bg-cover bg-no-repeat'
         ></div> 
        </div>
      </div>
    </div>
</div>
  )
}

export default About;