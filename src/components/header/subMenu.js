import { TextComponent } from "..";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState } from 'react';

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    text-decoration: none;
    
    &:hover {
        cursor: pointer;
    };
`;

const DropdownLink = styled(Link)`
    text-decoration: none;

    &:hover {
        cursor: pointer;
    };
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    console.log(subnav)

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    <TextComponent text={item.title} type={'header'} size={'large'} />
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index}>
                            <TextComponent text={item.title} type={'header'} size={'large'} />
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;