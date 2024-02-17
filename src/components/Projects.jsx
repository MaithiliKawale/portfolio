import React from 'react';
import gpt from '../assets/imgs/projects/gpt.png';
import pomo from '../assets/imgs/projects/pomo.png';
import nike from '../assets/imgs/projects/nike.png';
import apple from '../assets/imgs/projects/apple.png';
import tailwind from '../assets/imgs/tail.svg';
import react from '../assets/imgs/react.svg';
import bt from "../assets/imgs/bootstrap.png"
import css from '../assets/imgs/css1.svg';
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
        <div style={{ backgroundImage: `url(${apple})`}}
        className='card-img'>
        </div>
        <div className="flex flex-col justify-center items-center lg:ml-5 md:m-5 lg:w-80">
            <h2 className="font-black text-4xl ">Apple Mart</h2>
            <p>Apple Mart is an E-Commerce store.</p>
            <div className="tech">
            <h3 className="font-black text-xl">Technologies</h3>
            <div className="flex">
            <div style={{  backgroundImage: `url(${react})`}} 
            className='w-14 h-14 bg-contain bg-center bg-cover bg-no-repeat m-3'
          ></div>
          <div style={{  backgroundImage: `url(${bt})`}} 
            className='w-14 h-14 bg-contain bg-center bg-cover bg-no-repeat m-3'
          ></div>    

            </div>
            </div> 
            <button className="launch">Launch</button>
        </div>
        </div>
        </a>

        <a href="https://gpt3-landing-page-nine.vercel.app/" target="_blank" className="unstyled">
        <div className="project flex items-center justify-center">
        <div style={{ backgroundImage: `url(${gpt})`}}
        className='card-img'>
        </div>
        <div className="flex flex-col justify-center items-center lg:ml-5 md:m-5 lg:w-80">
            <h2 className="font-black text-4xl">Gpt-3 Landing page</h2>
            <p>Gpt3 is an OpenAI Landing page.</p>
            <div className="tech">
            <h3 className="font-black text-xl">Technologies</h3>
            <div className="flex">
            <div style={{  backgroundImage: `url(${react})`}} 
            className='w-14 h-14 bg-contain bg-center bg-cover bg-no-repeat m-3'
          ></div>
          <div style={{  backgroundImage: `url(${css})`}} 
            className='w-14 h-14 bg-contain bg-center bg-cover bg-no-repeat m-3'
          ></div>
            </div>
            </div> 
            <button className="launch">Launch</button>
        </div>
        </div>
    </a>

        <a href="https://nike-landing-page-kohl-tau.vercel.app/" target="_blank" className="unstyled">
        <div className="project flex items-center justify-center">
        <div style={{ backgroundImage: `url(${nike})`}}
        className='card-img'>
        </div>
        <div className="flex flex-col justify-center items-center lg:ml-5 md:m-5 lg:w-80">
            <h2 className="font-black text-4xl">Nike Landing page</h2>
            <p>This is a Landing Page Design Of Nike (Nike clone).</p>
            <div className="tech">
            <h3 className="font-black text-xl">Technologies</h3>
            <div className="flex">
            <div style={{  backgroundImage: `url(${react})`}} 
            className='w-14 h-14 bg-contain bg-center bg-cover bg-no-repeat m-3'
          ></div>
          <div style={{  backgroundImage: `url(${tailwind})`}} 
            className='w-14 h-14 bg-contain bg-center bg-cover bg-no-repeat m-3'
          ></div>
            </div>
            </div> 
           <button className="launch">Launch</button>
        </div>
        </div>
        </a>

        <a href="https://pomodoro-app-pi-gray.vercel.app/" target="_blank" className="unstyled">
        <div className="project flex items-center justify-center">
        <div style={{ backgroundImage: `url(${pomo})`}}
        className='card-img'>
        </div>
        <div className="flex flex-col justify-center items-center lg:ml-5 md:m-5 lg:w-80">
            <h2 className="font-black text-4xl">Pomodoro Timer</h2>
            <p>This is a 25-minute work and 5-minute break system that helps you boost productivity.</p>
            <div className="tech">
            <h3 className="font-black text-xl">Technologies</h3>
            <div className="flex">
              <div style={{  backgroundImage: `url(${react})`}} 
                className='w-14 h-14 bg-contain bg-center bg-cover bg-no-repeat m-3'
              ></div>
              <div style={{  backgroundImage: `url(${css})`}} 
                className='w-14 h-14 bg-contain bg-center bg-cover bg-no-repeat m-3'
              ></div>
            </div>
            </div>
            <button className="launch">Launch</button>
        </div>
    </div>
    </a>
  </div>
  )
}

export default Projects;
