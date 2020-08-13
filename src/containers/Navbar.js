import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import actions from '../actions/index';

const StyledNavbar = styled.nav`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-between;
background: #fff;
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
    color: #f4f5f9;
    font-size: 13px;
  }

  li:nth-child(1) {
    color: #0290ff;
  }

  li:nth-child(2) {
    color: #121212;
  }
}

i {
  font-size: 20px;
  padding: 0.5rem;
  margin-right: 1rem;
  border: 2px solid #000;
  border-radius: 50%;
}
`;

function Navbar(props) {
  const { dispatch } = props;
  const { changeFilter } = actions;

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(changeFilter(newFilter));
  };

  return (
    <StyledNavbar>
      <ul>
        <li><h1>Bookstore CMS</h1></li>
        <li>Books</li>
        <li>
          <CategoryFilter handleChange={handleFilterChange} />
        </li>
      </ul>
      <div>
        <i className="fas fa-user" />
      </div>
    </StyledNavbar>
  );
}

export default connect()(Navbar);

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
