import styled from 'styled-components';

export const PageContainer = styled.body`
    display: flex;
    flex-direction:  row;

    margin: 25%;
    animation: fadeInAnimation ease-in-out 1s;

    @keyframes fadeInAnimation { 
        0% { 
            opacity: 0; 
        };
        100% { 
            opacity: 1; 
        };
    };
`;
