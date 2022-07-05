import React, { useState } from "react";
import styles from './FavoriteButton.module.scss';
import clsx from "clsx";
import { updateFavorite } from "../../redux/cardsRedux";
import { useDispatch } from "react-redux";

const FavoriteButton = ({id, ...props}) => {
  const dispatch = useDispatch();
  const [isFavorite, setFavorite] = useState(false);
  console.log(isFavorite);

  const handleClick = () => {
    if(isFavorite === false) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
    console.log(isFavorite);
    console.log(id);
    dispatch(updateFavorite(id));
  };

  return (
    <button className={clsx(styles.star, isFavorite && styles.isFavorite)} onClick={() => handleClick()}><i className="fa fa-star"></i></button>
  )
}

export default FavoriteButton;