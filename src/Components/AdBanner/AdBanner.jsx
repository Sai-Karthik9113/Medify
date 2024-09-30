import React, { useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Typography } from "@mui/material";
// import { ReactComponent as CurvedArrow } from '../../Assets/arrow.svg';
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
            <div className={styles.mobileContainer}>
                <div className={styles.device}>
                    <Sample />
                </div>
            </div>
            <div className={styles.downloadAppSection} style={{ width: '100%' }}>
                <div className={styles.downloadContainer}>
                    <div className={styles.floatingArrow}>
                        <img 
                            src={require('../../Assets/Vector.png')} 
                            alt="Arrow" 
                            style={{
                                width: 'clamp(24px, 5vw, 49px)',
                                height: 'auto' // Keep height proportional to the width
                            }}
                        />
                    </div>
                    <Typography 
                        style={{ 
                            fontFamily: 'var(--base-font-family)', 
                            fontSize: 'clamp(22px, 4vw, 48px)', 
                            fontWeight: '600',
                            color: 'var(--navy-blue)'
                        }}
                    >
                        Download the <span style={{ color: 'var(--aqua-blue)' }}>Medify</span> App
                    </Typography>
                    <Typography
                        sx={{ 
                            fontFamily: 'var(--lato-font-family)',
                            fontSize: 'clamp(14px, 4vw, 16px)',
                            fontWeight: '700',
                            color: 'var(--charcoal-gray)',
                            margin: {
                                lg: '20px 0',
                                xs: '10px 0',
                            }
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
                            <Button className={styles.sendButton} style={{ height: '47px' }}>
                                Send SMS
                            </Button>
                        </div>
                    </div>
                    <div className={styles.downloadButton}>
                        <Button 
                            style={{ 
                                width: 'clamp(175px, 2vw, 300px)', 
                                height: 'clamp(60px, 2vw, 69px)', 
                                backgroundColor: '#000000', color: '#ffffff' 
                            }}
                        >
                            <FaGooglePlay 
                                size={24} 
                                style={{ 
                                    marginRight: '0.25rem' 
                                }} 
                            />
                            Google Play
                        </Button>
                        <Button 
                            style={{ 
                                width: 'clamp(175px, 5vw, 300px)', 
                                height: 'clamp(60px, 5vw, 69px)', 
                                backgroundColor: '#000000', color: '#ffffff' 
                            }}
                        >
                            <FaApple 
                                size={24} 
                                style={{ 
                                    marginRight: '0.25rem' 
                                }} 
                            />
                            Apple Store
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdForDownloadOurApp;