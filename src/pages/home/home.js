import React from 'react';
import { Container, StyledHowdy, StyledSmile } from './constants';
import { PageContainer } from '../constants';

class Home extends React.Component {
    render() {
        return (
            <>
                <PageContainer>
                    <Container>
                        <StyledSmile height={500} width={500} />
                        <StyledHowdy height={600} width={600} />
                    </Container>
                </PageContainer>
            </>
        );
    }
};

export default Home;
