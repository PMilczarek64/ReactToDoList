import styles from './SearchFrom.module.scss';

const SearchForm = () => {
  return (
      <form className={styles.searchFrom}>
          <input className={styles.input} type="text" />
          <button className={styles.button}>Search</button>
      </form>
  );
};

export default SearchForm;