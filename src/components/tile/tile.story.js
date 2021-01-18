import React from 'react';
import Tile from './tile';
import { TYPE } from '../photoBox/constants';

import AneueGrad from '../../images/aneuegradient.png';
import Aneue from '../../images/aneue.png';

export default {
    title: 'Molecules/Tile',
    component: Tile,
    argTypes: {
        variant: { control: { type: 'select', options: [TYPE.ABOUT, TYPE.PROJECT] } },
        title: { control: 'text' },
        description: { control: 'text' },
        skills: { control: 'text' },
        xOffset: { control: 'number' },
        yOffset: { control: 'number' },
    },
};

const Template = args => <Tile {...args} />;

const PROJECT_ABOUT = 'Some people use scent as a form of comfort and a way to ground themselves. Exploring my own personal brand identity, I created the fragrance brand Aneue to encourage people to try new things while they also discover a variety of smells from a fragrance line.';
const SKILLS = 'Branding | Adobe Dimension | Product Design | App Design';

const PROJ_TILE_STORY_ARGS = {
    variant: 'project',
    image1: Aneue,
    image2: AneueGrad,
    imgH: 313,
    imgW: 300,
    xOffset: 10,
    yOffset: 10,
    title: 'Aneue',
    description: PROJECT_ABOUT,
    skills: SKILLS,
};

export const ProjectTileStoryTemplate = Template.bind({});
ProjectTileStoryTemplate.args = {
    ...PROJ_TILE_STORY_ARGS
};

const ABOUT = `As you may already know, my name is Amanda Dupell. I am a 4th-year student at Northeastern University in Boston, pursuing a combined degree in Computer Science and Design. My interests in both coding and design allow me to study a range of topics across both disciplines. I am most curious accessibility, artificial intelligence, design systems, wireframing, prototyping, and user research.\n \nMy favorite book is The Magic Strings of Frankie Presto; my favorite movie is Kill Bill; my favorite color is orange; and my favorite type of pasta is penne alla vodka.On a normal day, you can find me reading the latest book recommendation, painting for fun, or arguing with my roommates over which movie we want to watch that night.`;

const ABOUT_TILE_STORY_ARGS = {
    variant: 'about',
    image1: Aneue,
    image2: AneueGrad,
    imgH: 500,
    imgW: 500,
    xOffset: 10,
    yOffset: 10,
    title: 'Hi, there!',
    description: ABOUT,
};

export const AboutTileStoryTemplate = Template.bind({});
AboutTileStoryTemplate.args = {
    ...ABOUT_TILE_STORY_ARGS
};
