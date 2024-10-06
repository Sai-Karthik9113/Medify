import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from './CarouselLeft.module.css';
import { FaChevronLeft } from "react-icons/fa";

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning)
        })
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            <FaChevronLeft 
                size='24px'
                onClick={() => {
                    if (!isBeginning) swiper.slidePrev();
                }}
                style={{
                    color: isBeginning ? 'var(--sky-blue)' : 'var(--aqua-blue)',
                    cursor: isBeginning ? 'not-allowed' : 'pointer',
                    opacity: isBeginning ? 0.5 : 1,
                    marginBottom: '0px',
                }}
            />
        </div>
    )
};

export default CarouselLeftNavigation;