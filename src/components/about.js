import React from 'react';
import "aos/dist/aos.css"
import aboutImg from "../pictures/about-img.png"

const About = () => {
    return (
       <>
           <section className="about" id="about">

               <div className="image" data-aos="fade-right" data-aos-delay="150">
                   <img src={aboutImg} alt=""/>
               </div>

               <div className="content" data-aos="fade-left" data-aos-delay="300">
                   <h3 className="title">Step into burger heaven</h3>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, veniam error fugit quasi
                       perspiciatis blanditiis quo, sint beatae ut, commodi fuga illo reprehenderit ea voluptatibus
                       earum fugiat obcaecati doloremque? Aspernatur?</p>
                   <div className="icons">
                       <h3><i className="fas fa-check"/> best price </h3>
                       <h3><i className="fas fa-check"/> Best Service </h3>
                       <h3><i className="fas fa-check"/> Fresh Ingredient </h3>
                       <h3><i className="fas fa-check"/> backed buns </h3>
                       <h3><i className="fas fa-check"/> natural cheese </h3>
                       <h3><i className="fas fa-check"/> veg & non-veg </h3>
                   </div>
                   <a href="#" className="btn">read more</a>
               </div>

           </section>
           </>
    );
};

export default About;
