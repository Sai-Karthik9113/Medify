import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import AdForDownloadOurApp from "../../Components/AdBanner/AdBanner";
import Footer from "../../Components/Footer/Footer";
import { ReactComponent as HospitalBuilding } from '../../Assets/MedicalCenterImages/hospital.svg';
import { ReactComponent as BlueCheck } from '../../Assets/MedicalCenterImages/blue-check.svg';
import { ReactComponent as ThumbsUp } from '../../Assets/MedicalCenterImages/Vector.svg';
import { Typography } from "@mui/material";
import styles from '../../Components/BookingCards/BookingCards.module.css';

const MyBookings = () => {
    const [savedBookings, setSavedBookings] = useState([]);

    useEffect(() => {
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        setSavedBookings(bookings);
    }, []);

    return (
        <div className={styles.container} style={{ background: 'var(--primary-color)' }}>
            <NavBar />
            <div className={styles.pageName} style={{ background: 'var(--ocean-wave-gradient)', borderRadius: '1rem' }}>
                <div className={styles.pageNameContainer}>
                    <Typography fontFamily='var(--ubuntu-font-family)' fontWeight='700' color='#ffffff' style={{ fontSize: 'clamp(20px, 5vw, 40px)' }}>
                        My Bookings
                    </Typography>
                </div>
            </div>
            {!savedBookings ? (
                <div className={styles.bookingsContainer}>
                    <div className={styles.bookingDetails}>
                        {savedBookings.map((item) => (
                            <div key={item.id} className={styles.accordionItem}> {/* Use a unique key */}
                                <div className={styles.accordionOverlay}>
                                    <div className={styles.iconSection}>
                                        <div className={styles.imageSection}>
                                            <HospitalBuilding className={styles.hospitalImage} alt="Hospital" />
                                            <div style={{ position: 'absolute', bottom: '15%', right: '-5%', zIndex: '1' }}>
                                                <BlueCheck alt="Verified" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.detailsContainer}>
                                        <Typography
                                            variant="h6"
                                            className={styles.hospitalName} // Use a CSS class instead of inline styles
                                        >
                                            {item.hospitalName}
                                        </Typography>
                                        <div className={styles.addressContainer}>
                                            <div className={styles.address}>
                                                <Typography 
                                                    variant="body2"
                                                    className={styles.addressText} // Use a CSS class instead of inline styles
                                                >
                                                    {`${item.city}, ${item.state} ${item.zipCode}`}
                                                </Typography>
                                                <Typography 
                                                    variant="body2"
                                                    className={styles.addressText} // Use a CSS class instead of inline styles
                                                >
                                                    {item.address}
                                                </Typography>
                                            </div>
                                            <div className={styles.consulationFee}>
                                                <div className={styles.priceContainer} style={{ display: 'flex', gap: '0.5rem' }}>
                                                    <div className={styles.freeText}>
                                                        FREE
                                                    </div>
                                                    <div className={styles.originalPrice}>
                                                        <s>₹500</s>
                                                    </div>
                                                </div>
                                                <div className={styles.consultationDescription}>
                                                    Consultation fee at clinic
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.ratingSection}>
                                            <div className={styles.ratingContainer}>
                                                <ThumbsUp /> {item.rating}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.timeAndDateSlots}>
                                        <div className={styles.slotsContainer}>
                                            <div className={styles.timeContainer}>
                                                {item.time}
                                            </div>
                                            <div className={styles.dateContainer}>
                                                {item.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.floatingAdMyBoookings}>
                        <img src={require('../../Assets/MedicalCenterImages/advertisement.png')} alt="Special Offer" style={{ paddingTop: '0%' }} />
                    </div>
                </div>
            ) : (
                <div style={{ color: 'var(--midnight-blue)', background: 'var(--secondary-text-color)', fontFamily: 'var(--base-font-family)', fontSize: 'clamp(25px, 5vw, 50px)', fontWeight: '500', padding: '75px 20px' }}>
                    No Bookings Found
                </div>
            )}
            
            <AdForDownloadOurApp />
            <Footer />
        </div>
    )
};

export default MyBookings;
