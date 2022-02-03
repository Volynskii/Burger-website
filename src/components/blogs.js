import React from 'react';
import titleImg from '../pictures/title-img.png'
import blog1 from '../pictures/blog-1.jpg'
import blog2 from '../pictures/blog-2.jpg'
import blog3 from '../pictures/blog-3.jpg'

const Blogs = () => {
    return (
        <>
            <section className="blogs" id="blogs">

                <div className="heading">
                    <img src={titleImg} alt=""/>
                        <h3>daily posts</h3>
                </div>

                <div className="box-container">

                    <div className="box" data-aos="fade-up" data-aos-delay="150">
                        <div className="image">
                            <img src={blog1} alt=""/>
                                <div className="icons">
                                    <a href="#"> <i className="fas fa-calendar"/> 21st may, 2022 </a>
                                    <a href="#"> <i className="fas fa-user"/> by admin </a>
                                </div>
                        </div>
                        <div className="content">
                            <h3>blog title goes here.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.</p>
                            <a href="#" className="btn">read more</a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="300">
                        <div className="image">
                            <img src={blog2} alt=""/>
                                <div className="icons">
                                    <a href="#"> <i className="fas fa-calendar"/> 21st may, 2022 </a>
                                    <a href="#"> <i className="fas fa-user"/> by admin </a>
                                </div>
                        </div>
                        <div className="content">
                            <h3>blog title goes here.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.</p>
                            <a href="#" className="btn">read more</a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="450">
                        <div className="image">
                            <img src={blog3} alt=""/>
                                <div className="icons">
                                    <a href="#"> <i className="fas fa-calendar"/> 21st may, 2022 </a>
                                    <a href="#"> <i className="fas fa-user"/> by admin </a>
                                </div>
                        </div>
                        <div className="content">
                            <h3>blog title goes here.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.</p>
                            <a href="#" className="btn">read more</a>
                        </div>
                    </div>

                </div>

            </section>
            </>
    );
};

export default Blogs;
