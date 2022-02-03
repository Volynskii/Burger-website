import React from 'react';

const Footer = () => {
    return (
       <>
           <section className="footer">

               <div className="links">
                   <a href="#home" className="btn">home</a>
                   <a href="#menu" className="btn">menu</a>
                   <a href="#about" className="btn">about</a>
                   <a href="#reviews" className="btn">reviews</a>
                   <a href="#contact" className="btn">contact</a>
                   <a href="#blogs" className="btn">blogs</a>
               </div>

               <p className="credit"> created by <span>Anton Wolynskii</span> | all rights reserved! </p>

           </section>
           </>
    );
};

export default Footer;
