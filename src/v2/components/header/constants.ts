import styled from 'styled-components';
import TextComponent from '../textComponent';
import { Link } from 'react-router-dom';
import { $orange, $white } from '../../../assets/colors';

export const Container = styled.div`
    display: flex;
    position: fixed;
    top: 100px;
    left: 100px;
    z-index: 9999;

    @media screen and (max-width: 800px) {
        top: 15px;
        left: 15px;
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    text-decoration: none;
    
    &:hover {
        cursor: pointer;
    };
    &:active {
        color: ${$orange};
    };
`;

export const DropdownLink = styled(Link)`
    text-decoration: none;

    &:hover {
        cursor: pointer;
        border-left: 4px solid ${$orange};
    };

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const MainItem = styled(TextComponent)`
    &:active {
        color: ${$orange};
    }
`;

export const SubItem = styled(MainItem)`
    margin-left: 25px;
`;

export const SidebarNav = styled.nav`
    display: flex;
    flex-direction: column;
    text-align: left;

    @media screen and (max-width: 800px) {
        padding: 5px;
        background-color: ${$white}CC;
    }
`;