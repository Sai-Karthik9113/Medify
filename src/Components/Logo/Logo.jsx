import React from "react";
import { Typography } from '@mui/material'
import { IoShieldCheckmark } from "react-icons/io5";
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <>
            <div className={styles.logo}>
                <IoShieldCheckmark color='#ffffff' style={{ display: 'flex',  }} />
            </div>
            <Typography style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '0.02em', color: 'var(--primary-text-color)' }} variant="p">
                Medify
            </Typography>
        </>
    )
};

export default Logo;