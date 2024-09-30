import React from "react";
import {  Typography } from "@mui/material";
import weCare from '../../Assets/OurFamilyIcons/we-care.png';
import hospital from '../../Assets/OurFamilyIcons/hospital.png';
import hospitalBuilding from '../../Assets/OurFamilyIcons/hospital-building.png';
import healthWorker from '../../Assets/OurFamilyIcons/health-worker.png';
import styles from './OurCustomers.module.css';

const information = [
    {
        category: 'Happy Patients',
        count: '5000+',
        icon: weCare,
        colorTheme: '#EBF7FF',

    },
    {
        category: 'Laboratories',
        count: '1000+',
        icon: hospital,
        colorTheme: '#FFF2F0'
    },
    {
        category: 'Hospitals',
        count: '200+',
        icon: hospitalBuilding,
        colorTheme: '#FFF7E6'
    },
    {
        category: 'Expert Doctors',
        count: '700+',
        icon: healthWorker,
        colorTheme: '#EBFAF1'
    },
    
];

const Customers = () => {
    const groupedInformation = [];

    for (let i = 0; i < information.length; i += 2) {
      groupedInformation.push(information.slice(i, i + 2));
    }
 
    return (
        <div className={styles.newContainer}>
            <div className={styles.serviceDescription}>
                <Typography variant="p" fontWeight='600' color="var(--aqua-blue)" marginBottom='5px' sx={{ fontSize: 'clamp(12px, 1vw, 17px)' }}>
                    CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                </Typography>
                <Typography variant="h3" fontFamily='var(--base-font-family)' marginBottom='10px' fontWeight='600' color="var(--navy-blue)" sx={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
                    Our Families
                </Typography>
                <Typography variant="p" color="var(--dusty-blue)" sx={{ fontSize: 'clamp(12px, 1vw, 16px)' }}>
                    We will work with you to develop individualised care plans, including management of chronic diseases. 
                    If we cannot assist, we can provide referrals or advice about the type of practitioner you require. 
                    We treat all enquiries sensitively and in the strictest confidence.
                </Typography>
            </div>
            <div className={styles.cardsContainer}>
                {
                    groupedInformation.map((group, index) => (
                        <div className={styles[`infoContainer${index}`]} key={index}>
                            {
                                group.map((item, index) => (
                                    <div className={styles.infoItem} id={`info${index}`} key={index}>
                                        <div className={styles.imgContainer} style={{ background: item.colorTheme, width: 'fit-content', borderRadius: '50%', padding: 'clamp(10px, 2vw, 20px)' }}>
                                            <img src={item.icon} alt={item.category} style={{ width: 'clamp(25px, 5vh, 50px)', height: 'clamp(25px, 5vh, 50px)' }} />
                                        </div>
                                        <div className={styles.infoDetails}>
                                        <Typography variant="h3" fontFamily='var(--base-font-family)' fontWeight='600' color="var(--navy-blue)" sx={{ fontSize: 'clamp(24px, 3vw, 48px)', paddingTop: 'clamp(10px, 1vh, 14px)' }}>
                                            {item.count}
                                        </Typography>
                                        <Typography variant="p" fontWeight='500' color="var(--dusty-blue)" marginBottom='2px' sx={{ fontSize: 'clamp(12px, 1vw, 18px)' }}>
                                            {item.category}
                                        </Typography>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Customers;