import React from 'react';
import { Props } from './constants';
import { Story } from '@storybook/react';
import Header from './header';

export default {
    title: 'Molecules/Header',
    component: Header,
    argTypes: {
        tabs: { control: { type: 'array', options: ['home', 'about', 'projects'], }, },
        color: { control: 'color' },
        onClick: { action: 'clicked' }
    },
};

const Template: Story<Props> = args => <Header {...args} />;

const HEADER_STORY_ARGS = {
    tabs: ['home', 'about', 'projects'],
    selectedIndex: 0,
    onClick: () => { }
};

export const HeaderStoryTemplate = Template.bind({});
HeaderStoryTemplate.args = {
    ...HEADER_STORY_ARGS
};

