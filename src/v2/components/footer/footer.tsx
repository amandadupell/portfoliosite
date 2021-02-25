import React, { FunctionComponent } from 'react';
import { Container, Props, StyledLinkedin, StyledGithub } from './constants';

const Footer: FunctionComponent<Props> = () => {
    return (
        <Container>
            <a href={'https://www.linkedin.com/in/amanda-dupell-profile/'} target='_blank' rel="noreferrer">
                <StyledLinkedin />
            </a>
            <a href={'https://github.com/amandadupell/portfoliosite'} target='_blank' rel="noreferrer">
                <StyledGithub />
            </a>
        </Container >
    );
};

export default Footer;