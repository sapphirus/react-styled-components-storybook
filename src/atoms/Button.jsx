import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';

const buttonColors = {
  Default: { border: Colors["Default"], background: Colors["BgPrimary"], color: Colors["Default"]},
  Primary: { border: Colors["Primary"], background: Colors["Primary"], color: Colors["White"]},
  Facebook: { border: Colors["Facebook"], background: Colors["Facebook"], color: Colors["White"]},
  Line: { border: Colors["Line"], background: Colors["Line"], color: Colors["White"]}
}

const getColor = (color) => buttonColors[color] || buttonColors.Default;

const Button = styled.button`
  border: 1px solid ${({ color }) => getColor( color ).border };
  background-color: ${({ color }) => getColor( color ).background };
  border-radius: 22px;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  text-align: center;
  padding: 0 1rem;
  color: ${({ color }) => getColor(color).color};
  font-size: 1rem;
  box-shadow: 2px 2px 5px rgba(0,0,0,.15);
`

export default Button;