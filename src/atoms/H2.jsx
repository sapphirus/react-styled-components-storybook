import React from 'react';  //ライブラリ等の読み込み(jsxを使う)
import styled from 'styled-components';
import Colors from './Colors';

const H2 = styled.h2`
  font-size: .8rem;
  text-align: center; /* これもデフォルトがどれか定義しておくといいかも */
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

export default H2; //書いた内容が外部からimportして使えるようになる -> index.stories.jsなど 