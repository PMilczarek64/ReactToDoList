import React from "react";
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className={styles.bar}>
    <div className={styles.icon}>
    <Link to="/"><i className='fa fa-tasks'></i></Link>
    </div>
    <ul className={styles.navButtons}>
      <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
    </ul>
  </div>
);


export default NavBar;