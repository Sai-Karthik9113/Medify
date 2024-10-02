import React from 'react';
import SwiperComponent from '../Carousel';
import drHull from '../../../Assets/DoctorsImages/dr-hull.png';
import drKhan from '../../../Assets/DoctorsImages/dr-khan.png';
import drHeena from '../../../Assets/DoctorsImages/dr-heena.png';
import drAnkur from '../../../Assets/DoctorsImages/dr-ankur.png';
import drStevens from '../../../Assets/DoctorsImages/dr-stevens.png';

const specialists = [
  {
    name: 'Dr. Lesley Hull',
    specialisation: 'Medicine',
    doctorImage: drHull,
  },
  {
    name: 'Dr. Ahmad Khan',
    specialisation: 'Neurologist',
    doctorImage: drKhan,
  },
  {
    name: 'Dr. Heena Sachdeva',
    specialisation: 'Orthopadics',
    doctorImage: drHeena,
  },
  {
    name: 'Dr. Ankur Sharma',
    specialisation: 'Medicine',
    doctorImage: drAnkur,
  },
  {
    name: 'Dr. Ahmad Stevens',
    specialisation: 'Neurologist',
    doctorImage: drStevens,
  },
];

const breakpointsConfig = {
  320: {
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    spaceBetween: 20
  },
  380: {
    slidesPerView: 1.75,
    slidesPerGroup: 1,

  },
  480: {
    slidesPerView: 2.25,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3.5,
    spaceBetween: 20,
    slidesPerGroup: 2
  },
  860: {
    slidesPerView: 3.75,
    spaceBetween: 0,
    slidesPerGroup: 2
  },
  1024: {
    slidesPerView: 2.5,
    spaceBetween: 0,
  },
  1200: {
    slidesPerView: 3.25,
    spaceBetween: 10,
  },
  1280: {
    slidesPerView: 3.5,
    spaceBetween: 10,
  },
  1440: {
    slidesPerView: 3.75,
    spaceBetween: 10,
  },
};



const SpecialistCarousel = () => (
        <SwiperComponent
            dataCards={specialists}
            slidesPerGroup={2}
            slidesPerView={3.5}
            spaceBetween={10}
            breakpointsConfig={breakpointsConfig}
            initialSlide={2}
            type='specialist'
            centeredSlides={true}
        />
);

export default SpecialistCarousel;
