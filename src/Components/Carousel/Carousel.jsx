import React, { useEffect } from 'react';
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './Carousel.module.css';
import { Typography } from '@mui/material';


const Controls = ({ data }) => {
  let swiper = useSwiper();
  useEffect(() => {
    // swiper.slideTo(1);
  }, [data, swiper]);

  return <></>;
};
  
  const SwiperComponent = ({ dataCards, slidesPerView, spaceBetween, slidesPerGroup, breakpointsConfig, initialSlide, centeredSlides, type }) => {

    return (
      <div className={type !== 'specialist' ? styles.wrapper : styles.spWrapper}>
        {
          type === 'specialist' && (
            <div style={{ position: 'absolute', top: '7.5%', left: 0, right: 0 }}>
              <Typography
                variant="h3"
                fontFamily='var(--base-font-family)'
                fontWeight='600'
                color="var(--navy-blue)"
                sx={{ fontSize: 'clamp(30px, 4vw, 48px)' }}
              >
                Our Medical Specialist
              </Typography>
            </div>
          )
        }
        <Swiper
          slidesPerView={slidesPerView}
          modules={[Pagination, Autoplay]}
          spaceBetween={spaceBetween}
          slidesPerGroup={slidesPerGroup}
          breakpoints={breakpointsConfig}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          initialSlide={initialSlide}
          centeredSlides={centeredSlides}
          allowTouchMove={false}
        >
          <Controls data={dataCards} />
          {dataCards.map((card, index) => (
            (type === 'specialist') ? (
              <SwiperSlide key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px', marginRight: '0' }}>
                <div className={styles.containerOverlay}>
                  <div className={styles.imageContainer}>
                    <img src={card.doctorImage} alt={card.name} style={{ width: 'clamp(150px, 2vh, 325px)', height: 'clamp(190px, 2vh, 350px)' }} />
                  </div>
                </div>
                <div className={styles.detailsContainer}>
                  <Typography color='var(--navy-blue)' fontFamily='var(--base-font-family)' fontWeight='400' style={{ fontSize: 'clamp(20px, 2vw, 24px)' }}>
                    {card.name}
                  </Typography>
                  <Typography color='var(--aqua-blue)' fontFamily='var(--base-font-family)' fontWeight='500' style={{ fontSize: 'clamp(14px, 2vw, 17px)' }}>
                    {card.specialisation}  
                  </Typography>
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={index} style={{ width: '30%', paddingBottom: '50px' }}>
                <img src={card} alt={`Card ${index}`} style={{ width: '100%', height: 'auto' }} />
              </SwiperSlide>
            )
          ))}
        </Swiper>
      </div>
    );
  };

export default SwiperComponent;
