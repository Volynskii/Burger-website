import React from 'react';
import titleImg from '../pictures/title-img.png'
import product1 from '../pictures/product-1.png'
import product2 from '../pictures/product-2.png'
import product3 from '../pictures/product-3.png'
import product4 from '../pictures/product-4.png'
import product5 from '../pictures/product-5.png'
import product6 from '../pictures/product-6.png'
import navItems from "../mocks/navigation";
import "aos/dist/aos.css"

const Menu = () => {

    return (
       <>
           <section className="menu" id={navItems.menu}>

               <div className="heading">
                   <img src={titleImg} alt=""/>
                       <h3>our menu</h3>
               </div>

               <div className="box-container">

                   <div className="box" data-aos="fade-up" data-aos-delay="150">
                       <img src={product1} alt=""/>
                           <div className="content">
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                               <h3>cheese hamburger</h3>
                               <div className="price">$29.99</div>
                               <button className="btn">add to cart</button>
                           </div>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="300">
                       <img src={product2} alt=""/>
                           <div className="content">
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                               <h3>cheese hamburger</h3>
                               <div className="price">$29.99</div>
                               <button  className="btn">add to cart</button>
                           </div>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="450">
                       <img src={product3} alt=""/>
                           <div className="content">
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                               <h3>cheese hamburger</h3>
                               <div className="price">$29.99</div>
                               <button className="btn">add to cart</button>
                           </div>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="600">
                       <img src={product4} alt=""/>
                           <div className="content">
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                               <h3>cheese hamburger</h3>
                               <div className="price">$29.99</div>
                               <button className="btn">add to cart</button>
                           </div>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="750">
                       <img src={product5} alt=""/>
                           <div className="content">
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                               <h3>cheese hamburger</h3>
                               <div className="price">$29.99</div>
                               <button className="btn">add to cart</button>
                           </div>
                   </div>

                   <div className="box" data-aos="fade-up" data-aos-delay="900">
                       <img src={product6} alt=""/>
                           <div className="content">
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                               <h3>cheese hamburger</h3>
                               <div className="price">$29.99</div>
                               <button className="btn">add to cart</button>
                           </div>
                   </div>

               </div>

           </section>
           </>
    );
};

export default Menu;
