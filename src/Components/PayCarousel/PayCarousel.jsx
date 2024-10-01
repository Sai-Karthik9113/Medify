import React, { useEffect } from 'react';
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import couponOne from '../../Assets/PayCardImage/Coupon1.png';  // Replace with the correct path
import couponTwo from '../../Assets/PayCardImage/Coupon2.png';
import styles from './PayCarousel.module.css';

const cards = [couponOne, couponTwo, couponOne];
const expandedCards = Array(3).fill(cards).flat();

const Controls = ({ data }) => {
    let swiper = useSwiper();
    useEffect(() => {
      swiper.slideTo(1);
    }, [data, swiper]);
  
    return <></>;
  };
  
  const SwiperComponent = () => {

    return (
      <div className={styles.wrapper}>
        <Swiper
          initialSlide={1} // Start from the second slide
          modules={[Pagination, Autoplay]} // Register Pagination and Autoplay modules
          spaceBetween={16}
          allowTouchMove={false} // Prevent manual sliding
          pagination={{ clickable: true}} // Dotted pagination for navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3-second delay
          loop={true} // Loop through slides infinitely
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            480: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1440: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 30,
            },
          }}
        >
          <Controls data={expandedCards} />
          {expandedCards.map((card, index) => (
            <SwiperSlide key={index} style={{ width: '30%', paddingBottom: '50px' }}>
              <img src={card} alt={`Card ${index}`} style={{ width: '100%', height: 'auto' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

export default SwiperComponent;
