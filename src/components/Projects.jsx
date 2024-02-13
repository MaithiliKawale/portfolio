import React from 'react';
import gpt from '../assets/imgs/projects/gpt.png';
import pomo from '../assets/imgs/projects/pomo.png';
import nike from '../assets/imgs/projects/nike.png';
import apple from '../assets/imgs/projects/apple.png';

import'../App.css'

const Projects = () => {
  return (
    <div
    className="flex items-center justify-center h-auto w-auto bg-black flex-col"
    >
      <h1 className="name">PROJECTS</h1>

      <div className="projects">
        <div className="card-img" >
         <div style={{ 
          backgroundImage: `url(${gpt})`}}
          className='flex items-center justify-center h-screen w-screen bg-black flex-col'>
          <div className="action">
            <h3>Gpt3</h3>
            <p>Loruki is a web hosting platform. This is similar to Heroku.</p>
            <a target="_blank" href="https://gpt3-landing-page-nine.vercel.app/">Launch</a>
        </div>
        </div>
        </div>

        <div className="card-img">
        <div style={{ backgroundImage: `url(${apple})`}}
        className='flex items-center justify-center h-screen w-screen bg-black flex-col'>
        <div className="action">
            <h3>Creative Agency</h3>
            <p>Creative Agency is a website for agencies to display their work and give information about the services they offer.</p>
            <a target="_blank" href="./Creative Agency/index.html">Launch</a>
        </div>
        </div>
        </div>

        <div className="card-img">
        <div style={{ backgroundImage: `url(${nike})`}}
        className='flex items-center justify-center h-screen w-screen bg-black flex-col'>
        <div className="action">
            <h3>Livewire's Bootcamp</h3>
            <p>Livewire's Bootcamp is a bootcamp's website showcasing their services, pricing, etc.</p>
            <a target="_blank" href="./BootCamp/index.html">Launch</a>
        </div>
        </div>
        </div>

        <div className="card-img">
        <div style={{ backgroundImage: `url(${pomo})`}}
        className='flex items-center justify-center h-screen w-screen bg-black flex-col'>
        <div className="action">
            <h3>Blog</h3>
            <p>This is a fully responsive static blog page displaying articles from people in various fields.</p>
            <a target="_blank" href="./figma project/index.html">Launch</a>
        </div>
        </div>
        </div>
      </div>

    </div>


  )
}

export default Projects