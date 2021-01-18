import React from 'react';
import { AboutTile, DESC, Frank } from './constants';
import Orange from '../../images/orange.png';
import Me from '../../images/me.png';

class About extends React.Component {
    render() {
        return (
            <>
                <Frank type={'body'} size={'medium'} text={'ask me about frank :)'} />
                <AboutTile variant={'about'} image1={Me} image2={Orange} imgH={500} imgW={500} xOffset={50} yOffset={50} title={'Hi, there!'} description={DESC} />
            </>
        );
    }
};

export default About;
