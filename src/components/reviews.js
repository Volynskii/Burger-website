import React from 'react';
import "aos/dist/aos.css"
import titleImg from '../pictures/title-img.png'
import pic1 from '../pictures/pic-1.png'
import pic2 from '../pictures/pic-2.png'
import pic3 from '../pictures/pic-3.png'


const Reviews = () => {

    return (
        <>
            <section className="reviews" id="reviews">

                <div className="heading">
                    <img src={titleImg} alt=""/>
                        <h3>testimonial</h3>
                </div>

                <div className="box-container">

                    <div className="box" data-aos="fade-up" data-aos-delay="150">
                        <img src={pic1} alt=""/>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui accusamus autem!
                                Veniam exercitationem adipisci in excepturi labore magni voluptatibus?</p>
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="300">
                        <img src={pic2} alt=""/>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui accusamus autem!
                                Veniam exercitationem adipisci in excepturi labore magni voluptatibus?</p>
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                    </div>

                    <div className="box" data-aos="fade-up" data-aos-delay="450">
                        <img src={pic3} alt=""/>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui accusamus autem!
                                Veniam exercitationem adipisci in excepturi labore magni voluptatibus?</p>
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                    </div>

                </div>

            </section>
            </>
    );
};

export default Reviews;
