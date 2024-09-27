import React from "react";
// import { Typography } from "@mui/material";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";
import Logo from "../Logo/Logo";
import styles from './Footer.module.css';

const Footer = () => {
    const icons = [
        <FaFacebookF />,
        <FaTwitter />,
        <FaYoutube />,
        <FaPinterest />
    ];

    const quickLinks = [
        'About Us',
        'Our Pricing',
        'Our Gallery',
        'Appointment',
        'Privacy Policy'
    ]

    const department = [
        'Orthology',
        'Neurology',
        'Dental Care',
        'Opthalmology',
        'Cardiology'
    ]

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <div className={styles.socialMediaSection}>
                    <div className={styles.logoContainer}>
                        <Logo />
                    </div>
                    <div className={styles.socialMediaWebsites}>
                    {
                        icons.map((icon, index) => (
                            <div key={index} className={styles.iconWrapper}>
                                {icon}
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className={styles.linksContainer}>
                    <div className={styles.linkSection}>
                        {/* <Typography variant="h6" fontWeight='500' marginBottom='15px'>
                            Quick Links
                        </Typography> */}
                        <ul className={styles.footerList}>
                            {
                                quickLinks.map((link, index) => (
                                    <li key={index} className={styles.listWrapper}>
                                        {<RiArrowDropRightLine size='1.875rem' />} {link}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.linkSection}>
                        {/* <Typography variant="h6" fontWeight='500' marginBottom='15px'>
                            Department
                        </Typography> */}
                        <ul className={styles.footerList}>
                            {
                                department.map((department, index) => (
                                    <li key={index} className={styles.listWrapper}>
                                        {<RiArrowDropRightLine size='1.875rem' />} {department}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.linkSection}>
                        {/* <Typography variant="h6" fontWeight='500' marginBottom='15px'>
                            Useful Links
                        </Typography> */}
                        <ul className={styles.footerList}>
                            {
                                quickLinks.map((link, index) => (
                                    <li key={index} className={styles.listWrapper}>
                                        {<RiArrowDropRightLine size='1.875rem' />} {link}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.copyRight}>
                    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                </div>
                <div className={styles.socialMediaWebsitesBottom}>
                    {
                        icons.map((icon, index) => (
                            <div key={index} className={styles.iconWrapper}>
                                {icon}
                            </div>
                        ))
                    }
                    </div>
            </div>
        </div>
    )
};

export default Footer;