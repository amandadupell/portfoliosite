import React from 'react';
import { Props } from './constants';
import { Story } from '@storybook/react';
import Footer from './footer';

export default {
    title: 'Molecules/Footer',
    component: Footer,
    argTypes: {
        onClick: { action: 'clicked' }
    },
};

const Template: Story<Props> = args => <Footer {...args} />;

const FOOTER_STORY_ARGS = {
};

export const FooterStoryTemplate = Template.bind({});
FooterStoryTemplate.args = {
    ...FOOTER_STORY_ARGS
};

