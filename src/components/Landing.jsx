import React from 'react'
import skies from '../assets/imgs/skies.jpeg';
import '../App.css';
import SouthIcon from '@mui/icons-material/South';
const Landing = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${skies})`}} 
      className='flex items-center justify-center bg-contain bg-center bg-cover h-screen w-screen bg-no-repeat place-items-center'>
      <div className='text-white text-bold text-3xl text-center '>     
        <h1 className="text-7xl text-bold">Maithili Kawale</h1> 
        <p className="text-black text-4xl pt-2 pb-2">Front-End Developer</p>
        <button className="">Download Resume</button>
        <p className="text-black text-6xl pt-10">Scroll</p>
        <i >
        <SouthIcon className="text-black"  /></i>
      </div>
      </div>
  )
}

export default Landing