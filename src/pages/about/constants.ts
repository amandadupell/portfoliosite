import styled from 'styled-components';
import { Tile } from '../../components';
import { TextComponent } from '../../components';

export const AboutTile = styled(Tile)`
    padding-top: 5em;
    width: 60%;

    @media screen and (max-width: 800px) {
        padding-top: 2em;
    }
`;

export const Frank = styled(TextComponent)`
    left: 0;    
    bottom: 0;
    position: fixed;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const DESC = 'As you may already know, my name is Amanda Dupell. I am a 4th-year student at Northeastern University in Boston, pursuing a combined degree in Computer Science and Design. My interests in both coding and design allow me to study a range of topics across both disciplines. I am most curious about accessibility, design systems, wireframing, prototyping, and user research. \n \nMy favorite book is The Magic Strings of Frankie Presto; my favorite movie is Kill Bill; my favorite color is orange; and my favorite type of pasta is penne alla vodka. \n \n On a normal day, you can find me reading the latest book recommendation, painting for fun, or arguing with my roommates over which movie we want to watch that night.';
