/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledRowLeftSide = styled.div`
color: yellow;
width: 100%;
height: 170px;

/* border: 2px solid black; */
box-sizing: border-box;
padding: 20px 30px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;

.top {
  h5 {
    height: 18px;
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #e8e8e8;
  }
}

.middle {
  margin-top: 10px;
  margin-bottom: 26px;

  h5 {
    height: 29px;
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    color: black;
  }
}

.bottom {
  a {
    height: 19px;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
    text-decoration: none;
  }
}

span {
  height: 19px;
  font-family: RobotoSlab;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4386bf;
}

div {
  margin: 0;
  padding: 0;

  h5 {
    margin: 0;
    padding: 0;
  }
}
  }
`;

export default function StyledRowLeft(props) {
  const {
    id, title, category, handleRemove,
  } = props;
  return (
    <StyledRowLeftSide>
      <div className="top">
        <h5>
          { category}
        </h5>
      </div>
      <div className="middle">
        <h5>
          {title}
        </h5>
        <span>Author</span>

      </div>
      <div className="bottom">
        <a href="#">Comments |</a>
        <a href="#" onClick={() => handleRemove(id)}> Remove |</a>
        <a href="#"> Edit</a>

      </div>

    </StyledRowLeftSide>
  );
}
