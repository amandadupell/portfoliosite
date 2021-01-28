import styled from 'styled-components';
import { TextComponent } from '..';
import { Link } from 'react-router-dom';
import { $orange } from '../../assets/colors';

export const SidebarLink = styled(Link)`
    display: flex;
    margin-bottom: 10px;
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    text-align: left;
    top: 100px;
    left: 100px;

`;