import React from 'react';
import { AboutTile, DESC, Frank } from './constants';
import Orange from '../../images/orange.png';
import Me from '../../images/me.png';
import { $orange } from '../../assets/colors';
import { PageContainer } from '../constants';

class About extends React.Component {
    render() {
        return (
            <>
                <PageContainer>
                    <Frank type={'body'} size={'medium'} text={'ask me about frank :)'} color={$orange} />
                    <AboutTile variant={'about'} image1={Me} image2={Orange} imgH={400} imgW={400} xOffset={50} yOffset={-50} title={'Hi, there!'} description={DESC} />
                </PageContainer>
            </>
        );
    }
};

export default About;
