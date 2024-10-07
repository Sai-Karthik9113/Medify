import React, { useEffect, useState } from "react";
import styles from './SearchBox.module.css';
import { Box, FormControl, InputLabel, Select } from "@mui/material";
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SearchBox = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true to trigger the animation after the component mounts
        setIsVisible(true);
    }, []);

    return (
        <div style={{ position: 'absolute', top: '100%' }} className={isVisible ? styles.slideIn : styles.slideOut}>
            {location.pathname !== '/bookings' ? (
                <div className={styles.searchBoxContainer}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '225px', md: '250px', lg: '350px' } }}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel     
                                id="state-label"
                                sx={{ 
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center' 
                                }}
                            > 
                                <FaSearch style={{ marginRight: '8px', color: 'var(--cool-gray)', width: '19.5px', height: '19.5px' }} /> State
                            </InputLabel>
                            <Select
                                labelId="state-label"
                                disabled
                                label="State"
                                MenuProps={{
                                    slotProps: {
                                        paper: {
                                            style: {
                                                maxHeight: '200px',
                                                background: 'white'
                                            },
                                        }
                                    }
                                }}
                                sx={{
                                    background: 'var(--ghost-white)',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#F0F0F0',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#F0F0F0',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#E0E0E0',
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'var(--cadet-blue)',
                                    },
                                    '& .MuiSelect-icon': {
                                        display: 'none',
                                    },
                                    '&.MuiList-root-MuiMenu-list': {
                                        paddingTop: '0px !important'
                                    },
                                    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#F0F0F0',
                                    },
                                }}
                                required
                            >
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '225px', md: '250px', lg: '350px' } }}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel sx={{ 
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center' 
                                }}
                                id="city-label"
                            > 
                                <FaSearch style={{ marginRight: '8px', color: 'var(--cool-gray)', width: '19.5px', height: '19.5px' }} /> City
                            </InputLabel>
                            <Select
                                labelId="city-label"
                                disabled
                                label="City"
                                MenuProps={{
                                    slotProps: {
                                        paper: {
                                            style: {
                                                maxHeight: '200px',
                                                background: 'white'
                                            },
                                        }
                                    }
                                }}
                                sx={{
                                    background: 'var(--ghost-white)',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#F0F0F0',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#F0F0F0',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#E0E0E0',
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'var(--cadet-blue)',
                                    },
                                    '& .MuiSelect-icon': {
                                        display: 'none',
                                    },
                                    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#F0F0F0',
                                    },
                                }}
                                required
                            > 
                            </Select>
                        </FormControl>
                    </Box>
                    <Button
                        style={{ display: 'flex', gap: '8px', width: 'clamp(125px, 2vw, 250px)', height: '50px' }}
                    >
                        <FaSearch /> Search
                    </Button>
                </div>
            ) : (
                <div className={styles.searchBoxContainer}>
                    <input type="text" placeholder="Search By Hospital" className={styles.input} disabled/>
                    <Button className={styles.searchButton}>Search</Button>
                </div>
            )}
        </div>
    )
};

export default SearchBox;