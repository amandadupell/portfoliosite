import React, { FunctionComponent } from 'react';
import { Props, StyledText } from './constants';

const TextComponent: FunctionComponent<Props> = ({
    text,
    type,
    size,
    color,
    bold,
    onClick
}) => {

    return <StyledText type={type} size={size} color={color} bold={bold} onClick={onClick}>{text}</StyledText>;
};

export default TextComponent;