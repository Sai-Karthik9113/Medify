import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/Hero/Hero";
import Pay from "../../Components/PayCarousel/PayCarousel";
import Specialisation from "../../Components/Specialisation/Specialisation";
import BlogsAndNews from "../../Components/News/News";
import Customers from "../../Components/OurCustomers/OurCustomers";
import FrequentlyAskedQuestions from "../../Components/FAQ/Questions";
import AdForDownloadOurApp from "../../Components/AdBanner/AdBanner";
import Footer from "../../Components/Footer/Footer";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div>
                <HeroSection />
                <Pay />
            </div>
            <Specialisation />
            <BlogsAndNews />
            <Customers />
            <FrequentlyAskedQuestions />
            <AdForDownloadOurApp />
            <Footer />
        </div>
    )
};

export default Home;