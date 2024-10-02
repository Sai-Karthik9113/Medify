import React from 'react';
import SwiperComponent from '../Carousel';
import couponOne from '../../../Assets/PayCardImage/Coupon1.png';
import couponTwo from '../../../Assets/PayCardImage/Coupon2.png';

const paymentMethods = [couponOne, couponTwo, couponOne];

const payBreakpointsConfig = {
  320: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 25,
  },
  1440: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
  },
};

const expandedCards = Array(3).fill(paymentMethods).flat();

const PayCarousel = () => (

    
  <SwiperComponent
    dataCards={expandedCards}
    slidesPerView={3}
    spaceBetween={30}
    slidesPerGroup={3}
    breakpointsConfig={payBreakpointsConfig}
    initialSlide={4}
    centeredSlides={false}
    type='pay'
  />
);

export default PayCarousel;