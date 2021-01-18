import React from 'react';
import { Container } from './constants';
import { PageContainer } from '../constants';

import Smile from '../../assets/svgComponents/smile.svg';
import Howdy from '../../assets/svgComponents/howdy.svg';

class Home extends React.Component {
    render() {
        return (
            <PageContainer>
                <Container>
                    <Smile />
                    <Howdy />
                </Container>
            </PageContainer>
        );
    }
};

export default Home;
