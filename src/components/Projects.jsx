import React from 'react';
import gpt from '../assets/imgs/projects/gpt.png';
import hospital from '../assets/imgs/projects/hospital.png';
import nike from '../assets/imgs/projects/nike.png';
import blog from '../assets/imgs/projects/blog.png';
import tailwind from '../assets/imgs/tailw.png';
import react from '../assets/imgs/react1.png';
import bt from "../assets/imgs/bootstrap.png";
import css from '../assets/imgs/css4.png';
import '../App.css';
import './Projects.css';

const Projects = () => {
  return (
    <div
    className="flex items-center justify-center h-auto w-full bg-black flex-col"
    >
      <h1 className="text-7xl text-bold mb-20 ">PROJECTS</h1>
      <a href="https://apple-mart-two.vercel.app" target="_blank" className="unstyled">
      <div className="project flex items-center justify-center">
        <img style={{ backgroundImage: `url(${hospital})`}}
        className='card-img' loading='lazy'>
        </img>
        <div className="flex flex-col justify-center items-center lg:ml-5 md:m-5 lg:w-80">
            <h2 className="font-black text-4xl ">i-hospital</h2>
            <p>This is a appointment booking website for hospital staff.</p>
            <div className="tech py-2">
            <h3 className="font-black text-xl">Technologies</h3>
                       {/* <div className="flex "> 
            <div style={{  backgroundImage: `url(${react})`}} 
            className='w-14 h-14 bg-center bg-cover bg-no-repeat m-3'
          ></div>
          <div style={{  backgroundImage: `url(${bt})`}} 
            className='w-14 h-14 bg-center bg-cover bg-no-repeat m-3'
          ></div>     */}
              <ul className="list-disc">
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
              </ul>
            {/* </div> */}
            </div> 
            <button className="launch">Launch</button>
        </div>
        </div>
        </a>

        

        <a href="https://nike-frontend-bqxl.onrender.com/" target="_blank" className="unstyled">
        <div className="project flex items-center justify-center">
        <div style={{ backgroundImage: `url(${nike})`}}
        className='card-img'>
        </div>
        <div className="flex flex-col justify-center items-center lg:ml-5 md:m-5 lg:w-80">
            <h2 className="font-black text-4xl">E-commerce website</h2>
            <p>This is a E-commerce website for selling shoes.</p>
            <div className="tech py-2">
            <h3 className="font-black text-xl">Technologies</h3>
                       {/* <div className="flex "> 
            <div style={{  backgroundImage: `url(${react})`}} 
            className='w-14 h-14 bg-center bg-cover bg-no-repeat m-3'
          ></div>
          <div style={{  backgroundImage: `url(${bt})`}} 
            className='w-14 h-14 bg-center bg-cover bg-no-repeat m-3'
          ></div>     */}
              <ul className="list-disc">
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
              </ul>
            {/* </div> */}
            </div> 
           <button className="launch">Launch</button>
        </div>
        </div>
        </a>

        <a href="https://login-page-iugn.onrender.com/" target="_blank" className="unstyled">
        <div className="project flex items-center justify-center">
        <div style={{ backgroundImage: `url(${blog})`}}
        className='card-img'>
        </div>
        <div className="flex flex-col justify-center items-center lg:ml-5 md:m-5 lg:w-80">
            <h2 className="font-black text-4xl">My Blog</h2>
            <p>A blog website where users cannot access posts without being logged in.</p>
            <div className="tech py-2">
            <h3 className="font-black text-xl">Technologies</h3>
                       {/* <div className="flex "> 
            <div style={{  backgroundImage: `url(${react})`}} 
            className='w-14 h-14 bg-center bg-cover bg-no-repeat m-3'
          ></div>
          <div style={{  backgroundImage: `url(${bt})`}} 
            className='w-14 h-14 bg-center bg-cover bg-no-repeat m-3'
          ></div>     */}
              <ul className="list-disc">
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
              </ul>
            {/* </div> */}
            </div> 
            <button className="launch">Launch</button>
        </div>
    </div>
    </a>



    <a href="https://hospital-appointment-system-jo00.onrender.com/" target="_blank" className="unstyled">
        <div className="project flex items-center justify-center">
        <div style={{ backgroundImage: `url(${gpt})`}}
        className='card-img'>
        </div>
        <div className="flex flex-col justify-center items-center lg:ml-5 md:m-5 lg:w-80">
            <h2 className="font-black text-4xl">Gpt-3 Landing page</h2>
            <p>Gpt3 is an OpenAI Landing page.</p>
            <div className="tech py-2">
            <h3 className="font-black text-xl">Technologies</h3>
                       {/* <div className="flex "> 
            <div style={{  backgroundImage: `url(${react})`}} 
            className='w-14 h-14 bg-center bg-cover bg-no-repeat m-3'
          ></div>
          <div style={{  backgroundImage: `url(${bt})`}} 
            className='w-14 h-14 bg-center bg-cover bg-no-repeat m-3'
          ></div>     */}
              <ul className="list-disc">
                <li>ReactJS</li>
              </ul>
            {/* </div> */}
            </div>  
            <button className="launch">Launch</button>
        </div>
        </div>
    </a>
    
  </div>
  )
}

export default Projects;
