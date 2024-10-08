import React from 'react'
import skies from '../assets/imgs/skies.jpeg';
import '../App.css';
import SouthIcon from '@mui/icons-material/South';
import resume from '../assets/Resume-Maithili_Kawale.pdf';

const Landing = () => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = `${resume}`;
    link.download = "Resume-Maithili_Kawale.pdf";
    link.click();
  };



  return (

    <div style={{ 
      backgroundImage: `url(${skies})`}} 
      className='bg-center bg-cover h-screen w-screen bg-no-repeat '>
      <div className="flex items-center md-items-start resume justify-between p-8">
      <div className='text-2xl'>
      <h1 className='almendra-display-regular'>MK
      </h1>
  </div>

  
  <button onClick={downloadFile} className="launch">Download Resume</button>

      </div>
      <div className=" mt-10 w-screen flex items-center justify-center place-items-center">
      <div className='text-white text-bold text-3xl text-center '>     
        <h1 className="text-7xl text-bold drop-shadow-[2px_2px_2px_rgba(255,255,255,1)]">Maithili Kawale</h1> 
        <p className="text-black font-semibold text-4xl pt-2 pb-2">Full-Stack Developer</p>
        
        <p className="text-black text-6xl pt-10">Scroll</p>
        <i >
        <SouthIcon className="text-black icon-down"  /></i>
      </div>
      </div>
      </div>
  )
}

export default Landing;