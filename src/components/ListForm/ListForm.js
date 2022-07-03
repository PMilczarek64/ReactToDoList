import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import React from "react";
import styles from './ListForm.module.scss';
import { addList } from '../../redux/store';


const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  }

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Title" className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <TextInput placeholder="description" className={styles.input} type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
  );
};


export default ListForm;