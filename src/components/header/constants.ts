import styled from 'styled-components';

export interface Props {
    tabs: string[];
    selectedIndex: number;
    color?: string;
    onClick(): void;
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 130px;
    width: 100px;
    justify-content: space-between;
    padding-top: 50px;
    padding-left: 50px;
`;
