import React from 'react';
import { StyledSideNav } from './constants';
import NavItem from './navItem';

class SideNav extends React.Component<{}, { activePath: string, items: any[] }> {
    constructor(props) {
        super(props);
        this.state = {
            activePath: '/',
            items: [
                {
                    path: '/',
                    name: 'home',
                    key: 1
                },
                {
                    path: '/about',
                    name: 'about',
                    key: 2
                },
                {
                    path: '/projects',
                    name: 'projects',
                    key: 3
                },
            ]
        };
    };

    onItemClick = (path) => {
        this.setState({ activePath: path });
    };

    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key} />
                        )
                    })
                }
            </StyledSideNav>
        );
    }
};

class Header extends React.Component {
    render() {
        return (
            <SideNav></SideNav>
        );
    };
};

export default Header;
