import React from 'react';
import {Title, TitleSize} from './title';

export default {
  title: 'Title',
  component: Title,
}

const Template = (args) => <Title {...args} />;

export const Big = Template.bind({});
Big.args = {
  children: "Заголовок",
  fontSize: "44px",
  lineHeight: "50px",
}

export const Medium = Template.bind({});
Medium.args = {
  children: "Заголовок",
  fontSize: "36px",
  lineHeight: "41px"
}

export const Small = Template.bind({});
Small.args = {
  children: "Заголовок",
  size: TitleSize.SMALL
}

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  children: "Заголовок",
  fontSize: "18px",
  lineHeight: "27px"
}

