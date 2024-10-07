import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { styled } from '@mui/material/styles';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, IconButton } from "@mui/material";
import { FaUserMd, FaHospital, FaCapsules, FaProcedures, FaFileMedical, FaTools } from 'react-icons/fa';
import { HiOutlineMenu } from "react-icons/hi";
import { FaChevronCircleRight } from 'react-icons/fa';
import { uniqueId } from "../../App";
import Button from "../Button/Button";
import styles from './NavBar.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    padding: '10px 0px',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        background: 'var(--primary-color)',
        borderRight: 'var(--primary-color)',
        width: '60%',
        padding: theme.spacing(2),
        backdropFilter: 'blur(10px)',
    },
}));

const NavBar = () => {
    const isMobile = useMediaQuery('(max-width: 864px)');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(prev => !prev);
    };

    const list = [
        { name: 'Find Doctors', icon: <FaUserMd /> },
        { name: 'Hospitals', icon: <FaHospital /> },
        { name: 'Medicines', icon: <FaCapsules /> },
        { name: 'Surgeries', icon: <FaProcedures /> },
        { name: 'Software for Provider', icon: <FaFileMedical /> },
        { name: 'Facilities', icon: <FaTools /> },
    ];

    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToMyBookings = () => {
        navigate('/bookings');
    }

    return (
        <div className={styles.nav}>
            <div className={styles.brandName} onClick={navigateToHome}>
                <Logo />
            </div>
            {isMobile ? (
                <>
                    <IconButton onClick={toggleDrawer} color="primary">
                        <HiOutlineMenu size={24} />
                    </IconButton>
                    <StyledDrawer
                        anchor="right"
                        open={open}
                        onClose={toggleDrawer}
                        BackdropProps={{
                            onClick: toggleDrawer,
                        }}
                    >
                        <div>
                            <IconButton onClick={toggleDrawer} style={{ display: 'flex', paddingLeft: '10px' }}>
                                <FaChevronCircleRight size={24} color='var(--aqua-blue)' />
                            </IconButton>
                            <List>
                                {list.map((val) => (
                                    <ListItem key={uniqueId()}>
                                        <StyledListItemButton  sx={{  color: "var(--midnight-blue) !important" }} component="a" href={`#${val.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                            <ListItemIcon sx={{  color: "var(--midnight-blue) !important" }}>{val.icon}</ListItemIcon>
                                            {val.name}
                                        </StyledListItemButton>
                                    </ListItem>
                                ))}
                                <Divider style={{ margin: '10px 0' }} />
                                <ListItem style={{ width: '100%' }}>
                                    <Button style={{ width: '100%' }} onClick={navigateToMyBookings}>
                                        My Bookings
                                    </Button>
                                </ListItem>
                            </List>
                        </div>
                    </StyledDrawer>
                </>
            ) : (
                <nav>
                    <ul className={styles.listItems}>
                        {list.map((val) => (
                            <li key={uniqueId()}>
                                <a
                                    href={`#${val.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className={styles.navLink}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'var(--midnight-blue)',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        padding: '10px 15px',
                                        transition: 'background-color 0.3s',
                                        borderRadius: '4px',
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    {val.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <Button onClick={navigateToMyBookings}>
                                My Bookings
                            </Button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default NavBar;
