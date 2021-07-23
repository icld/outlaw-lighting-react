// import { Link } from "react-router-dom";
import React from 'react';

// const contactInfo = [{}];

const Contact = () => {
  return (
    <div className='  bg-white h-full w-full relative'>
      <div className='h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 w-11/12  m-auto bg-white pt-14 pb-14'>
        <div className=' w-full'>
          <iframe
            title='google maps'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.243464350084!2d-122.70595038445025!3d45.545427679101934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549509b5b2cbbdbd%3A0xcc00ce5014ee7723!2sOutlaw%20Lighting!5e0!3m2!1sen!2sus!4v1623266014495!5m2!1sen!2sus'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            className='w-full'
          ></iframe>
        </div>
        <div className='w-full h-full text-3xl font-normal border-gray-50 border flex flex-col justify-center '>
          <h2 className='text-4xl  font-bold mb-8'>Reach Out to Outlaw</h2>
          <div className=' mb-4 '>
            Phone
            <br />
            <a
              href='tel:+15038884182'
              className='hover:text-purple-800  text-gray-400 '
            >
              503-888-4182{' '}
            </a>
          </div>
          <div className=' mb-4 '>
            Email <br />
            <a
              href='mailto:sales@outlawlighting.com'
              className='hover:text-purple-800 text-gray-400 '
            >
              sales@outlawlighting.com
            </a>
          </div>
          <div classname='border-gray-50 mb-4 '>
            <div className='font-normal '>Portland Offices</div>
            <div className=' text-gray-400'>
              <div>3342 Nw 26th Ave Suite 14,</div>
              <div>Portland, OR 97219</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
