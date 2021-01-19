import styled from 'styled-components';
import Smile from '../../assets/svgComponents/smile';
import Howdy from '../../assets/svgComponents/howdy';
import Cowboy from '../../assets/svgComponents/cowboy';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const StyledSmile = styled(Smile)`
    position: relative;
`;

export const StyledHowdy = styled(Howdy)`
    position: absolute;
    animation: rotation 15s infinite linear;

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        };
        to {
            transform: rotate(-359deg);
        };
    };
    
    @-webkit-@keyframes rotation {
        from {
            transform: rotate(0deg);
        };
        to {
            transform: rotate(-359deg);
        };
    };
`;

export const StyledCowboy = styled(Cowboy)`
    position: fixed;
    bottom: 0;
    animation: floatText 25s infinite alternate linear;
    @keyframes floatText {
        from {
            left: 0%;
        };
        to {
            left: 100%;
        };
    };

    @-webkit-keyframes floatText{
        from {
            left: 0%;
        };
        to {
            left: 100%;
        };
    };
`;