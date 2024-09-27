import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { styled, useTheme } from '@mui/material/styles';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, IconButton } from "@mui/material";
import { FaUserMd, FaHospital, FaCapsules, FaProcedures, FaFileMedical, FaTools } from 'react-icons/fa';
import { HiOutlineMenu } from "react-icons/hi";
import { FaChevronCircleRight } from 'react-icons/fa';
import { uniqueId } from "../../App";
import styles from './NavBar.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    padding: '10px 0px',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly transparent background
        borderLeft: '1px solid rgba(255, 255, 255, 0.7)',
        width: '60%',
        padding: theme.spacing(2),
        backdropFilter: 'blur(10px)', // Adds a blur effect
    },
}));

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width: 864px)');
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const list = [
        { name: 'Find Doctors', icon: <FaUserMd /> },
        { name: 'Hospitals', icon: <FaHospital /> },
        { name: 'Medicines', icon: <FaCapsules /> },
        { name: 'Surgeries', icon: <FaProcedures /> },
        { name: 'Software for Provider', icon: <FaFileMedical /> },
        { name: 'Facilities', icon: <FaTools /> },
    ];

    return (
        <div className={styles.nav}>
            <div className={styles.brandName}>
                <Logo />
            </div>
            {isMobile ? (
                <>
                    <IconButton onClick={handleDrawerOpen} color="primary">
                        <HiOutlineMenu size={24} />
                    </IconButton>
                    <StyledDrawer
                        anchor="right"
                        open={open}
                        onClose={handleDrawerClose}
                    >
                        <div>
                            <IconButton onClick={handleDrawerClose} style={{ display: 'flex', paddingLeft: '10px' }}>
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
                                <ListItem>
                                    <button
                                        style={{
                                            backgroundColor: theme.palette.primary.main,
                                            border: 'none',
                                            padding: '0.625rem 1.25rem',
                                            borderRadius: '0.5rem',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: 'white',
                                            cursor: 'pointer',
                                            width: '100%',
                                        }}
                                    >
                                        My Bookings
                                    </button>
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
                            <button
                                style={{
                                    backgroundColor: theme.palette.primary.main,
                                    border: 'none',
                                    padding: '0.625rem 1.25rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: 'white',
                                    cursor: 'pointer',
                                }}
                            >
                                My Bookings
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default NavBar;
