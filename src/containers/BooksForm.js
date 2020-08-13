import React from 'react';
import styled from 'styled-components';

const StyledBookForm = styled.form`
  background: yellow;
  color: green;

  button {
    color: blue;
    background: red;
  }
`;
export default function BooksForm() {
  let count = 0;
  const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <StyledBookForm>
      <div className="title">
        <input type="text" />
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
