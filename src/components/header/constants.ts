import styled from 'styled-components';
import { TextComponent } from '..';

export interface Props {
  tabs: string[];
  selectedIndex: number;
  color?: string;
  onClick(): void;
};

export const StyledSideNav = styled.div`
    position: fixed;    
    height: 100%;
    width: 100px;    
    z-index: 1;    
    top: 100px;
    left: 100px;
    overflow-x: hidden;
`;

export const StyledNavItem = styled.div`
  text-align: left; 
  margin-bottom: 15px;
  a {
    text-decoration: none;
    &:hover {
      opacity: 0.5;
    }  
  }
`;

export const SubMenu = styled.div`
  padding-top: 10px;
`;

export const SubItem = styled(TextComponent)`
  padding-left: 25px;
`;
