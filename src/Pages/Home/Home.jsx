import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import FrequentlyAskedQuestions from "../../Components/FAQ/Questions";
import BlogsAndNews from "../../Components/News/News";
// import AdForDownloadOurApp from "../../Components/AdBanner/AdBanner";
import Footer from "../../Components/Footer/Footer";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <BlogsAndNews />
            <FrequentlyAskedQuestions />
            {/* <AdForDownloadOurApp /> */}
            <Footer />
        </div>
    )
};

export default Home;