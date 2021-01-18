import React, { FunctionComponent } from 'react';
import { Container, Description, Title, Props } from './constants';

const TextSection: FunctionComponent<Props> = ({
    className,
    title,
    description
}) => {
    return (
        <Container className={className}>
            <Title type={'title'} size={'small'} text={title} bold />
            <Description type={'body'} size={'large'} text={description} />
        </Container>
    );
};

export default TextSection;