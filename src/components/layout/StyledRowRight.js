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
  align-items: center;
  justify-content: space-between;
`;

export default function StyledRowRight(props) {
  const { children } = props;
  return (
    <StyledRowCenterSide>
      {children}
    </StyledRowCenterSide>
  );
}
