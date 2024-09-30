import React, { useRef, useState } from "react";
import { Typography } from "@mui/material";
import hospital from '../../Assets/Specialisation/drug-store.png';
import stethoscope from '../../Assets/Specialisation/stethoscope.png';
import bloodSample from '../../Assets/Specialisation/blood-sample.png';
import immune from '../../Assets/Specialisation/immune.png';
import heartRate from '../../Assets/Specialisation/heart-rate.png';
import mriScan from '../../Assets/Specialisation/mri-heartrate.png';
import xRay from '../../Assets/Specialisation/xray-bone.png';
import Button from "../Button/Button";
import styles from './Specialisation.module.css';

const Specialisation = () => {
    const [collapse, setCollapse] = useState(true);
    const spContainerRef = useRef(null);

    const categories = [
        {
            name: 'Dentistry',
            icon: hospital
        },
        {
            name: 'Primary Care',
            icon: stethoscope
        },
        {
            name: 'Cardiology',
            icon: heartRate
        },
        {
            name: 'MRI Resonance',
            icon: mriScan
        },
        {
            name: 'Blood Test',
            icon: bloodSample
        },
        {
            name: 'Piscologist',
            icon: immune
        },
        {
            name: 'Laboratory',
            icon: hospital
        },
        {
            name: 'X-Ray',
            icon: xRay
        },
        {
            name: 'Dentistry',
            icon: hospital
        },
        {
            name: 'Primary Care',
            icon: stethoscope
        },
        {
            name: 'Cardiology',
            icon: heartRate
        },
        {
            name: 'MRI Resonance',
            icon: mriScan
        },
        {
            name: 'Blood Test',
            icon: bloodSample
        },
        {
            name: 'Piscologist',
            icon: immune
        },
        {
            name: 'Laboratory',
            icon: hospital
        },
        {
            name: 'X-Ray',
            icon: xRay
        }
    ]

    const cards = collapse ? categories.slice(0, 8) : categories;

    const handleClick = () => {
        if (!collapse) {
            spContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setCollapse(!collapse);
    };


    return (
        <div className={styles.specialisationContainer} ref={spContainerRef}>
            <div className={styles.spHeading}>
                <Typography
                    variant="h3"
                    fontFamily='var(--base-font-family)'
                    fontWeight='600'
                    color="var(--navy-blue)"
                    sx={{ fontSize: 'clamp(30px, 4vw, 48px)' }}
                >
                    Find by specialisation
                </Typography>
            </div>
            <div
                className={styles.spCardsContainer}
            >
                {cards.map((card, index) => (
                    <div key={index} className={styles.spCard}>
                        <div className={styles.spCardIcon}>
                            <img src={card.icon} alt={card.name} style={{ width: 'clamp(40px, 5vw, 70px)', height: 'clamp(40px, 5vw, 70px)' }} />
                        </div>
                        <div className={styles.spCardName}>
                            <Typography fontFamily='var(--base-font-family)' fontWeight='500' color="var(--cadet-blue)">
                                {card.name}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.spButton}>
                <Button onClick={handleClick}>
                    {collapse ? 'View All' : 'Show Less'}
                </Button>
            </div>
        </div>
    );
};

export default Specialisation;