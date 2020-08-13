/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledRowCenterSide = styled.div`
  width: 100%;
  height: 170px;
  box-sizing: border-box;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 7rem;
    transform: rotate(-60deg);
    color: hsla(230, 84%, 63%, 1);
  }

  h2 {
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
  }

  h5 {
    opacity: 0.5;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
  }

`;

export default function StyledRowCenter() {
  return (
    <StyledRowCenterSide>
      <i className="fas fa-circle-notch" />
      <div className="content">
        <h2>85%</h2>
        <h5>
          Completed
        </h5>
      </div>
    </StyledRowCenterSide>
  );
}
