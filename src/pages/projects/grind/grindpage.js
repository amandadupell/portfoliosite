import React from 'react';
import { DESC } from './constants';
import { TITLES } from '../../../assets/titles';
import { SectionContainer, Title, Section, SpaceContainer, ImageContainer, StyledImage } from '../constants';
import { PageContainer } from '../../constants';
import MainLogo from '../../../images/thegrind/grindmainlogo.png';
import Beans from '../../../images/thegrind/grindbeans.png';
import GrindIcons from '../../../images/thegrind/grindicons.png';
import GrindLogoBeans from '../../../images/thegrind/grindlogobeans.png';
import GrindLogoLeaf from '../../../images/thegrind/grindlogoleaf.png';
import GrindLogoSpoon from '../../../images/thegrind/grindlogospoon.png';
import GrindText from '../../../images/thegrind/grindtext.png';

class GrindPage extends React.Component {
    render() {
        return (
            <>
                <PageContainer>
                    <Title text={'the grind'} type={'title'} size={'large'} bold />
                    <SpaceContainer>
                        <SectionContainer>
                            <Section title={TITLES.SUMMARY} description={DESC.SUMMARY} />
                            <Section title={TITLES.PROCESS} description={DESC.PROCESS} />
                            <Section title={TITLES.TYPOGRAPHY} description={DESC.TYPOGRAPHY} />
                            <Section title={TITLES.LANGUAGE} description={DESC.LANGUAGE} />
                            <Section title={TITLES.COLOR} description={DESC.COLOR} />
                        </SectionContainer>
                        <ImageContainer>
                            <StyledImage src={MainLogo} alt={MainLogo} height={200} />
                            <StyledImage src={GrindText} alt={GrindText} height={108} />
                            <StyledImage src={GrindIcons} alt={GrindIcons} height={200} />
                            <StyledImage src={Beans} alt={Beans} height={133} />
                            <StyledImage src={GrindLogoLeaf} alt={GrindLogoLeaf} height={200} />
                            <StyledImage src={GrindLogoBeans} alt={GrindLogoBeans} height={200} />
                            <StyledImage src={GrindLogoSpoon} alt={GrindLogoSpoon} height={200} />
                        </ImageContainer>
                    </SpaceContainer>
                </PageContainer>
            </>
        );
    }
};

export default GrindPage;
