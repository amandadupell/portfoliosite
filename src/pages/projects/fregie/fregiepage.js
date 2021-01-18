import React from 'react';
import { DESC } from './constants';
import { TITLES } from '../../../assets/titles';
import { SectionContainer, Title, Section, SpaceContainer, ImageContainer, StyledImage } from '../constants';
import { PageContainer } from '../../constants';
import Logo from '../../../images/fregie/fregielogo.png';
import Characters from '../../../images/fregie/fregiecharacters.png';
import FregieSocialMedia from '../../../images/fregie/fregiesocialmedia.png';
import FregieGradient from '../../../images/fregie/fregiegradient.png';
import Arrow from '../../../assets/svgComponents/arrowComponent';

class FregiePage extends React.Component {
    render() {
        return (
            <>
                <PageContainer>
                    <Title text={'fregie'} type={'title'} size={'large'} bold />
                    <SpaceContainer>
                        <SectionContainer>
                            <Section title={TITLES.SUMMARY} description={DESC.SUMMARY} />
                            <Section title={TITLES.PROTOTYPE} description={DESC.PROTOTYPE} />
                            <a href={'https://www.figma.com/proto/MSW7SbJdVnSSDJzN7kTiZw/client-ui-mockup?node-id=17%3A6&scaling=contain'} target='_blank' rel="noreferrer">
                                <Arrow />
                            </a>
                        </SectionContainer>
                        <ImageContainer>
                            <StyledImage src={Logo} alt={Logo} height={66} />
                            <StyledImage src={Characters} alt={Characters} height={135} />
                            <StyledImage src={FregieSocialMedia} alt={FregieSocialMedia} height={146} />
                            <StyledImage src={FregieGradient} alt={FregieGradient} height={200} />
                        </ImageContainer>
                    </SpaceContainer>
                </PageContainer>
            </>
        );
    }
};

export default FregiePage;
