import React from 'react';
import { DESC } from './constants';
import { TITLES } from '../../../assets/titles';
import { SectionContainer, Title, Section, SpaceContainer, ImageContainer, StyledImage } from '../constants';
import { PageContainer } from '../../constants';
import Logo from '../../../images/tryv/tryvlogo.png';
import Colors from '../../../images/tryv/tryvcolors.png';
import Fruits from '../../../images/tryv/tryvfruits.png';
import Phone1 from '../../../images/tryv/tryvphone1.png';
import Phone2 from '../../../images/tryv/tryvphone2.png';
import Recipe1 from '../../../images/tryv/tryvrecipe1.png';
import Bag from '../../../images/tryv/tryvbag.png';

class TryVeganPage extends React.Component {
    render() {
        return (
            <>
                <PageContainer>
                    <Title text={'try vegan'} type={'title'} size={'large'} bold />
                    <SpaceContainer>
                        <SectionContainer>
                            <Section title={TITLES.SUMMARY} description={DESC.SUMMARY} />
                            <Section title={TITLES.PROCESS} description={DESC.PROCESS} />
                            <Section title={TITLES.TYPOGRAPHY} description={DESC.TYPOGRAPHY} />
                            <Section title={TITLES.LANGUAGE} description={DESC.LANGUAGE} />
                        </SectionContainer>
                        <ImageContainer>
                            <StyledImage src={Logo} alt={Logo} height={54} />
                            <StyledImage src={Colors} alt={Colors} height={200} />
                            <StyledImage src={Fruits} alt={Fruits} height={107} />
                            <StyledImage src={Phone1} alt={Phone1} height={200} />
                            <StyledImage src={Phone2} alt={Phone2} height={200} />
                            <StyledImage src={Recipe1} alt={Recipe1} height={200} />
                            <StyledImage src={Bag} alt={Bag} height={200} />
                        </ImageContainer>
                    </SpaceContainer>
                </PageContainer>
            </>
        );
    }
};

export default TryVeganPage;
