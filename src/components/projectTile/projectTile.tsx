import React, { FunctionComponent } from 'react';

interface Props {
    title: string;
    description: string;
    skills: string;
    boxColor: string;
    imageURL: string;
    xOffset: number;
    yOffset: number;
};

const ProjectTile: FunctionComponent<Props> = ({
    title,
    description,
    skills,
    boxColor,
    imageURL,
    xOffset,
    yOffset
}) => {
    return <></>;
};

export default ProjectTile;