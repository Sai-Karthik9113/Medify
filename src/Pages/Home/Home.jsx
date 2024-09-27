import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import FrequentlyAskedQuestions from "../../Components/FAQ/Questions";
import Footer from "../../Components/Footer/Footer";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <FrequentlyAskedQuestions />
            <Footer />
        </div>
    )
};

export default Home;