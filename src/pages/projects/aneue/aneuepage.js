import React from 'react';
import { DESC } from './constants';
import { TITLES } from '../../../assets/titles';
import { SectionContainer, Title, Section, ImageContainer, StyledImage, SpaceContainer } from '../constants';
import { PageContainer } from '../../constants';
import Brand from '../../../images/aneue/aneuetitle.png';
import Colors from '../../../images/aneue/aneuecolors.png';
import Gradient from '../../../images/aneue/aneuegradient.png';
import HomeScreens from '../../../images/aneue/aneuehomescreen.png';
import Box from '../../../images/aneue/aneuebox.png';
import Bottle from '../../../images/aneue/aneuebottle.png';
import SignupScreens from '../../../images/aneue/aneuesignup.png';
import AppAndSocials from '../../../images/aneue/aneueSMandLOGO.png';

class AneuePage extends React.Component {
    render() {
        return (
            <>
                <PageContainer>

                    <Title text={'aneue'} type={'title'} size={'large'} bold />
                    <SpaceContainer>
                        <SectionContainer>
                            <Section title={TITLES.SUMMARY} description={DESC.SUMMARY} />
                            <Section title={TITLES.BRAND} description={DESC.BRAND} />
                            <Section title={TITLES.PRODUCT} description={DESC.PRODUCT} />
                            <Section title={TITLES.LOGO} description={DESC.LOGO} />
                            <Section title={TITLES.COLOR} description={DESC.COLOR} />
                        </SectionContainer>
                        <ImageContainer>
                            <StyledImage src={Brand} alt={Brand} height={80} />
                            <StyledImage src={Colors} alt={Colors} height={90} />
                            <StyledImage src={Gradient} alt={Gradient} height={100} width={100} />
                            <StyledImage src={Bottle} alt={Bottle} height={150} />
                            <StyledImage src={Box} alt={Box} height={200} />
                            <StyledImage src={HomeScreens} alt={HomeScreens} height={200} />
                            <StyledImage src={SignupScreens} alt={SignupScreens} height={125} />
                            <StyledImage src={AppAndSocials} alt={AppAndSocials} height={200} />
                        </ImageContainer>
                    </SpaceContainer>
                </PageContainer>
            </>
        );
    }
};

export default AneuePage;
