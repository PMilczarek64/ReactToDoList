import styles from './SearchFrom.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
      <form className={styles.searchFrom}>
          <TextInput placeholder="search" />
          <Button text="Search" />
      </form>
  );
};

export default SearchForm;