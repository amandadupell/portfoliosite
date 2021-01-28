import styled from 'styled-components';

export interface Props {
    className?: any;
    type: string;
    image1: any;
    image2: any;
    xOffset?: number;
    yOffset?: number;
    imgH: number;
    imgW: number;
};

interface StoryProps {
    type?: string;
    className?: any;
    xOffset?: number;
    yOffset?: number;
};

export const TYPE = {
    ABOUT: 'about',
    PROJECT: 'project'
};

export const Container = styled.div`
    display: flex;
    position: relative;
`;

function getSize(type: string | undefined) {
    switch (type) {
        case TYPE.ABOUT:
            return 'height: 250px; width: 250px;'
        case TYPE.PROJECT:
            return 'height: 300px; width: 300px;'
        default:
            return null;
    }
};

export const ColorBox = styled.img<StoryProps>`
    position: relative;
    ${({ type }) => {
        return getSize(type);
    }};
`;

export const StyledImage = styled.img<StoryProps>`
    position: absolute;

    top: ${({ xOffset }) => {
        return `${xOffset}px`;
    }};
    ${({ yOffset }) => {
        return yOffset ? `left: ${yOffset}px;` : null;
    }};

    animation: move 1s ease-in-out;

    @keyframes move {
        from {
            transform: translateY(${({ yOffset }) => { return `${yOffset}px`; }});
        };
        to {
            transform: translateY(-${({ yOffset }) => { return `${yOffset}px`; }});
        };
    };
`;