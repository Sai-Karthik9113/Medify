import React, { useEffect, useState } from 'react';
import { Select, MenuItem, InputLabel, FormControl, Typography, Box } from '@mui/material';
import Button from '../Button/Button';
import { FaSearch } from 'react-icons/fa';
import { useSnackbar } from 'notistack';
import { config } from '../../App';
import { uniqueId } from '../../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Hero.module.css';

const FloatingSearchBox = ({ containerData }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [selectedCard, setSelectedCard] = useState(null);
    const [state, setState] = useState('');
    const [stateData, setStateData] = useState([]);
    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState([]);
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

    const handleClick = (id) => {
        setSelectedCard(id);
    };
    

    const handleSearch = () => {
        if (state && city) {
            if (!selectedCard) {
                enqueueSnackbar('Please select your preferred service to proceed with your search.', {
                    variant: 'warning',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center'
                    }
                })
            } else {
                if (selectedCard === 'Hospitals') {  //implementing the placeholder modal for this specific link based on the design provided; will refine and enhance it in future
            
                    navigate(`/medical-centers?state=${state}&city=${city}&service=${selectedCard}`);
                } else {
                    enqueueSnackbar('Note: The hospital option is currently fully designed for your convenience.', {
                        variant: 'warning',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        }
                    })
                }
            }
        }
    };

    const handleCitySelection = () => {
        if (!state) {
            enqueueSnackbar("Please select a state first to view cities.", { 
                variant: 'info',
            });
        }
    }


    return (
        <div className={styles.floatingSearchBox}>
        <div className={styles.searchContainer}>
            <div className={styles.searchSection}>
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
                            '& *': {
                                fontFamily: 'var(--base-font-family)',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#F0F0F0',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#F0F0F0',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#E0E0E0',
                            },
                            '& .Mui-disabled .MuiInputBase-input::placeholder': {
                                color: 'var(--cadet-blue)',
                                fontFamily: 'var(--base-font-family)',
                            },
                            '& .MuiSelect-icon': {
                                display: 'none',
                            },
                            '&.MuiList-root-MuiMenu-list': {
                                paddingTop: '0px !important'
                            },
                            '&.Mui-disabled .MuiInputBase-input': {
                                color: 'var(--cadet-blue)', // Set the font color for the disabled input
                                fontFamily: 'var(--base-font-family)', // Ensure the font family is applied
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
            </div>

            <div className={styles.button}>
            <Button
                onClick={handleSearch}
                style={{ display: 'flex', gap: '8px', width: 'clamp(125px, 2vw, 250px)', height: '50px' }}
            >
                <FaSearch /> Search
            </Button>
            </div>
        </div>

        <div className={styles.centeredTextContainer}>You may be looking for</div>
        <div className={styles.cardsContainer}>
            {containerData.map((item) => (
            <div
                className={styles.cardSection}
                key={item.name}
                onClick={() => handleClick(item.name)}
                style={{
                backgroundColor: selectedCard === item.name ? 'var(--faint-aqua-blue)' : 'var(--ghost-white)',
                color: selectedCard === item.name ? 'var(--aqua-blue)' : 'var(--cadet-blue)',
                border: selectedCard === item.name ? '1px solid rgba(42, 167, 255, 1)' : '',
                borderRadius: '0.5rem',
                }}
            >
                <img src={item.icon} alt={item.name} />
                <Typography
                variant="p"
                style={{
                    fontSize: 'clamp(10px, 2vw, 18px)',
                    fontWeight: selectedCard === item.name ? '600' : '400',
                }}
                >
                {item.name}
                </Typography>
            </div>
            ))}
        </div>
        </div>
    );
};

export default FloatingSearchBox;
