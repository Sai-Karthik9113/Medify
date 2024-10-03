import React, { useState } from "react";
import { TextField, InputAdornment, Typography } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import Button from "../Button/Button";
import styles from './Hero.module.css';

const FloatingSearchBox = ({ containerData }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClick = (index) => {
        setSelectedCard(index);
    }

    return (
        <div className={styles.floatingSearchBox}>
            <div className={styles.searchContainer}>
                <div className={styles.searchSection}>
                    <div className={styles.stateSearch}>
                        <TextField 
                            variant="outlined"
                            placeholder="State"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start" style={{ marginRight: '1rem', color: 'var(--cool-gray)' }}>
                                            <FaSearch style={{ width: '19.5px', height: '19.5px' }} />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        fontFamily: 'var(--base-font-family)',
                                        background: 'var(--ghost-white)',
                                        color: 'black',
                                        fontSize: '14px',
                                        borderRadius: '0.8rem'
                                    }
                                }
                            }}
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#F0F0F0', // Default border color
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#F0F0F0', // Keep the same border on hover
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#E0E0E0', // Slightly darker color when focused
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#F0F0F0', // Set border color for fieldset
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#F0F0F0', // Set hover border color for fieldset
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#E0E0E0', // Set focused border color for fieldset
                                    },
                                },
                                width: {
                                    xs: '225px',
                                    md: '250px',
                                    lg: '350px'
                                },
                                height: {
                                    xs: '30px',
                                    sm: '40px',
                                    md: '45px',
                                    lg: '50px'
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'var(--cadet-blue)',
                                },
                            }}
                        />
                    </div>
                    <div className={styles.citySearch}>
                        <TextField
                            variant="outlined"
                            placeholder="City"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start" style={{ marginRight: '1rem', color: 'var(--cool-gray)' }}>
                                            <FaSearch style={{ width: '19.5px', height: '19.5px' }} />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        fontFamily: 'var(--base-font-family)',
                                        background: 'var(--ghost-white)',
                                        color: 'black',
                                        fontSize: '14px',
                                        borderRadius: '0.8rem'
                                    }
                                }
                            }}
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#F0F0F0', // Default border color
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#F0F0F0', // Keep the same border on hover
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#E0E0E0', // Slightly darker color when focused
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#F0F0F0', // Set border color for fieldset
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#F0F0F0', // Set hover border color for fieldset
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#E0E0E0', // Set focused border color for fieldset
                                    },
                                },
                                width: {
                                    xs: '225px',
                                    md: '250px',
                                    lg: '350px'
                                },
                                height: {
                                    xs: '40px',
                                    sm: '45px',
                                    md: '50px',
                                    lg: '50px'
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'var(--cadet-blue)',
                                },
                            }}
                        />
                    </div>
                </div>
                <div className={styles.button}>
                    <Button style={{ display: 'flex', gap: '8px', width: 'clamp(125px, 2vw, 250px)', height: '50px' }}>
                        <FaSearch /> Search
                    </Button>
                </div>
            </div>
            <div className={styles.centeredTextContainer}>You may be looking for</div>
            <div className={styles.cardsContainer}>
                {
                    containerData.map((item, index) => (
                        <div className={styles.cardSection} 
                            key={index} onClick={() => handleClick(index)} 
                            style={{ 
                                backgroundColor: selectedCard === index ? 'var(--faint-aqua-blue)' : 'var(--ghost-white)',
                                color: selectedCard === index ? 'var(--aqua-blue)' : 'var(--cadet-blue)', 
                                border: selectedCard === index ? '1px solid rgba(42, 167, 255, 1)' : '',
                                borderRadius: '0.5rem',
                            }}
                        >
                            <img src={item.icon} alt={item.name} />
                            <Typography variant='p' style={{ fontSize: 'clamp(10px, 2vw, 18px)', fontWeight: selectedCard === index ? '600' : '400' }}>
                                {item.name}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default FloatingSearchBox;