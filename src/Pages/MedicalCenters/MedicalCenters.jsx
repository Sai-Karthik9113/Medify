import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import HospitalCardWithAccordion from "../../Components/HospitalAccordion/HospitalAccordion";
import FrequentlyAskedQuestions from "../../Components/FAQ/Questions";
import AdForDownloadOurApp from "../../Components/AdBanner/AdBanner";
import Footer from "../../Components/Footer/Footer";
import styles from './MedicalCenters.module.css';

const MedicalCenters = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <HospitalCardWithAccordion />
            <FrequentlyAskedQuestions />
            <AdForDownloadOurApp />
            <Footer />
        </div>
    )
};

export default MedicalCenters;