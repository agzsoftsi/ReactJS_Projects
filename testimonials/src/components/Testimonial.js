import React from 'react';
import './Testimonial.css';

function Testimonial(props) {
  return (
    <div className='testimonial-container'>
       <img src={require('../pictures/testimonial-'+ props.id +'.png')} className='testimonial-container-image' alt="Alumni pic"/>
       <div className='testimonial-container-info'>
          <p className='testimonial-info-p'>
            <span className='testimonial-info-name'>{props.name} </span>in
            <span className='testimonial-info-city'> {props.city}</span>
          </p>
          <p className='testimonial-info-p'>
            <span className='testimonial-info-role'>{props.role}</span> at
            <span className='testimonial-info-company'> {props.company}</span>
          </p>
          <p className='testimonial-info-experience'><q>{props.testimonial}</q></p>
       </div>
    </div>
  )
}

export default Testimonial;