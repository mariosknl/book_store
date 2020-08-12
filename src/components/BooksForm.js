import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBookForm = styled.form`
  background: yellow;
  color: green;
`;
export default function BooksForm() {
  const [formInputs, setForminputs] = useState({
    title: '',
    category: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
  });
  return (
    <StyledBookForm>
      Hello from the books form
    </StyledBookForm>
  );
}
