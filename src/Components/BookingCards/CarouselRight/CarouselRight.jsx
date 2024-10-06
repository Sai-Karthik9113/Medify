import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from './CarouselRight.module.css';
import { FaChevronRight } from "react-icons/fa";

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsEnd(swiper.isEnd)
        });
    }, [swiper]);

    return (
        <div 
            className={styles.rightNavigation} 
            style={{

            }}
        >
            <FaChevronRight 
                size='24px'
                onClick={() => {
                    if (!isEnd) swiper.slideNext();
                }}
                style={{
                    color: isEnd ? 'var(--sky-blue)' : 'var(--aqua-blue)',
                    cursor: isEnd ? 'not-allowed' : 'pointer',
                    opacity: isEnd ? 0.8 : 1
                }}
            />
        </div>
    )
};

export default CarouselRightNavigation;