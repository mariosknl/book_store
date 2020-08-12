import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBookForm = styled.form`
  background: yellow;
  color: green;
`;
export default function BooksForm() {
  let count = 0;
  const [formInputs, setForminputs] = useState({
    title: '',
    category: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
  });
  const { title, category } = formInputs;
  return (
    <StyledBookForm>
      <div className="title">
        <input type="text" value={title} />
      </div>
      <div className="category">
        <select name="" id="">
          {category.map(cat => {
            count += 1;
            return <option value={cat} key={count}>{cat}</option>;
          })}
        </select>
      </div>
    </StyledBookForm>
  );
}
