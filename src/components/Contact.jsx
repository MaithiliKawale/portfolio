import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
    <div className="contact-2">
    <h1 className="text-7xl text-bold">CONTACT ME</h1>        
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input
            type="text"
            className="msg"
            placeholder="Leave a message for me!"
          />
          <a href="#" className="btn">Send</a>
        
      </div>
  </div>
  </section>

  )
}

export default Contact