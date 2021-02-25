import styled from 'styled-components';

export interface Props {
    image: any;
    title: string;
    content: string;
};

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    height: 375px;
    width: 375px;
    padding-right: 95px;

    @media screen and (max-width: 800px) {
        padding: 0;
        height: 315px;
        width: 315px;
    }
`;