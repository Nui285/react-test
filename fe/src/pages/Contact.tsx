import React from 'react';
import styles from './MainContent.module.css';
import Button from '../components/Button/Button2';

const MainContent: React.FC = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <h1>コンタクト</h1>
        <Button />
      </main>
    </div>
  );
};

export default MainContent;
