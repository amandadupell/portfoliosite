import styled from 'styled-components';
import TextComponent from '../textComponent';

export interface Props {
    title?: string;
    content?: string;
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;

    @media screen and (max-width: 800px) {
        width: 330px;
    }
`;

export const Title = styled(TextComponent)`
    padding-bottom: 50px;

    @media screen and (max-width: 800px) {
        padding-bottom: 25px;
        padding-top: 60px;
    }
`;

export const Content = styled(TextComponent)`
    white-space: pre-line;
`;

