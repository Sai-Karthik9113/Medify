import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
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