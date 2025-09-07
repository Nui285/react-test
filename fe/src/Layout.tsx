
import React from 'react';
import styles from './App.module.css';
//import Header from './components/Header/Header';
import Sidebar from './components/SideBar/SideBar';
//import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;