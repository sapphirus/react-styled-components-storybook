import React from 'react';  //ライブラリ等の読み込み(jsxを使う)
import styled from 'styled-components';
import Colors from './Colors';

const H1 = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: ${props => Colors[props.color] || Colors.Default };
  /* color: ${props => { 
    if (Colors[props.color]) {
      return Colors[props.color];
    } else 
     return Colors.Default
  }}
    color: ${Colors.Default}; */


  @media screen (min-width: 415px) {
    font-size: 1.5rem;
  }
`;

export default H1; //書いた内容が外部からimportして使えるようになる -> index.stories.jsなど 