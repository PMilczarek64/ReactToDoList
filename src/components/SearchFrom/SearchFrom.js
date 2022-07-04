import styles from './SearchFrom.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchstring } from '../../redux/searchStringRedux';

const SearchForm = () => {

  const dispatch = useDispatch();

  const [searchKey, setSearchKey] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring({searchKey}));
    setSearchKey('');
  };

  useEffect(() => {
    dispatch(updateSearchstring({searchKey: ''}))
  }, []);

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
          <TextInput placeholder="search" value={searchKey} onChange={e => setSearchKey(e.target.value)} />
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;