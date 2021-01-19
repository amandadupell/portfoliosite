import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
