import React from "react";
import styles from './Button.module.css';

const Button = ({ children, style }) => {
    return (
        <button className={styles.buttonWrapper} style={style}>
            {children}
        </button>
    )
};

export default Button;