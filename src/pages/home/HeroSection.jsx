import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import heroImg from "../../assets/img/hero-img.jpg";
import "./home.css";
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';


const HeroSection = () => {
	return (
		<div className="container">			
            <Swiper className="hero-section"
                modules={[Autoplay, Navigation, EffectFade]}  // Register the modules
                effect="Flip"
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}                
                navigation={false}               
            >
                <SwiperSlide className="swiper-slide">                                        
                    <div className="slide-box">                      
                      <div className='md:block lg:flex items-center gap-5'>
                        <div className='slide-text lg:w-6/12 md:w-full'>
                            <h2 className="xl:text-60 lg:text-44 md:text-36 leading-110 font-semibold mb-30">Everything you need for scaling up your business.</h2>
                            <p className='text-24 mb-30'>Get teams to implement revenue growth systems, skills, and data management.</p>
                            <button className='btn btn-primary mb-4 px-44'>Get Free Consult</button>
                            <p className='text-14 text-gray-600 font-semibold italic'>No tricks, just friendly advice.</p>
                        </div>
                        <div className='slide-img lg:w-6/12 md:w-full'>
                            <img src={heroImg} alt='img'/>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">                                        
                    <div className="slide-box">                      
                      <div className='md:block lg:flex items-center gap-5'>
                        <div className='slide-text lg:w-6/12 md:w-full'>
                            <h2 className="xl:text-60 lg:text-44 md:text-36 leading-110 font-semibold mb-30">Everything one need for scaling up your business.</h2>
                            <p className='text-24 mb-30'>Get teams to implement revenue growth systems, skills, and data management.</p>
                            <button className='btn btn-primary mb-4 px-44 py-20'>Get Free Consult</button>
                            <p className='text-14 text-gray-600 font-semibold italic'>No tricks, just friendly advice.</p>
                        </div>
                        <div className='slide-img lg:w-6/12 md:w-full'>
                            <img src={heroImg} alt='img'/>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
            </Swiper>
		</div>
	);
};

export default HeroSection;
