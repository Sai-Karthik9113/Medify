import React from "react";
import { Typography } from "@mui/material";
import Button from "../Button/Button";
import doctorIcon from '../../Assets/HeroImage/doctor-icon.png';
import hospitals from '../../Assets/Specialisation/drug-store.png';
import hospitalBuilding from '../../Assets/HeroImage/hospital-building.png';
import capsule from '../../Assets/HeroImage/capsule.png';
import ambulance from '../../Assets/HeroImage/ambulance.png';
import FloatingSearchBox from "./FloatingSearch";

import styles from './Hero.module.css';

const data = [
    {
        name: 'Doctors',
        icon: doctorIcon
    },
    {
        name: 'Labs',
        icon: hospitals
    },
    {
        name: 'Hospitals',
        icon: hospitalBuilding
    },
    {
        name: 'Medical Store',
        icon: capsule
    },
    {
        name: 'Ambulance',
        icon: ambulance
    }
];

const HeroSection = () => {

    return (
        <div className={styles.heroContainer}>
            <div className={styles.headLine}>
                <div className={styles.tagline} style={{ color: "var(--midnight-blue)", fontSize: 'clamp(16px, 1vw, 31px)', fontWeight: '500' }}>
                    Skip the travel! Find Online
                    <br/>
                    <span 
                        style={{ color: 'black', 
                        fontSize: 'clamp(30px, 1vw, 56px)', 
                        fontWeight: '700',
                        marginRight: '8px'
                        }}
                    >
                        Medical
                    </span>
                    <span 
                        style={{ 
                            color: 'var(--aqua-blue)', 
                            fontSize: 'clamp(35px, 1vw, 56px)', 
                            fontWeight: '700' 
                        }}
                    >
                        Centers
                    </span>
                </div>
                <Typography 
                    variant='body1' 
                    color="var(--slate-gray)" 
                    sx={{ 
                        fontSize: 'clamp(16px, 1vw, 20px)', 
                        padding: {
                            xs: '10px 8px',
                            sm: '0px'
                        } 
                    }}
                >
                    Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                </Typography>
                <Button style={{ fontSize: 'clamp(12px, 2vh, 16px)', width: 'fit-content' }}>
                    Find Centers
                </Button>
            </div>
            <div className={styles.doctorsImage}>
                <img src={require('../../Assets/HeroImage/doctors.png')} alt="Doctors" style={{ width:'100%' }} />
            </div>
            <FloatingSearchBox containerData={data} />
        </div>
    )
};

export default HeroSection;