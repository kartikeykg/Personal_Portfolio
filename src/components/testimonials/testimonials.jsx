import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


//dynamically generating testimonial using array object
const data = [
{
  avatar: AVTR1,
  name: 'Riya Chaudhari',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos rem placeat in quod quas porro hic odit, dolor illum voluptas at fugit fuga quae dolores eius perspiciatis quis nulla"
},
{
  avatar: AVTR2,
  name: 'Saleem Khan',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos rem placeat in quod quas porro hic odit, dolor illum voluptas at fugit fuga quae dolores eius perspiciatis quis nulla"
},
{
  avatar: AVTR3,
  name: 'Shivansh Gautam',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos rem placeat in quod quas porro hic odit, dolor illum voluptas at fugit fuga quae dolores eius perspiciatis quis nulla"
},
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Visitors</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review}, index) => {
            return(
              <SwiperSlide className="testimonial">
          <div className="visitor__avatar">
            <img src={avatar} />
          </div>
          <h5 className='visitor__name'>{name}</h5>
            <small className='visitor__review'>
             {review}
            </small>
        </SwiperSlide>
            )
          })
        }
        {/* testimonial generated dynamically */}
      </Swiper>
    </section>
  )
}

export default testimonials