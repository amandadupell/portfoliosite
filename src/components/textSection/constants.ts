import styled from 'styled-components';
import TextComponent from '../textComponent';

export interface Props {
    title: string;
    description: string;
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Description = styled(TextComponent)`
    padding-top: 25px;
`;

export const Title = styled(TextComponent)`
`;