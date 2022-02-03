import React from 'react';
import burger from "../pictures/burger-baner.png";
import navItems from "../mocks/navigation";
import Aos from "aos";
import "aos/dist/aos.css"

const Home = () => {

    return (
       <>
           <section className="home" id={navItems.home}>

               <div className="content">
                   <img data-aos="fade-up" data-aos-delay="150" src={burger} alt=""/>
                       <h3 data-aos="fade-up" data-aos-delay="300">So meaty you'll go crazy</h3>
                       <p data-aos="fade-up" data-aos-delay="450">Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Dolores at fuga aliquam ipsa recusandae repellat laudantium pariatur amet culpa
                           cum.</p>
                       <a data-aos="fade-up" data-aos-delay="600" id='home' className="btn">our menu</a>
               </div>

           </section>
           </>
    );
};

export default Home;
