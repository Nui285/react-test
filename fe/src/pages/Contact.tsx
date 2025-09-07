import React from 'react';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <main className={styles.layout}>
      <h1>コンタクト</h1>
      <p>ここに自由に要素を配置できます。</p>
    </main>
  );
};

export default MainContent;
