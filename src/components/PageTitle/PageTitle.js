import styles from './PageTitle.module.scss';
import React from "react";

const PageTitle = ({children}) => {
  return (
    <h1 className={styles.title}>{children}</h1>
  );
};


export default PageTitle;