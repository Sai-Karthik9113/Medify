import React from "react";
import { Typography } from "@mui/material";
import Button from "../Button/Button";
import styles from './Hero.module.css';

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
        </div>
    )
};

export default HeroSection;