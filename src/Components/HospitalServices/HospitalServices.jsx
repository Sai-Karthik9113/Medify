import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { ReactComponent as Call } from '../../Assets/ServicesImage/Vector.svg';
import { ReactComponent as Tick } from '../../Assets/ServicesImage/Check.svg';
import styles from './HospitalServices.module.css';

const Services = () => {
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 1024);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className={styles.servicesContainer}>
            <div className={styles.imagesSection}>
                <div className={styles.imagesContainer}>

                        {
                            !smallScreen ? (
                                <div className={styles.callIcon}>
                                    <div style={{ color: 'var(--navy-blue)', fontFamily: 'var(--inter-font-family)', fontWeight: '700', fontSize: 'clamp(12px, 2vw, 16px)' }}>
                                        <Call /> Free Consultation
                                    </div>
                                    <div style={{ color: 'var(--dusty-blue)', fontFamily: 'var(--inter-font-family)', fontWeight: '500', fontSize: 'clamp(11px, 2vw, 15px)' }}>
                                        Consultation with the best
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.callIcon}>
                                    <div style={{ color: 'var(--navy-blue)', fontFamily: 'var(--inter-font-family)', fontWeight: '700', fontSize: 'clamp(12px, 2vw, 16px)' }}>
                                        <Call />
                                    </div>
                                </div>
                            )
                        }
                    <img src={require('../../Assets/ServicesImage/image-01.png')} alt="Our Patients" />
                    <div className={styles.overlayImage}>
                        <img src={require('../../Assets/ServicesImage/image-02.png')} alt="Our Patients" />
                    </div>
                </div>
            </div>
            <div className={styles.servicesDescription}>
                <Typography variant="p" fontWeight='600' color="var(--aqua-blue)" marginBottom='5px' sx={{ fontSize: 'clamp(12px, 2vw, 16px)' }}>
                    HELPING PATIENTS FROM AROUND THE GLOBE!!
                </Typography>
                <Typography variant="h3" fontFamily='var(--base-font-family)' fontWeight='600' color="var(--navy-blue)" sx={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
                    Patient <span color="var(--aqua-blue)">Caring</span>
                </Typography>
                <Typography variant="p" fontFamily='var(--inter-font-family)' color="var(--dusty-blue)" fontWeight='500' margin='25px 0' sx={{ fontSize: 'clamp(12px, 2vw, 17px)' }}>
                    Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. 
                    We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                </Typography>
                <div className={styles.perksList}>
                    <div>
                        <Tick />
                        <Typography color="var(--navy-blue)" sx={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: '500' }} >
                            Stay Updated About Your Health
                        </Typography>
                    </div>
                    <div>
                    <Tick />
                        <Typography color="var(--navy-blue)" fontWeight='500' sx={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: '500'  }} >
                            Check Your Results Online
                        </Typography>
                    </div>
                    <div>
                    <Tick />
                        <Typography color="var(--navy-blue)" fontWeight='500' sx={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: '500'  }} >
                            Manage Your Appointments
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;