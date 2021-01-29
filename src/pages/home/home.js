import React from 'react';
import { Container, StyledHowdy, StyledSmile, StyledHand } from './constants';
import { PageContainer } from '../constants';

class Home extends React.Component {
    render() {
        return (
            <>
                <PageContainer>
                    <Container>
                        <StyledHand height={400} width={400} />
                        <StyledSmile height={350} width={350} />
                        <StyledHowdy height={600} width={600} />
                    </Container>
                </PageContainer>
            </>
        );
    }
};

export default Home;
