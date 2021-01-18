import React from 'react';
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

const Template = args => <Header {...args} />;

const HEADER_STORY_ARGS = {
};

