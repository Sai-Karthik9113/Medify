import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ReactComponent as Check } from '../../Assets/MedicalCenterImages/Check.svg';
import Cards from "../BookingCards/BookingCards";
import axios from "axios";
import { config } from "../../App";
import styles from './HospitalAccordion.module.css';

const HospitalCardWithAccordion = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [hospitalData, setHospitalData] = useState([]);

    const hospitalLocation = {
        currentCity: queryParams.get('city'),
        currentState: queryParams.get('state')
    }

    console.log(hospitalLocation.currentCity, hospitalLocation.currentState);
    
    useEffect(() => {
        const fetchHospitalData = async() => {
            try {
                const res = await axios.get(`${config.endpoint}/data?state=${hospitalLocation.currentState}&city=${hospitalLocation.currentCity}`);
                setHospitalData(res.data);
                console.log(res.data);
                
            } catch (error) {
                console.error("Error: ", error);
            }
        }
        
        fetchHospitalData();

    }, [hospitalLocation.currentCity, hospitalLocation.currentState])



    return (
        <div className={styles.cardSection}>
            <div className={styles.cardsAndCount}>
                <div className={styles.textContainer}>
                    <Typography 
                        variant='h5' 
                        style={{ 
                            fontFamily: 'var(--base-font-family)', 
                            fontWeight: '500', 
                            fontSize: 'clamp(16px, 2vw, 24px)' 
                        }}
                    >
                        15 medical centers available in Alaska
                    </Typography>
                    <Typography 
                        variant='p' 
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        style={{ 
                            fontFamily: 'var(--base-font-family)', 
                            fontWeight: '400', 
                            fontSize: 'clamp(10px, 1vw, 16px)', 
                            color: 'var(--chinese-silver)' 
                        }}
                    >
                        <Check style={{ width: 'clamp(12px, 2vw, 25px)', height: 'clamp(10px, 2vw, 22px)', marginRight: '0.5rem' }} /> Book appointments with minimum wait-time & verified doctor details
                    </Typography>
                </div>
                <div className={styles.accordionCardContainer}>
                    <Cards cardData={hospitalData} modalType='Hospitals Available' />
                </div>
            </div>
            <div className={styles.floatingAd}>
                <img src={require('../../Assets/MedicalCenterImages/advertisement.png')} alt="Special Offer" />
            </div>
        </div>
    )
};

export default HospitalCardWithAccordion;