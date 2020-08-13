import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: red;
  padding: 0 4rem;
  font-family: 'Montserrat', sans-serif;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;

    li {
      margin-right: 1rem;
      padding: 0;
      color: #F4F5F9;
      font-size: 13px;
    }
  }
    i {
      font-size: 20px;
      padding: 0.5rem;
      margin-right: 1rem;
      border: 2px solid #000;
      border-radius 50%;
    }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li><h1>Bookstore CMS</h1></li>
        <li>Books</li>
        <li>Categories</li>
      </ul>
      <div>
        <i className="fas fa-user" />
      </div>
    </StyledNavbar>
  );
}
