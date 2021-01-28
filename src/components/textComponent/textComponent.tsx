import React, { FunctionComponent } from 'react';
import { Props, StyledText } from './constants';

const TextComponent: FunctionComponent<Props> = ({
    className,
    text,
    type,
    size,
    color,
    bold,
    active,
    onClick
}) => {
    return (
        <StyledText active={active} className={className} type={type} size={size} color={color} bold={bold} onClick={onClick}>{text}</StyledText>
    );
};

export default TextComponent;