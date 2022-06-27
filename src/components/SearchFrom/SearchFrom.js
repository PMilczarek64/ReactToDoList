import styles from './SearchFrom.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

  const dispatch = useDispatch();

  const [searchKey, setSearchKey] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'UPDATE_SEARCHSTRING', payload: {searchKey} });
    setSearchKey('');
  };

  return (
      <form className={styles.searchFrom} onSubmit={handleSubmit}>
          <TextInput placeholder="search" value={searchKey} onChange={e => setSearchKey(e.target.value)} />
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;