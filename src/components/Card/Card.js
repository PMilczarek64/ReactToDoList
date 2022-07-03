import styles from './Card.module.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const Card = ({id , ...props}) => {
  return(
    <li className={styles.card}>{props.title}<FavoriteButton id={id} /></li>
  );
};


export default Card;