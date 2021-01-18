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

export const StyledSideNav = styled.div`
    position: fixed;    
    height: 100%;
    width: 100px;    
    z-index: 1;    
    top: 1em;
    overflow-x: hidden;
    padding-top: 10px;
`;