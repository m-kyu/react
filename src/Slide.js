import {HashRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


function Slide() {
  let navigate = useNavigate();
 
  function aa(e){
    console.log(e)
    navigate('/work', { replace: true })
  }


  return (
    <div className="App">
          <Swiper 
          spaceBetween={50} 
          slidesPerView={1} 
          >
            
              <SwiperSlide onClick={aa}>
                01
              </SwiperSlide>
              <SwiperSlide onClick={aa}>02</SwiperSlide>
              <SwiperSlide >03</SwiperSlide>
            
          </Swiper>
      </div>
    
  );
}

export default Slide;