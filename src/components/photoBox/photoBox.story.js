import React from 'react';
import { TYPE } from './constants';
import PhotoBox from './photoBox';
import AneueGrad from '../../images/aneuegradient.png';
import Aneue from '../../images/aneue.png';

export default {
    title: 'Molecules/Photo Box',
    component: PhotoBox,
    argTypes: {
        xOffset: { control: 'number' },
        yOffset: { control: 'number' },
        type: { control: { type: 'select', options: [TYPE.ABOUT, TYPE.PROJECT] } }
    },
};

const Template = args => <PhotoBox {...args} />;

const PHOTOBOX_STORY_ARGS = {
    image1: Aneue,
    image2: AneueGrad,
    imgH: 313,
    imgW: 300,
    xOffset: 10,
    yOffset: 10,
    type: 'about'
};

export const PhotoBoxStoryTemplate = Template.bind({});
PhotoBoxStoryTemplate.args = {
    ...PHOTOBOX_STORY_ARGS
};
