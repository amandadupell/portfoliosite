import styled from 'styled-components';
import { TileBlock } from '../../components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

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

export const GenericTile = styled(TileBlock)`
    padding-top: 100px;
`;

export const AneueTile = styled(TileBlock)`
`;

export const FregieTile = styled(GenericTile)`
`;

export const GrindTile = styled(GenericTile)`
`;

export const TryVTile = styled(GenericTile)`
`;

export const DESC = {
    ANEUE: 'Some people use scent as a form of comfort and a way to ground themselves. Exploring my own personal brand identity, I created the fragrance brand Aneue to encourage people to try new things while they also discover a variety of smells from a fragrance line.',
    FREGIE: 'Food insecurity is a real problem faced by communities around the globe. We created this brand and mobile application to help people locate local community fridges in order to ease the process of donations.',
    GRIND: 'The Grind started as an idea between two friends and two cups of coffee. As lovers of the hot beverage, we wanted to create a community of coffee drinkers on our university\'s campus who could share the journey of finding the perfect cup of joe.',
    TRYV: 'Try Vegan was a social campaign that stretched across multiple medias in effort to encourage people to try and explore the benefits of a plant-based diet.',
};

export const SKILLS = {
    ANEUE: 'Branding | Adobe Dimension | Product Design | App Design',
    FREGIE: 'Branding | UX/UI Design | App Design',
    GRIND: 'Adobe InDesign | Adobe Illustrator | Social Media',
    TRYV: 'Adobe InDesign | Adobe Illustrator | App Design | Graphic Design',
};