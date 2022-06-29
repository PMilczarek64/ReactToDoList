import React from "react";
import styles from './NavBar.module.scss';

const NavBar = () => (
  <div className={styles.bar}>
    <div className={styles.icon}>
    <a href="/home"><i className='fa fa-tasks'></i></a>
    </div>
    <ul className={styles.navButtons}>
      <li><a href="/home">Home</a></li>
      <li><a href="/favorite">Favorite</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </div>
);


export default NavBar;