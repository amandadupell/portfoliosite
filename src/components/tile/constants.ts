import styled from 'styled-components';
import { TYPE } from '../photoBox/constants';
import TextComponent from '../textComponent';
import { Arrow } from '../../assets/svgComponents';

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
`;

export const TextContainer = styled.div<StoryProps>`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: ${({ variant, xOffset }) => {
        return variant === TYPE.ABOUT ? xOffset : null;
    }}px;
    width: ${({ variant }) => {
        return variant === TYPE.ABOUT ? 30 : variant === TYPE.PROJECT ? 24 : null;
    }}%;
    padding-left: ${({ variant }) => {
        return variant === TYPE.ABOUT ? 100 : variant === TYPE.PROJECT ? 80 : null;
    }}px;
`;

export const Title = styled(TextComponent)`
    padding-bottom: ${(props: { variant: string }) => {
        return props.variant === TYPE.ABOUT ? 50 : props.variant === TYPE.PROJECT ? 15 : null;
    }}px;
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

export const ArrowContainer = styled(Arrow)`
    cursor: pointer;
`;