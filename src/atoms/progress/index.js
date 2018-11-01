import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../colors';

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  box-sizing: border-box;
  background-color: ${ Colors.black };
  border-radius: 2px;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${ props => props.value || "100" }%;
    height: 4px;
    background-color: ${ Colors.primaryColor };
    border-radius: 2px;
  }
`;

export default ProgressBar;
