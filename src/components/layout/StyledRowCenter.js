/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledRowCenterSide = styled.div`
  color: yellow;
  width: 100%;
  height: 170px;
  box-sizing: border-box;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    font-size: 7rem;
    transform: rotate(-60deg);
    color: hsla(230, 84%, 63%, 1);
  }
`;

export default function StyledRowCenter(props) {
  return (
    <StyledRowCenterSide>
      <i className="fas fa-circle-notch" />
    </StyledRowCenterSide>
  );
}
