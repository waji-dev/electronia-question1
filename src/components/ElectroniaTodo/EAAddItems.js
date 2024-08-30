// src/components/AddTodo.js
import React, { useState, useContext } from 'react';
import { EAContext } from './EAContext';

const AddItems = () => {
  const [text, setText] = useState('');
  const { addItem } = useContext(EAContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <input
          className='form-control'
          type="text"
          required="required"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='btn btn-primary m-2' type="submit">Add Task</button>
      </div>
    
    </form>
  );
};

export default AddItems;
