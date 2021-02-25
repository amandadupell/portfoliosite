import styled from 'styled-components';

import LinkedInLogo from '../../../assets/svgComponents/linkedInComponent';
import GithubLogo from '../../../assets/svgComponents/githubComponent';

export interface Props {
};

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;

    right: 0;
    bottom: 0;

    padding-bottom: 50px;
    padding-right: 50px;

    width: 130px;

    @media screen and (max-width: 800px) {
        width: 20%;
        padding-bottom: 15px;
        padding-right: 15px;
    }
`;

export const StyledLinkedin = styled(LinkedInLogo)`
    height: 30px;
    width: 30px;

    @media screen and (max-width: 800px) {
        height: 20px;
        width: 20px;
    }
`;

export const StyledGithub = styled(GithubLogo)`
    height: 30px;
    width: 30px;

    @media screen and (max-width: 800px) {
        height: 20px;
        width: 20px;
    }
`;
