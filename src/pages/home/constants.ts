import styled from 'styled-components';
import HomeFlower from '../../assets/svgComponents/homeFlower';
import HomeText from '../../assets/svgComponents/homeText';
import HomeHand from '../../assets/svgComponents/homeHand';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const StyledSmile = styled(HomeFlower)`
    position: fixed;
`;

export const StyledHand = styled(HomeHand)`
    position: fixed;
`;

export const StyledHowdy = styled(HomeText)`
    position: fixed;
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