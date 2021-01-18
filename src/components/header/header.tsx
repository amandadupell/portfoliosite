import React from 'react';
import { StyledSideNav } from './constants';

class SideNav extends React.Component {
    render() {
        return (
            <StyledSideNav></StyledSideNav>
        );
    };
};

class Header extends React.Component {
    render() {
        return (
            <SideNav></SideNav>
        );
    };
};

export default Header;