import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./NotFound.module.scss";

const Error404 = () => (
  <>
    <PageTitle>Error 404!</PageTitle>
    <h3 className={styles.subtitle}>Page not found...</h3>
  </>
);

export default Error404;