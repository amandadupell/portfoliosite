import React, { FunctionComponent } from 'react';
import { BottomImage, Container, PhotoContainer, Props, TopImage } from './constants';
import TileTextBlock from '../tileTextBlock';

const TileBlock: FunctionComponent<Props> = ({ className, image1, image2, title, description, skills }) => {
    return (
        <Container className={className}>
            <PhotoContainer>
                <BottomImage src={image1} />
                <TopImage src={image2} />
            </PhotoContainer>
            <TileTextBlock title={title} description={description} skills={skills} />
        </Container>
    );
};

export default TileBlock;