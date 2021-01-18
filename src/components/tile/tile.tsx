import React, { FunctionComponent } from 'react';
import { Props, Container, TextContainer, Title, Description, Skills, DescriptionContainer, ArrowContainer } from './constants';
import PhotoBox from '../photoBox';
import { TYPE } from '../photoBox/constants';
import Arrow from '../../assets/svgComponents/arrowComponent';

const Tile: FunctionComponent<Props> = ({
    className,
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
}) => {
    return (
        <Container className={className}>
            <PhotoBox xOffset={xOffset} yOffset={yOffset} type={variant} image1={image1} image2={image2} imgH={imgH} imgW={imgW} />
            <TextContainer variant={variant} xOffset={xOffset}>
                <Title text={title} type={'title'} size={variant === TYPE.ABOUT ? 'large' : variant === TYPE.PROJECT ? 'small' : null} variant={variant} bold />
                <DescriptionContainer>
                    <Description text={description} type={'body'} size={variant === TYPE.ABOUT ? 'large' : variant === TYPE.PROJECT ? 'medium' : null} />
                </DescriptionContainer>
                {
                    variant === TYPE.PROJECT ?
                        <>
                            <Skills text={skills} type={'body'} size={'small'} />
                            <ArrowContainer to={`projects/${title.replace(/\s+/g, '').toLocaleLowerCase()}`}>
                                <Arrow />
                            </ArrowContainer>
                        </>
                        :
                        null
                }
            </TextContainer>
        </Container>
    );
};

export default Tile;