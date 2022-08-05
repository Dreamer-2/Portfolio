import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [
  {
    avatar:AVTR1,
    name:'Surunga Medicine Center',
    review:'Thank You .This is a unified suite of software solutions designed for good health, physical therapy and medical healthcare practices. Features include practice management, health records, medical billing, patient engagement tools, telemedicine functionality, patient charts, reputation management, financial analytics and business intelligence reporting that all work together to automate medical practice workflows.'
  },
  {
    avatar:AVTR2,
    name:'Nidi Higher Secondary School',
    review:'Thank you for complete solution for all types of schools management tools.It is being very needy for us .Services include registrations, admissions, fee structure, and bus routes. It also offers modules for examinations, assessments, inventory, SMS Server, e-records, educator remarks, phone register, and transportation management.'
  },
  {
    avatar:AVTR3,
    name:'Weather-Update',
    review:'Thank you for building this Website . This is really helping to make people engage in weather Updates sothat they can go for their daily works accordingly - National Innovation Center for Science and Technology'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Reviews from Clients</h5>
      <h2>Now it will be my fate to serve you </h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween = {40}
        SlidesPerView ={3}
        pagination = {{clickable: true}}>
         {
          data.map(({avatar, name,review},index)=>{
            return(
              <SwiperSlide key ={index} className ='testimonial'>
              <div className="client__avatar">
                <img src={avatar}  />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
              </SwiperSlide>
            )
          })
         }
      </Swiper>
    </section>
  );
};

export default Testimonials