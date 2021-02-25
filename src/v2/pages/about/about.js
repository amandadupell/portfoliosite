import React from 'react';
import { Container, DESC } from './constants';
import Me from '../../../images/me.png';
import { AboutBlock } from '../../components';

class About extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <AboutBlock image={Me} title={'Hi, there!'} content={DESC} />
                </Container>
            </>
        );
    }
};

export default About;
