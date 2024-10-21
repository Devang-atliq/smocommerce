import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules';

export const TestimonialSilder = () => {
  return (
    <div className='bg-branddark-500 py-60'>       
        <div className="container">	
            <h2 className='text-white text-14 mb-6'>WHAT DO WE SERVE?</h2>
            <h3 className='text-primary-50 text-42 font-semibold mb-12'>AtliQ's consultation shifts mindsets.</h3>
            <p className='text-white text-16 mb-0'>Steal away our ideas even if we don’t work together.</p>		
            <Swiper className="testimonial my-46"
                modules={[Navigation, EffectFade]}  // Register the modules
                effect="Flip"
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides={false}                               
                navigation={true}
                loop={false}               
            >
                <SwiperSlide className="swiper-slide bg-branddark-700 px-34 pt-34 pb-24 rounded">                                        
                    <div className="slide-box">  
                        <h2 className="text-white text-20 leading-110 font-semibold mb-10">You need massive budgets to implement AI.</h2>
                        <p className='text-gray-300 text-16 font-medium mb-30'>Reality: While it's a common belief that only large enterprises can afford AI, many scalable AI solutions are now available that serve the needs and budgets of small and medium-sized businesses, making it accessible without breaking the bank.</p> 
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-branddark-700 px-34 pt-34 pb-24 rounded">                                        
                    <div className="slide-box">  
                        <h2 className="text-white text-20 leading-110 font-semibold mb-10">You need massive budgets to implement AI.</h2>
                        <p className='text-gray-300 text-16 font-medium mb-30'>Reality: While it's a common belief that only large enterprises can afford AI, many scalable AI solutions are now available that serve the needs and budgets of small and medium-sized businesses, making it accessible without breaking the bank.</p> 
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-branddark-700 px-34 pt-34 pb-24 rounded">                                        
                    <div className="slide-box">  
                        <h2 className="text-white text-20 leading-110 font-semibold mb-10">You need massive budgets to implement AI.</h2>
                        <p className='text-gray-300 text-16 font-medium mb-30'>Reality: While it's a common belief that only large enterprises can afford AI, many scalable AI solutions are now available that serve the needs and budgets of small and medium-sized businesses, making it accessible without breaking the bank.</p> 
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-branddark-700 px-34 pt-34 pb-24 rounded">                                        
                    <div className="slide-box">  
                        <h2 className="text-white text-20 leading-110 font-semibold mb-10">You need massive budgets to implement AI.</h2>
                        <p className='text-gray-300 text-16 font-medium mb-30'>Reality: While it's a common belief that only large enterprises can afford AI, many scalable AI solutions are now available that serve the needs and budgets of small and medium-sized businesses, making it accessible without breaking the bank.</p> 
                    </div>
                </SwiperSlide>
                
            </Swiper>
		</div>
    </div>
  )
}
