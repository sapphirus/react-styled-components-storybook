import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import backgrounds from "@storybook/addon-backgrounds";
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';

import { Welcome } from '@storybook/react/demo';

import Button from '../src/atoms/button';
import InputText from '../src/atoms/inputtext';
import ProgressBar from '../src/atoms/progress'

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Button onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Controls', module)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([
    { name: "ao", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('Input fields', () => <InputText type={select('Type', {
    Text: 'text',
    Password: 'password',
    Number: 'number'
  }, 'text')}/>);

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add('ProgressBar', () => <ProgressBar value={number('Range', '40', {
     range: true,
     min: 0,
     max: 100,
     step: 1,
  })} />);
