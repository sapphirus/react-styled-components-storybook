import React, { Component } from 'react';
import styled, { css } from 'styled-components';
// import '../../../scss/basic.scss';

const InputText = styled.input.attrs({
  type: 'text',
})`
  background: #fff;
  border-radius: 3px;
  border: 2px solid #555;
  color: 333;
  margin: 0 1em;
  padding: 0.25em 1em;

  ::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fcc;
  }
`;

export default InputText;
