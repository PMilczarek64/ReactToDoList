import React from "react";
import { useDispatch } from "react-redux";
import styles from './RemoveButton.module.scss';
import { removeCard } from "../../redux/cardsRedux";

const RemoveButton = ({id}) => {

  const dispatch = useDispatch();

    const handleClick = () => {
      console.log(id);
      dispatch(removeCard(id));
    }

  return (
    <button className={styles.trash} onClick={() => handleClick()}><i className="fa fa-trash"></i></button>
  );
};
export default RemoveButton;