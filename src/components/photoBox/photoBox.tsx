import React, { FunctionComponent } from 'react';
import { Container, ColorBox, StyledImage, Props } from './constants';

const PhotoBox: FunctionComponent<Props> = ({
    className,
    xOffset,
    yOffset,
    image1,
    image2,
    imgH,
    imgW,
    type
}) => {
    return (
        <Container className={className}>
            <ColorBox src={image2} type={type} yOffset={yOffset} />
            <StyledImage height={imgH} width={imgW} src={image1} type={type} xOffset={xOffset} yOffset={yOffset} />
        </Container>
    );
};

export default PhotoBox;