import React, { FunctionComponent } from 'react';
import { Props, Container, TextContainer, Title, Description, Skills, DescriptionContainer } from './constants';
import PhotoBox from '../photoBox';
import { TYPE } from '../photoBox/constants';
import { Arrow } from '../../assets/svgComponents';

const Tile: FunctionComponent<Props> = ({
    image1,
    image2,
    imgH,
    imgW,
    xOffset,
    yOffset,
    variant,
    title,
    description,
    skills,
    onClick
}) => {
    return (
        <Container>
            <PhotoBox xOffset={xOffset} yOffset={yOffset} type={variant} image1={image1} image2={image2} imgH={imgH} imgW={imgW} />
            <TextContainer variant={variant}>
                <Title text={title} type={'title'} size={variant === TYPE.ABOUT ? 'large' : variant === TYPE.PROJECT ? 'small' : null} variant={variant} bold />
                <DescriptionContainer>
                    <Description text={description} type={'body'} size={variant === TYPE.ABOUT ? 'large' : variant === TYPE.PROJECT ? 'medium' : null} />
                </DescriptionContainer>
                {
                    variant === TYPE.PROJECT ?
                        <>
                            <Skills text={skills} type={'body'} size={'small'} />
                            <Arrow onClick={() => onClick} />
                        </>
                        :
                        null
                }
            </TextContainer>
        </Container>
    );
};

export default Tile;