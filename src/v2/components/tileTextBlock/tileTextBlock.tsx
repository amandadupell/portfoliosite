import React, { FunctionComponent } from 'react';
import { Container, Props, Title, Description, Skills, ArrowContainer } from './constants';
import { Arrow } from '../../../assets/svgComponents';

const TileTextBlock: FunctionComponent<Props> = ({ title, description, skills }) => {
    return (
        <Container>
            <Title text={title} type={'title'} size={'large'} />
            <Description text={description} type={'body'} size={'medium'} />
            <Skills text={skills} type={'body'} size={'small'} />
            <ArrowContainer to={`projects/${title.replace(/\s+/g, '').toLocaleLowerCase()}`}>
                <Arrow width={200} />
            </ArrowContainer>
        </Container>
    );
};

export default TileTextBlock;