import styled from 'styled-components';
import TextComponent from '../textComponent';
import { Link } from 'react-router-dom';


export interface Props {
    title: string;
    description: string;
    skills: string;
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;

    @media screen and (max-width: 800px) {
        padding-top: 30px;
    }
`;

export const Title = styled(TextComponent)`
    padding-bottom: 17px;
`;

export const Description = styled(TextComponent)`
    padding-bottom: 40px;
`;

export const Skills = styled(TextComponent)`
    padding-bottom: 20px;
`;

export const ArrowContainer = styled(Link)`
    cursor: pointer;
`;