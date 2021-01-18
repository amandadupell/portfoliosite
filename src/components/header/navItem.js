import React from 'react';
import { Link } from "react-router-dom";
import { TextComponent } from '..';
import { StyledNavItem, SubItem, SubMenu } from './constants';

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    };

    render() {
        const { active } = this.props;

        return (
            <>
                <StyledNavItem active={active}>
                    <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                        <TextComponent bold={active} text={this.props.name} type={'header'} size={'large'} />
                    </Link>
                    <SubMenu>
                        {
                            this.props.subNav && this.props.subNav.map((item) => {
                                console.log(item.title);
                                console.log(item.path);
                                return (
                                    <Link to={item.path} className={item.css} onClick={this.handleClick}>
                                        <SubItem text={item.title} type={'header'} size={'large'} />
                                    </Link>
                                );
                            })
                        }
                    </SubMenu>
                </StyledNavItem>
            </>
        );
    };
};

export default NavItem;
