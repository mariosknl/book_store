import React from 'react';
import styled from 'styled-components';
import Bookslist from '../containers/BooksList';
import Navbar from '../containers/Navbar';

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  background: #fafafa;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  padding: 5rem 4rem 0 4rem;

  h2 {
    color: #929eaa;
    font-weight: bold;
    align-self: self-start;
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <StyledContainer>
        <Bookslist />

      </StyledContainer>
    </>
  );
}

export default App;
