import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import styles from './Favorite.module.scss';
import Card from "../Card/Card";
import { getFavoriteCards } from "../../redux/cardsRedux";
import { useSelector } from "react-redux";

const Favorite = () => {

  const cards = useSelector(getFavoriteCards);

  if (cards.length === 0) 
    return ( 
      <div>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>No cards added...</p>
      </div>
    );

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} id={card.id} title={card.title} />) }
          </ul>
        </div>
      </div>  
    </div>
  );
};


export default Favorite;