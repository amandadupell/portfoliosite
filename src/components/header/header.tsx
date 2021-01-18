import React from 'react';
import { StyledSideNav } from './constants';
import NavItem from './navItem';

class SideNav extends React.Component<{}, { activePath: string, items: any[], subNav: boolean }> {
    constructor(props) {
        super(props);
        this.state = {
            activePath: '/',
            items: [
                {
                    path: '/',
                    name: 'home',
                    key: 1,
                },
                {
                    path: '/about',
                    name: 'about',
                    key: 2
                },
                {
                    path: '/projects',
                    name: 'projects',
                    subNav: [
                        {
                            title: 'aneue',
                            path: '/projects/aneue'
                        },
                        {
                            title: 'fregie',
                            path: '/projects/fregie'
                        },
                        {
                            title: 'grind',
                            path: '/projects/grind'
                        },
                        {
                            title: 'try vegan',
                            path: '/projects/tryvegan'
                        },
                    ],
                    key: 3
                },
            ],
            subNav: true,
        };
    };


    onItemClick = (path) => {
        this.setState({ activePath: path });
        this.setState({ subNav: !this.state.subNav });
    };

    render() {

        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key} subNav={item.subNav} />
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
