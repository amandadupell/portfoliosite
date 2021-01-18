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
`;

export const DropdownLink = styled(Link)`
    text-decoration: none;

    &:hover {
        cursor: pointer;
        border-left: 4px solid ${$orange};
    };
`;

export const SubItem = styled(TextComponent)`
    padding-left: 125px;
`;

export const MainItem = styled(TextComponent)`
    padding-left: 100px;
`;

export const SidebarNav = styled.nav`
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    text-align: left;
    top: 100px;
`;