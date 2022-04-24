import styles from './SearchFrom.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
      <form className={styles.searchFrom}>
          <TextInput placeholder="search" />
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;