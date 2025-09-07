import React from 'react';
import styles from './Button.module.css';

const Button: React.FC = () => {
  return (
    <button className={styles.button} onClick={() => window.open("https://www.youtube.com/", "_blank")}>
      youtube
    </button>
  );
};

export default Button;
