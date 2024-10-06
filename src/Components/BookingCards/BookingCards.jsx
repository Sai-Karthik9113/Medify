import React, { useState } from "react";
import { ReactComponent as HospitalBuilding } from '../../Assets/MedicalCenterImages/hospital.svg';
import { ReactComponent as BlueCheck } from '../../Assets/MedicalCenterImages/blue-check.svg';
import { ReactComponent as ThumbsUp } from '../../Assets/MedicalCenterImages/Vector.svg';
import Button from "../Button/Button";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css'
import { uniqueId } from "../../App";
import CarouselLeftNavigation from "./CarouselLeft/CarouselLeft";
import CarouselRightNavigation from "./CarouselRight/CarouselRight";
import styles from './BookingCards.module.css';

const slots = [
    {
        Morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
        Afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM'],
        Evening: ['04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:30 PM', '07:00 PM']
    }
];

const Cards = ({ cardData, modalType }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedDate, setSelectedDate] = useState(0);
    const [selectedSlot, setSelectedSlot] = useState({}); // Initialize selectedSlot state

    const handleSlotSelection = (timeSlot, period) => {
        // Create or get the current date's selected slots
        const currentDateSlots = selectedSlot[selectedDate] || { time: null, period: null };

        // Toggle the selection
        if (currentDateSlots.time === timeSlot && currentDateSlots.period === period) {
            setSelectedSlot(prev => ({
                ...prev,
                [selectedDate]: { time: null, period: null },
            }));
        } else {
            // Select the new slot
            setSelectedSlot(prev => ({
                ...prev,
                [selectedDate]: { time: timeSlot, period },
            }));
        }
    };

    const saveBookingDetails = (bookingDetails) => {
        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        existingBookings.push(bookingDetails);
        localStorage.setItem('bookings', JSON.stringify(existingBookings));
    };

    const handleAccordionToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        setSelectedDate(index); // Set the date when toggling the accordion
    };
    
    const handleBooking = ({ hospitalName, address, city, state, zipCode, rating }) => {
        const currentSlot = selectedSlot[selectedDate];
        if (currentSlot && currentSlot.time && currentSlot.period) {
            const bookingDetails = {
                hospital: hospitalName,
                address: address,
                city: city,
                state: state,
                zipCode: zipCode,
                rating: rating,
                date: dates[selectedDate],
                time: currentSlot.time,
                period: currentSlot.period,
            };
    
            saveBookingDetails(bookingDetails);
    
            // Remove the booked slot from the available slots
            slots[0][currentSlot.period] = slots[0][currentSlot.period].filter(time => time !== currentSlot.time);

            setSelectedSlot({});
            setSelectedDate(0);
    
            // Close the accordion after booking
            setOpenIndex(null);
        }
    };
    
    const getFormattedDate = (date) => {
        const dayOptions = { weekday: 'short', day: '2-digit', month: 'short' };
        return date.toLocaleDateString(undefined, dayOptions);
    };

    const generateDates = () => {
        const today = new Date();
        const dates = [];

        for (let i = 0; i < 7; i++) {
            const newDate = new Date(today);
            newDate.setDate(today.getDate() + i);

            if (i === 0) {
                dates.push('Today');
            } else if (i === 1) {
                dates.push('Tomorrow');
            } else {
                dates.push(getFormattedDate(newDate));
            }
        }

        return dates;
    };

    const dates = generateDates();

    const handleClick = (index) => {
        setSelectedDate(index);
    };
    
    const renderContent = () => {
        switch (modalType) {
            case 'Hospitals Available':
                return (
                    <>
                        {cardData.map((data, index) => {
                            const {
                                "Hospital Name": hospitalName,
                                "Address": address,
                                "City": city,
                                "State": state,
                                "ZIP Code": zipCode,
                                "Hospital overall rating": rating
                            } = data;

                            return (
                                <div key={index} className={styles.accordionItem}>
                                    <div className={styles.accordionOverlay}>
                                        <div className={styles.iconSection}>
                                            <div className={styles.imageSection}>
                                                <HospitalBuilding className={styles.hospitalImage} />
                                                <div style={{ position: 'absolute', bottom: '15%', right: '-5%', zIndex: '1' }}>
                                                    <BlueCheck />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.detailsContainer}>
                                            <Typography
                                                variant="h6"
                                                style={{
                                                    fontFamily: 'var(--base-font-family)',
                                                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                                                    fontWeight: '600',
                                                    color: 'var(--bright-sky-blue)'
                                                }}
                                            >
                                                {hospitalName}
                                            </Typography>
                                            <div className={styles.addressContainer}>
                                                <div className={styles.address}>
                                                    <Typography 
                                                        variant="body2"
                                                        style={{
                                                            fontFamily: 'var(--base-font-family)',
                                                            fontSize: '14px',
                                                            fontWeight: '700',
                                                            color: 'var(--charcoal-gray)'
                                                        }}
                                                    >
                                                        {`${city}, ${state} ${zipCode}`}
                                                    </Typography>
                                                    <Typography 
                                                        variant="body2"
                                                        style={{
                                                            fontFamily: 'var(--base-font-family)',
                                                            fontSize: '14px',
                                                            fontWeight: '400',
                                                            color: 'var(--charcoal-gray)'
                                                        }}
                                                    >
                                                        {address}
                                                    </Typography>
                                                </div>
                                                <div className={styles.consulationFee}>
                                                    <div className={styles.priceContainer} style={{ display: 'flex', gap: '0.5rem' }}>
                                                        <div style={{ color: 'var(--lime-green)', fontWeight: '700' }}>
                                                            FREE
                                                        </div>
                                                        <div style={{ color: 'var(--chinese-silver)' }}>
                                                            <s>₹500</s>
                                                        </div>
                                                    </div>
                                                    <div style={{ color: 'var(--charcoal-gray)' }}>
                                                        Consultation fee at clinic
                                                    </div>
                                                </div>
                                            </div>
                                            {openIndex !== index && (
                                                <div className={styles.ratingSection}>
                                                    <div className={styles.ratingContainer}>
                                                        <ThumbsUp /> {rating}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className={styles.buttonSection}>
                                            <div className={styles.buttonContainer}>
                                                <Typography fontFamily='var(--base-font-family)' fontWeight= '500' color="var(--jade-green)">
                                                    Available Today
                                                </Typography>
                                                <Button onClick={() => {
                                                    selectedSlot[selectedDate] 
                                                        ? handleBooking({hospitalName, address, city, state, zipCode, rating})
                                                        : handleAccordionToggle(index)
                                                    }}
                                                >
                                                    Book FREE Center Visit
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    {openIndex === index && (
                                        <div className={styles.accordionContent}>
                                            <Swiper 
                                                initialSlide={0} 
                                                modules={[Navigation]} 
                                                navigation 
                                                spaceBetween={0} 
                                                slidesPerView={3}
                                                breakpoints={{
                                                    320: {
                                                        slidesPerView: 1
                                                    },
                                                    768: {
                                                        slidesPerView: 2
                                                    },
                                                    960: {
                                                        slidesPerView: 3
                                                    }
                                                }}
                                                style={{ width: '60vw', height:'10vh' }}>
                                                <CarouselLeftNavigation />
                                                <CarouselRightNavigation />
                                                {dates.map((date, index) => (
                                                    <SwiperSlide
                                                        key={uniqueId()} 
                                                        onClick={() => handleClick(index)} 
                                                        style={{ 
                                                            display: 'flex', 
                                                            flexDirection: 'column', 
                                                            justifyContent: 'center', 
                                                            alignItems: 'center', 
                                                            width: '30%',
                                                            marginRight: '0px !important',
                                                            borderBottom: selectedDate === index ? '4px solid #2AA7FF' : '4px solid #E0E0E4',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        <Typography style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                                                            {date}
                                                        </Typography>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div className={styles.slotsContainer}>
                                                {/* Morning Slots */}
                                                <div className={styles.slotsAvailable} style={{ borderBottom: '1px solid #F0F0F5' }}>
                                                    <Typography className={styles.period}>Morning</Typography>
                                                    <div className={styles.timeSlotsAvailable}>
                                                        {slots[0].Morning.map((item, index) => (
                                                            <div 
                                                                key={index} 
                                                                onClick={() => handleSlotSelection(item, 'Morning')} 
                                                                className={styles.timeSlots} 
                                                                style={{
                                                                    color: selectedSlot[selectedDate]?.time === item && selectedSlot[selectedDate]?.period === 'Morning' ? 'white' : 'var(--aqua-blue)', 
                                                                    backgroundColor: selectedSlot[selectedDate]?.time === item && selectedSlot[selectedDate]?.period === 'Morning' ? 'var(--aqua-blue)' : 'white', 
                                                                    fontFamily: 'var(--lato-font-family)', 
                                                                    fontSize: '14px', 
                                                                    fontWeight: '400', 
                                                                    width: '84px', 
                                                                    border: '1px solid var(--aqua-blue)', 
                                                                    padding: '10px', 
                                                                    borderRadius: '3px', 
                                                                    cursor: 'pointer' 
                                                                }}
                                                            >
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* Afternoon Slots */}
                                                <div className={styles.slotsAvailable} style={{ borderBottom: '1px solid #F0F0F5' }}>
                                                    <Typography className={styles.period}>Afternoon</Typography>
                                                    <div className={styles.timeSlotsAvailable}>
                                                        {slots[0].Afternoon.map((item, index) => (
                                                            <div 
                                                                key={index} 
                                                                onClick={() => handleSlotSelection(item, 'Afternoon')} 
                                                                className={styles.timeSlots} 
                                                                style={{ 
                                                                    color: selectedSlot[selectedDate]?.time === item && selectedSlot[selectedDate]?.period === 'Afternoon' ? 'white' : 'var(--aqua-blue)', 
                                                                    backgroundColor: selectedSlot[selectedDate]?.time === item && selectedSlot[selectedDate]?.period === 'Afternoon' ? 'var(--aqua-blue)' : 'white', 
                                                                    fontFamily: 'var(--lato-font-family)', 
                                                                    fontSize: '14px', 
                                                                    fontWeight: '400', 
                                                                    width: '84px', 
                                                                    border: '1px solid var(--aqua-blue)', 
                                                                    padding: '10px', 
                                                                    borderRadius: '3px', 
                                                                    cursor: 'pointer' 
                                                                }}
                                                            >
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* Evening Slots */}
                                                <div className={styles.slotsAvailable}>
                                                    <Typography className={styles.period}>Evening</Typography>
                                                    <div className={styles.timeSlotsAvailable}>
                                                        {slots[0].Evening.map((item, index) => (
                                                            <div 
                                                                key={index} 
                                                                onClick={() => handleSlotSelection(item, 'Evening')} 
                                                                className={styles.timeSlots} 
                                                                style={{ 
                                                                    color: selectedSlot[selectedDate]?.time === item && selectedSlot[selectedDate]?.period === 'Evening' ? 'white' : 'var(--aqua-blue)', 
                                                                    backgroundColor: selectedSlot[selectedDate]?.time === item && selectedSlot[selectedDate]?.period === 'Evening' ? 'var(--aqua-blue)' : 'white', 
                                                                    fontFamily: 'var(--lato-font-family)', 
                                                                    fontSize: '14px', 
                                                                    fontWeight: '400', 
                                                                    width: '84px', 
                                                                    border: '1px solid var(--aqua-blue)', 
                                                                    padding: '10px', 
                                                                    borderRadius: '3px', 
                                                                    cursor: 'pointer' 
                                                                }}
                                                            >
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </>
                );
            case 'My Bookings':
                return <></>
            default:
                return <h1>404 Not Found</h1>;
        }
    }

    return (
        <div className={styles.cardContainer}>
            {renderContent()}
        </div>
    );
};

export default Cards;
