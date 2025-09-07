import React from 'react';
import styles from './MainContent.module.css';
import Button from '../components/Button/Button'

const MainContent: React.FC = () => {
  return (
    <div className={styles.layout}>
        <main className={styles.main}>
            <h1>ホーム</h1>
        <div className={styles.body}>
            <main className={styles.main}>
                <p><Button /></p>
                <p>hehehe </p>
                </main>
            <main className={styles.main}>
                <p><Button /></p>
                <p>hehehe </p>
            </main>
        </div>
            <p><Button /></p>
            <p>hehehe </p>
        </main> 
    </div>
  );
};

export default MainContent;
