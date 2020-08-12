/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledRowCenterSide = styled.div`
  color: yellow;
  width: 100%;
  height: 170px;

  /* border: 2px solid black; */
  box-sizing: border-box;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &::before {
    content: '';
    border: solid 2px #e8e8e8;
    position: absolute;
    height: 50%;
    left: 0;
    top: 24%;
  }

  .top {
    color: #e8e8e8;
  }

  .middle {
    color: black;
  }

  button {
    background: hsla(230, 84%, 63%, 1);
    padding: 10px 3rem;
    box-sizing: border-box;
    color: white;
    border: none;
    border-radius: 4px;
  }
`;

export default function StyledRowRight() {
  return (
    <StyledRowCenterSide>
      <p className="top">
        CURRENT CHAPTER
      </p>
      <p className="middle">
        Chapter 17
      </p>
      <button type="submit" className="bottom">
        UPDATE PROGRESS
      </button>
    </StyledRowCenterSide>
  );
}
