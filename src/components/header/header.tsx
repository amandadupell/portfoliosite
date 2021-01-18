import React, { Component } from 'react';
import { Props, Container } from './constants';
import TextComponent from '../textComponent';

interface State {
    selectedIndex: number;
};

class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    };

    componentDidUpdate(prevProps: Props) {
        if (prevProps !== this.props) {
            const { selectedIndex } = this.props;
            this.setState({ selectedIndex: selectedIndex });
        };
    };

    render() {
        return (
            <Container>{
                this.props.tabs.map((item, index) => {
                    return (<TextComponent color={this.props.color} text={item} type={'header'} size={'large'} bold={this.props.selectedIndex === index} onClick={() => this.props.onClick} />)
                })
            }</Container>
        );
    };
};

export default Header;