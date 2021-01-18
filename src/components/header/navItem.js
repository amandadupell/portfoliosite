import React from 'react';
import { Link } from "react-router-dom";
import { TextComponent } from '..';
import { StyledNavItem, SubItem, SubMenu } from './constants';

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    };

    onSubNavClick = () => {
        this.setState({ subNav: !this.state.subNav })
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
                                return (
                                    <Link to={item.path} className={item.css} onClick={this.handleClick}>
                                        <SubItem bold={this.props.path === item.path} text={item.title} type={'header'} size={'large'} />
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
