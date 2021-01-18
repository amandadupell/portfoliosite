import React from 'react';
import { Props, TYPE, SIZE } from './constants';
import { Story } from '@storybook/react';
import TextComponent from './textComponent';

export default {
    title: 'Atoms/Text',
    component: TextComponent,
    argTypes: {
        text: { control: 'text' },
        size: { control: { type: 'select', options: [SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE], }, },
        type: { control: { type: 'select', options: [TYPE.BODY, TYPE.HEADER, TYPE.TITLE], }, },
        color: { control: 'color' },
        bold: { control: 'boolean' },
    },
};

const Template: Story<Props> = args => <TextComponent {...args} />;

const TEXT_STORY_ARGS = {
    text: 'Hello!',
    type: TYPE.TITLE,
    size: SIZE.LARGE,
};

export const TextStoryTemplate = Template.bind({});
TextStoryTemplate.args = {
    ...TEXT_STORY_ARGS
};
