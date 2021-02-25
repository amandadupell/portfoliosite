import React from 'react';
import { SidebarData } from './sidebarData';
import SubMenu from './subMenu';
import { SidebarNav, Container } from './constants';

const Header = () => {
    return (
        <>
            <Container>
                <SidebarNav>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarNav>
            </Container>
        </>
    );
};

export default Header;
