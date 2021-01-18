import React, { FunctionComponent } from 'react';
import { Props, StyledText } from './constants';

const TextComponent: FunctionComponent<Props> = ({
    className,
    text,
    type,
    size,
    color,
    bold,
    onClick
}) => {
    return (
        <StyledText className={className} type={type} size={size} color={color} bold={bold} onClick={onClick}>{text}</StyledText>
    );
};

export default TextComponent;