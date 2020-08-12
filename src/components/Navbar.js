import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: red;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>Bookstore CMS</li>
        <li>Books</li>
        <li>Categories</li>
      </ul>
      <div>
        <i className="fas fa-user" />
      </div>
    </StyledNavbar>
  );
}
