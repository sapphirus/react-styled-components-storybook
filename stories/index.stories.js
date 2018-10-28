import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import backgrounds from "@storybook/addon-backgrounds";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import { Button, Welcome } from '@storybook/react/demo';

import InputText from '../src/atoms/inputtext';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Controls', module)
  .addDecorator(backgrounds([
    { name: "ao", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('Input fields', () => <InputText />);
