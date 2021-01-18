import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './sidebarData';
import SubMenu from './subMenu';

const SidebarNav = styled.nav`
    height: 100vh;
    display: flex;
    position: fixed;
    text-align: left;
`;

const SidebarWrap = styled.div`
`;

const Sidebar = () => {
    return (
        <>
            <SidebarNav>
                <SidebarWrap>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    );
};

export default Sidebar;
