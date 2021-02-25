import React, { FunctionComponent } from 'react';
import { Container, Props, Title, Content } from './constants';

const AboutTextBlock: FunctionComponent<Props> = ({ title, content }) => {
    return (
        <Container>
            <Title text={title} type={'title'} size={'large'} />
            <Content text={content} type={'body'} size={'large'} />
        </Container>
    );
};

export default AboutTextBlock;