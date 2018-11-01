import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../colors';

const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 2px solid ${ Colors.primaryColor };
  color: ${ Colors.primaryColor };
  padding: 14px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  line-height: 1;

  :hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }

  :focus {
    outline: none;
  }

  @media (max-width: 700px) {
    background-color: #fff;
  }
`;

export default Button;
