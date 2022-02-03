import React from 'react';
import "aos/dist/aos.css"

const Service = () => {
    return (
       <>
           <section className="service">

               <div className="box" data-aos="fade-up" data-aos-delay="150">
                   <i className="fas fa-hamburger"/>
                   <h3>best quality</h3>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, cum.</p>
               </div>

               <div className="box" data-aos="fade-up" data-aos-delay="300">
                   <i className="fas fa-shipping-fast"/>
                   <h3>free delivery</h3>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, cum.</p>
               </div>

               <div className="box" data-aos="fade-up" data-aos-delay="450">
                   <i className="fas fa-headset"/>
                   <h3>24/7 support</h3>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, cum.</p>
               </div>

           </section>
           </>
    );
};

export default Service;
