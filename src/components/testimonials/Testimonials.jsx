import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Becky Nnenda',
    review: 'CtrlBugs exceeded our expectations when it came to UI/UX design for our web and mobile app projects. Their teams creative insights and attention to detail transformed our concepts into user-friendly visually stunning interfaces. The design they delivered not only enhanced the user experience but also made our products stand out in the market.'
  },
  {
    avatar: AVTR2,
    name: 'Carlos Ali',
    review: 'We turned to CtrlBugs for our web development needs, and they delivered excellence. Their development team took our vision and turned it into a fully functional, responsive website that is not only aesthetically pleasing but also optimized for performance. CtrlBugs is our go-to partner for web development projects.'
  },
  {
    avatar: AVTR3,
    name: 'Samuel Nardy',
    review: 'CtrlBugs played a pivotal role in bringing our mobile app to life. Their mobile app development expertise and dedication to delivering a seamless user experience resulted in an app that exceeded our expectations. We were impressed with their commitment to quality, and its evident in the final product. We highly recommend CtrlBugs for mobile app development.'
  },
  {
    avatar: AVTR4,
    name: 'Jefferey Olawale',
    review: 'Managing our websites content has never been easier thanks to CtrlBugs content management solutions. They provided us with a robust CMS that simplified content creation and organization. It allowed us to keep our website fresh and up-to-date with ease. CtrlBugs has truly made content management a breeze for our team.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials