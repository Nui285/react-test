import React from 'react';
import styles from './Button.module.css';

const Button: React.FC = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/button', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'button_clicked' }),
      });
      const data = await response.json();
      console.log('サーバーからのレスポンス:', data);
    } catch (error) {
      console.error('エラー:', error);
    }
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      押してみて
    </button>
  );
};


export default Button;
