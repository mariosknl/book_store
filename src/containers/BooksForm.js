import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';

const StyledBookForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  button {
    color: blue;
    background: red;
    flex-grow: 1;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 20px;
  }

  .title {
    flex-grow: 3;
    margin-right: 3rem;
    input {
      font-size: 20px;
      width: 100%;
      padding: 10px 20px;
      border-radius: 4px;
    }
  }

  .category {
    flex-grow: 2;
    margin-right: 0.5rem;
  select {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    font-size: 20px;
    text-align-last: left;
    border-radius: 4px;
    
  }

  }
`;
class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

      title: '',
      category: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],

    };
    this.count = 0;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { addBook } = actions;
    const input = e.target.querySelector('input').value;
    const select = e.target.querySelector('select').value;
    const newBook = {
      title: input,
      category: select,
    };
    dispatch(addBook(newBook));
    this.setState({
      title: '',
    });
  }

  handleChange(e) {
    const inputValue = e.target.value;
    this.setState({
      title: inputValue,
    });
  }

  render() {
    const { category, title } = this.state;
    return (
      <StyledBookForm onSubmit={this.handleSubmit}>
        <div className="title">
          <input type="text" onChange={this.handleChange} value={title} />
        </div>
        <div className="category">
          <select name="" id="">
            {category.map(cat => {
              this.count += 1;
              return <option value={cat} key={this.count}>{cat}</option>;
            })}
          </select>
        </div>
        <button type="submit">Submit</button>
      </StyledBookForm>

    );
  }
}
export default (connect())(BooksForm);

BooksForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
