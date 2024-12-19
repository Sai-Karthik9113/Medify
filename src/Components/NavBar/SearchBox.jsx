import React, { useEffect, useState } from "react";
import styles from './SearchBox.module.css';
import { useSnackbar } from "notistack";
import axios from "axios";
import { config } from "../../App";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { uniqueId } from "../../App";

const SearchBox = ({ isVisible }) => {
    const { enqueueSnackbar } = useSnackbar();
    const location = useLocation();
    const [city, setCity] = useState("");
    const [cityData, setCityData] = useState([]);
    const [state, setState] = useState("");
    const [stateData, setStateData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchStateData = async() => {
            try {
                const res = await axios.get(`${config.endpoint}/states`);
                setStateData(res.data);           
            } catch (error) {
                console.error("Error: ", error);
            }
        }
        fetchStateData();

    }, []);

    useEffect(() => {
        const fetchCityData = async() => {
            try {
                const response = await axios.get(`${config.endpoint}/cities/${state}`);
                setCityData(response.data);
            } catch (error) {
                console.error("Error: ", error);
            }
        }
        if (state) {
            fetchCityData();
        }

    }, [state]);

    const handleSearch = () => {
        if (state && city) {
            navigate(`/medical-centers?state=${state}&city=${city}`);
        } else {
            if (!state && !city) {
                enqueueSnackbar("City and state selection is required to continue.", {
                    variant: 'warning',
                });
            } else if (!city) {
                enqueueSnackbar("Please select a city to continue.", {
                    variant: 'warning',
                });
            }
        }
    };

    const handleCitySelection = () => {
        if (!state) {
            enqueueSnackbar("Please select a state to view the cities.", { 
                variant: 'warning',
            });
        }
    }

    return (
        <div style={{ position: 'absolute', zIndex: '1001' }} className={isVisible ? styles.slideIn : styles.slideOut}>
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
                                value={state}
                                onChange={(e) => setState(e.target.value)}
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
                                <MenuItem value="" disabled>
                                    Select State
                                </MenuItem>
                                {
                                    stateData.map((state) => (
                                        <MenuItem key={uniqueId()} value={state}>
                                            {state}
                                        </MenuItem>
                                    ))
                                }
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
                                value={city}
                                disabled={!state}
                                onClick={() => handleCitySelection()}
                                onChange={(e) => setCity(e.target.value)}
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
                                <MenuItem value="" disabled>
                                    {state ? 'Select City' : 'Select State First'}
                                </MenuItem>
                                {
                                    cityData.map((city) => (
                                        <MenuItem key={uniqueId()} value={city}>
                                            {city}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Button
                        onClick={handleSearch}
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