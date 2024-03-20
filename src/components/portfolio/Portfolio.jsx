import React from 'react';
import "./portfolio.css";
import { Data } from './Data';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


function Portfolio() {
  return (
    <section className="portfolio container " id='portfolio'>
         <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">See my projects</span>
        <Swiper className="portfolio__container">
          {Data.map(({id, image, title,description,demo_link,source_code}) => {
            return(
              <SwiperSlide className="project__card" key={id}>
                <img src={image} alt=""className='project__img' />
                <h3 className="project__name">{title}</h3>
                <p className="project__description">{description}</p>
                <div>
                  <button class="btn btn-active "><a href={source_code}>Source Code</a></button>
                  <button class="btn btn-active "><a href={demo_link}>Live Demo</a></button>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
    </section>
  )
}

export default Portfolio
