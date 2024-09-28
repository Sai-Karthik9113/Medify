import React, { useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Typography } from "@mui/material";
import { ReactComponent as CurvedArrow } from '../../Assets/arrow.svg';
import { ReactComponent as Sample } from '../../Assets/Sample.svg';
import Button from "../Button/Button";
import styles from './AdBanner.module.css';

const AdForDownloadOurApp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

    // useEffect(() => {
    //   const handleResize = () => {
    //     setIsSmallScreen(window.innerWidth < 500);
    //   };

    //   window.addEventListener('resize', handleResize);

    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);

    const handleChange = (event) => {
        const inputValue = event.target.value;

        if (/^\d{0,10}$/.test(inputValue)) {
          setPhoneNumber(inputValue);
        }
    }
    return (
        <div className={styles.adContainer}>
            <div className={styles.mobileImages}>
                <div className={styles.mobileOneContainer}>
                    <Sample />
                </div>
                {/* <div className={styles.mobileTwoContainer}>
                    <div className={styles.hardwareTwo}>
                        <img src={require('../../Assets/Mobile1.png')} alt="Mobile Hardware" />
                    </div>
                    <div className={styles.softwareTwo}>
                        <img src={require('../../Assets/UI2.png')} alt="Mobile Software" />
                    </div>
                </div> */}
            </div>
            <div className={styles.downloadAppSection}>
                <div className={styles.floatingArrow}>
                    <CurvedArrow style={{ width: 'clamp(30px, 5vw, 49px)', height: 'clamp(55.5px, 5vw, 111px)' }} />
                </div>
                <Typography 
                    style={{ 
                        fontFamily: 'var(--base-font-family)', 
                        fontSize: 'clamp(24px, 4vw, 48px)', 
                        fontWeight: '600',
                        color: 'var(--navy-blue)'
                    }}
                >
                    Download the <span style={{ color: 'var(--aqua-blue)' }}>Medify</span> App
                </Typography>
                <Typography
                    style={{ 
                        fontFamily: 'var(--lato-font-family)',
                        fontSize: 'clamp(14px, 4vw, 16px)',
                        fontWeight: '700',
                        color: 'var(--charcoal-gray)',
                        margin: '20px 0'
                    }}
                >
                    Get the link to download the app
                </Typography>
                <div className={styles.inputSection}>
                    <div className={styles.inputContainer}>
                        <span className={styles.prefix}>+91</span>
                        <input 
                            type="text" 
                            className={styles.phoneInput} 
                            placeholder="Enter phone number" 
                            onChange={handleChange} 
                            value={phoneNumber} 
                            width='fitContent' 
                            maxLength='11' 
                            style={{ backgroundColor: 'transparent' }} 
                        />
                    </div>
                    <div>
                        <Button style={{ height: '47px' }}>
                            Send SMS
                        </Button>
                    </div>
                </div>
                <div className={styles.downloadButton}>
                    <Button 
                        style={{ 
                            width: 'clamp(175px, 5vw, 300px)', 
                            height: 'clamp(60px, 5vw, 69px)', 
                            backgroundColor: '#000000', color: '#ffffff' 
                        }}
                    >
                        <FaGooglePlay size={30} style={{ marginRight: '0.25rem' }} />
                        Google Play
                    </Button>
                    <Button 
                        style={{ 
                            width: 'clamp(175px, 5vw, 300px)', 
                            height: 'clamp(60px, 5vw, 69px)', 
                            backgroundColor: '#000000', color: '#ffffff' 
                        }}
                    >
                        <FaApple size={30} style={{ marginRight: '0.25rem' }} />
                        Apple Store
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default AdForDownloadOurApp;