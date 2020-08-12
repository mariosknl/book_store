/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledRowLeftSide = styled.div`
  color: yellow;
  width: 100%;
  height: 170px;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 20px 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export default function StyledRowLeft(props) {
  const { children } = props;
  return (
    <StyledRowLeftSide>
      {children}
    </StyledRowLeftSide>
  );
}
