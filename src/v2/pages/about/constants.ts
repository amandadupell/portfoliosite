import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

    justify-content: center;
    align-items: center;

    padding-top: 15%;

    @media screen and (max-width: 800px) {
        padding-top: 125px;
        padding-bottom: 100px;
    }

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

export const DESC = 'As you may already know, my name is Amanda Dupell. I am a 4th-year student at Northeastern University in Boston, pursuing a combined degree in Computer Science and Design. My interests in both coding and design allow me to study a range of topics across both disciplines. I am most curious about accessibility, design systems, wireframing, prototyping, and user research. \n \nMy favorite book is The Magic Strings of Frankie Presto; my favorite movie is Kill Bill; my favorite color is orange; and my favorite type of pasta is penne alla vodka. \n \n On a normal day, you can find me reading the latest book recommendation, painting for fun, or arguing with my roommates over which movie we want to watch that night.';
