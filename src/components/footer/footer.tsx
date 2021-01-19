import React, { FunctionComponent } from 'react';
import { Container, Props } from './constants';
import LinkedInLogo from '../../assets/svgComponents/linkedInComponent';
import GithubLogo from '../../assets/svgComponents/githubComponent';

const Footer: FunctionComponent<Props> = () => {
    return (
        <Container>
            <a href={'https://www.linkedin.com/in/amanda-dupell-profile/'} target='_blank' rel="noreferrer">
                <LinkedInLogo width={25} height={25} />
            </a>
            <a href={'https://github.com/amandadupell/portfoliosite'} target='_blank' rel="noreferrer">
                <GithubLogo width={25} height={25} />
            </a>
        </Container >
    );
};

export default Footer;