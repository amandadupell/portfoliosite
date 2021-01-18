import React from 'react';
import { DESC } from './constants';
import { TITLES } from '../../../assets/titles';
import { SectionContainer, Title, Section, SpaceContainer, ImageContainer } from '../constants';
import { PageContainer } from '../../constants';

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

                        </ImageContainer>
                    </SpaceContainer>
                </PageContainer>
            </>
        );
    }
};

export default TryVeganPage;
