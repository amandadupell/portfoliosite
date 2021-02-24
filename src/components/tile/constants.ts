import styled from 'styled-components';
import { TYPE } from '../photoBox/constants';
import TextComponent from '../textComponent';
import { Link } from 'react-router-dom';

export interface Props {
    className?: any;
    variant: string;
    title: string;
    description: string;
    skills?: string;
    onClick(): void;
    image1: any;
    image2: any;
    imgH: number;
    imgW: number;
    xOffset: number;
    yOffset: number;
};

interface StoryProps {
    className?: any;
    variant?: string;
    xOffset?: number;
};

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const TextContainer = styled.div<StoryProps>`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: ${({ variant, xOffset }) => {
        return variant === TYPE.ABOUT ? xOffset : null;
    }}px;
    width: ${({ variant }) => {
        return variant === TYPE.ABOUT ? 100 : variant === TYPE.PROJECT ? 24 : null;
    }}%;
    padding-left: ${({ variant }) => {
        return variant === TYPE.ABOUT ? 100 : variant === TYPE.PROJECT ? 80 : null;
    }}px;

    @media screen and (max-width: 800px) {
        ${({ variant }) => {
        return variant === TYPE.ABOUT ? 'width: 100%;' : variant === TYPE.PROJECT ? 'width: 80%; margin-right: 15px;' : null
    }};
    }
`;

export const Title = styled(TextComponent)`
    padding-bottom: ${
    (props: { variant: string }) => {
        return props.variant === TYPE.ABOUT ? 50 : props.variant === TYPE.PROJECT ? 15 : null;
    }
    }px;

    @media screen and(max-width: 800px) {
        padding-top: 10px;
    }
`;

export const DescriptionContainer = styled.div`
    white-space: pre-line;
`;

export const Description = styled(TextComponent)`
    padding-bottom: 30px;
`;

export const Skills = styled(TextComponent)`
    padding-bottom: 20px;
`;

export const ArrowContainer = styled(Link)`
    cursor: pointer;
`;