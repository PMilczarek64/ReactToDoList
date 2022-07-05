import styles from './Card.module.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import RemoveButton from '../RemoveButton/RemoveButton';

const Card = ({ id, title}) => {
  return (
    <li className={styles.card}>
      {title}
      <div className='buttonsWrapper'>
        <FavoriteButton id={id} />
        <RemoveButton id={id} />
      </div>
    </li>
  );
};


export default Card;