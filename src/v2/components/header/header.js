import React from 'react';
import { SidebarData } from './sidebarData';
import SubMenu from './subMenu';
import { SidebarNav } from './constants';

const Header = () => {
    return (
        <>
            <SidebarNav>
                {SidebarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                })}
            </SidebarNav>
        </>
    );
};

export default Header;
