import styled from 'styled-components';

export interface Props {
    className?: any;
    image1: any;
    image2: any;
    title: string;
    description: string;
    skills: string;
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

export const PhotoContainer = styled.div`
    display: flex;
    padding-right: 70px;

    position: relative;

    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;

export const BottomImage = styled.img`
    position: relative;
    height: 300px;
    width: 300px;
`;

export const TopImage = styled(BottomImage)`
    position: absolute;

    top: 30px;
    left: 30px;

    animation: move 1s ease-in-out;

    @keyframes move {
        from {
            transform: translateY(0);
        };
        to {
            transform: translateY(30);
        };
    };
`;