import React from 'react';
import { Props, TYPE } from './constants';
import { Story } from '@storybook/react';
import PhotoBox from './photoBox';
import AneueGrad from '../../assets/photos/aneuegradient.png';
import Aneue from '../../assets/photos/aneue.png';

export default {
    title: 'Molecules/Photo Box',
    component: PhotoBox,
    argTypes: {
        xOffset: { control: 'number' },
        yOffset: { control: 'number' },
        type: { control: { type: 'select', options: [TYPE.ABOUT, TYPE.PROJECT] } }
    },
};

const Template: Story<Props> = args => <PhotoBox {...args} />;

const PHOTOBOX_STORY_ARGS = {
    image1: <Aneue />,
    image2: <AneueGrad />,
    xOffset: 10,
    yOffset: 10,
    type: 'about'
};

export const PhotoBoxStoryTemplate = Template.bind({});
PhotoBoxStoryTemplate.args = {
    ...PHOTOBOX_STORY_ARGS
};
