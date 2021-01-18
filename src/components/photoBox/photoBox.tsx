import React, { FunctionComponent } from 'react';
import { Container, ColorBox, StyledImage, Props } from './constants';

const PhotoBox: FunctionComponent<Props> = ({
    xOffset,
    yOffset,
    image1,
    image2,
    type
}) => {
    console.log(image1);
    console.log(image2);
    return (
        <Container>
            <ColorBox src={image2} type={type} />
            <StyledImage src={image1} type={type} xOffset={xOffset} yOffset={yOffset} />
        </Container>
    );
};

export default PhotoBox;