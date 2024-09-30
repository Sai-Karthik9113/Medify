import React from "react";
import styles from './Button.module.css';

const Button = ({ children, style, onClick }) => {
    return (
        <button className={styles.buttonWrapper} style={style} onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;