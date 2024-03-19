import React from 'react';
import "./portfolio.css";
import { Data } from './Data';



function Portfolio() {
  return (
    <section className="portfolio container " id='portfolio'>
         <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">See my projects</span>
        <div className="portfolio__container">
          {Data.map(({id, image, title,description}) => {
            return(
              <div className="portfolio__card" key={id}>
                <img src={image} alt=""className='portfolio__img' />
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default Portfolio
