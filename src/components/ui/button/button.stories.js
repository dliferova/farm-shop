import React from "react";
import Button from './button';

export default {
  title: "Button",
  component: Button
}

const Template = (args) => <Button {...args} />;

export const Ordinary =  Template.bind({});

Ordinary.args = {
  minWidth: '260px',
}

export const Large =  Template.bind({});

Large.args = {
  minWidth: '320px',
}
