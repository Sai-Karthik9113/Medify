import React from "react";
import { Typography } from "@mui/material";
import docImage from '../../Assets/doctor.png';
import healthyFoodImage from '../../Assets/vegetables.png';
import styles from './News.module.css';

const BlogsAndNews = () => {
    const cardData = [
        {
            mainImg: healthyFoodImage,
            type: 'Medical',
            date: `March 31, 2022`,
            summary: '6 Tips To Protect Your Mental Health When You’re Sick',
            image: docImage,
            name: 'Rebecca Lee'
        },
        {
            mainImg: healthyFoodImage,
            type: 'Medical',
            date: `March 31, 2022`,
            summary: '6 Tips To Protect Your Mental Health When You’re Sick',
            image: docImage,
            name: 'Rebecca Lee'
        },
        {
            mainImg: healthyFoodImage,
            type: 'Medical',
            date: `March 31, 2022`,
            summary: '6 Tips To Protect Your Mental Health When You’re Sick',
            image: docImage,
            name: 'Rebecca Lee'
        }
    ]
    return (
        <div className={styles.newsContainer}>
            <div className={styles.qaHeading}>
                <Typography variant="p" fontSize='16px' fontWeight='600' color="var(--aqua-blue)" marginBottom='2px'>
                    Blog & News
                </Typography>
                <Typography variant="h3" fontFamily='var(--base-font-family)' fontWeight='600' color="var(--navy-blue)" sx={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
                    Read Our Latest News
                </Typography>
            </div>
            <div className={styles.cardContainer}>
                {
                    cardData.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardImage}>
                                <img src={card.mainImg} alt="Health Info" style={{ width: '100%', borderRadius: '0.5rem', boxShadow: '0 4px 2px rgba(0, 0, 0, 0.1)' }} />
                            </div>
                            <div className={styles.cardDetails}>
                                <div className={styles.secondaryInfo}>
                                    <div>{card.type}</div>
                                    <div className={styles.divider}></div>
                                    <div>{card.date}</div>
                                </div>
                                <div className={styles.summary}>
                                    <Typography className={styles.cardSummary} color='var(--navy-blue)' fontFamily='var(--base-font-family)' fontWeight='500' textAlign='left'>
                                        {card.summary}
                                    </Typography>
                                </div>
                                <div className={styles.doctorProfile}>
                                    <img src={card.image} alt={card.name} />
                                    <Typography className={styles.doctorName} color='var(--navy-blue)' fontFamily='var(--base-font-family)' fontWeight='500'>
                                        {card.name}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default BlogsAndNews;
