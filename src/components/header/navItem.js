import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TextComponent } from '../../components';
import { $orange, $black } from '../../assets/colors';
import { StyledNavItem } from './constants';

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    };

    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <TextComponent text={this.props.name} type={'header'} size={'large'} color={active ? $orange : undefined} />
                </Link>
            </StyledNavItem>
        );
    };
};

export default NavItem;
