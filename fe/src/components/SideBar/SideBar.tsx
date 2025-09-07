import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <Link to="/">ホーム</Link>
      <Link to="/about">アバウト</Link>
      <Link to="/contact">コンタクト</Link>
    </nav>
  );
};

export default Sidebar;
