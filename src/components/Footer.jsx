import React from 'react'

const Footer = () => {
  return (
        
    <footer>

    <div className="right">
      <button className="socials"><a target="_blank" href="https://www.linkedin.com/in/maithili-kawale-2142b5226/"
        ><i
          className="fa-brands fa-3x fa-linkedin-in"
          style="color: #FF0000"
        ></i>
      </a></button>
        
      <button className="socials">
         <a href="mailto:maithilikawale16@gmail.com"
          ><i
            className="fa-regular fa-3x fa-envelope"
            style="color: #FF0000"
          ></i
        ></a></button>

        <button className="socials">
        <a target="_blank" href="https://www.instagram.com/"
          ><i
            className="fa-brands fa-3x fa-instagram"
            style="color: #FF0000"
          ></i
        ></a></button>

        <button className="socials">
          <a target="_blank" href="Tel: 7558752779">
            <i className="fa-solid fa-3x fa-phone" style="color: #FF0000"></i>
          </a></button>

          <button className="socials">
            <a target="_blank" href="https://goo.gl/maps/HaqdKKCHYKdagFU87">
              <i className="fa-solid fa-3x fa-location-dot" style="color: #FF0000"></i>
            </a></button>
          
    </div>

    <div>Copyright &copy; Maithili Kawale 2023</div>
</footer>
  )
}

export default Footer;