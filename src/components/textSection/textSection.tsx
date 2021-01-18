import React, { FunctionComponent } from 'react';
import { Container, Description, Title, Props } from './constants';

const TextSection: FunctionComponent<Props> = ({
    title,
    description
}) => {
    return (
        <Container>
            <Title type={'title'} size={'small'} text={title} />
            <Description type={'title'} size={'small'} text={description} />
        </Container>
    );
};

export default TextSection;