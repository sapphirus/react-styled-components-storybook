import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import backgrounds from "@storybook/addon-backgrounds";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

storiesOf('Controls', module)
  .addDecorator(backgrounds([
    { name: "ao", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('Input fields', () => <InputText />);
