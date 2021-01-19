import React, { FunctionComponent } from 'react';
import { Container, Props } from './constants';
import LinkedInLogo from '../../assets/svgComponents/linkedInComponent';
import GithubLogo from '../../assets/svgComponents/githubComponent';

const Footer: FunctionComponent<Props> = () => {
    return (
        <Container>
            <a href={'https://www.linkedin.com/in/amanda-dupell-profile/'} target='_blank' rel="noreferrer">
                <LinkedInLogo width={20} height={20} />
            </a>
            <a href={'https://github.com/amandadupell'} target='_blank' rel="noreferrer">
                <GithubLogo width={20} height={20} />
            </a>
        </Container >
    );
};

export default Footer;