import React, { FunctionComponent } from 'react';
import { Container, Image, Props } from './constants';
import AboutTextBlock from '../aboutTextBlock';

const AboutBlock: FunctionComponent<Props> = ({ image, title, content }) => {
    return (
        <Container>
            <Image src={image} />
            <AboutTextBlock title={title} content={content} />
        </Container>
    );
};

export default AboutBlock;