import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import backgrounds from "@storybook/addon-backgrounds";
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { Welcome } from '@storybook/react/demo';
import H1 from "../src/atoms/H1";
import H2 from "../src/atoms/H2";
import Button from "../src/atoms/Button";


const Color = (props) => {
  const style = {
    backgroundColor: props.color,
    color: '#fff',
    width: '200px',
    height: '120px',
    boxSizing: 'border-box',
    padding: '16px'
  }
  return (
    <div style={style}>{props.color}</div>
  )
}

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// Atoms
storiesOf('Atoms/Headings', module)
  .add('H1', () => (<H1>Hello</H1>))
  .add('H2', () => (<H2>Hello</H2>));

storiesOf('Atoms/Colors', module)
  .add('Default', () => (<Color color="#3c2c1c" />))
  .add('Primary', () => (<Color color="#887766"></Color>))
  .add('Disabled', () => (<Color color="#999"></Color>))
  .add('Danger', () => (<Color color="#d11"></Color>))
  .add('Facebook', () => (<Color color="#203C88"></Color>))
  .add('Line', () => (<Color color="#00B300"></Color>))
  .add('BgPrimary', () => (<Color color="#fff"></Color>))
  .add('BgSecondary', () => (<Color color="#FCF9F3"></Color>))
  .add('BgDanger', () => (<Color color="#f9d5d5"></Color>));

storiesOf('Atoms/Buttons', module)
  .addDecorator(withKnobs)
  .add('Default', () => (<Button color={select('Colors', { Default: 'Default', Primary: "Primary", Facebook: 'Facebook', Line: 'Line'}, 'Default')}>Hello</Button>))
  .add('Small', () => (<Button>Hello</Button>))
  .add('Large', () => (<Button>Hello</Button>));

storiesOf('Atoms/Labels', module)
  .add('Default', () => (<span>Label</span>))
  .add('Required', () => (<span>Label</span>));

storiesOf('Atoms/InputField', module)
  .add('Default', () => (<span>Label</span>))
  .add('Email', () => (<span>Label</span>))
  .add('Password', () => (<span>Label</span>));

// Molecules
// Organisms
// Templates
