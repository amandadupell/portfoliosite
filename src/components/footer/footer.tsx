import React, { FunctionComponent } from 'react';
import { Container, Props } from './constants';
import { LinkedInLogo, GithubLogo } from '../../assets/photos';

const Footer: FunctionComponent<Props> = ({
}) => {
    return (
        <Container>
            <a href={'https://www.linkedin.com/in/amanda-dupell-profile/'} target='_blank'>
                <LinkedInLogo width={40} height={40} />
            </a>
            <a href={'https://github.com/amandadupell'} target='_blank'>
                <GithubLogo width={40} height={40} />
            </a>
        </Container >
    );
};

export default Footer;