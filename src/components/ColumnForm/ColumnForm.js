import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';


const ColumnForm = ({listId}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId}));
        setTitle('');
        setIcon('');
    };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title: <TextInput className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} /></span>
      <span>Icon: <TextInput className={styles.input} type="text" value={icon} onChange={e => setIcon(e.target.value)} /></span>
        <Button>Add column</Button>
      </form>
  );
};

export default ColumnForm;