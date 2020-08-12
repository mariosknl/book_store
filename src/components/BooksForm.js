import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import addBookAction from '../actions/index';

const StyledBookForm = styled.form`
  background: yellow;
  color: green;

  button {
    color: blue;
    background: red;
  }
`;
export default function BooksForm() {
  const dispatch = useDispatch();
  let count = 0;
  const [formInputs, setFormInputs] = useState({
    title: '',
    category: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
  });

  const handleSubmit = e => {
    e.preventDefault();
    const input = e.target.querySelector('input').value;
    const select = e.target.querySelector('select').value;
    dispatch(addBookAction({ title: input, category: select, id: uuidv4() }));
    setFormInputs({
      ...formInputs,
      title: '',
    });
  };

  const handleChange = e => {
    setFormInputs({
      ...formInputs,
      title: e.target.value,
    });
  };
  const { title, category } = formInputs;
  return (
    <StyledBookForm onSubmit={handleSubmit}>
      <div className="title">
        <input type="text" onChange={handleChange} value={title} />
      </div>
      <div className="category">
        <select name="" id="">
          {category.map(cat => {
            count += 1;
            return <option value={cat} key={count}>{cat}</option>;
          })}
        </select>
      </div>
      <button type="submit">Submit</button>
    </StyledBookForm>
  );
}
