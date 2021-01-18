import styled from 'styled-components';
import { Tile, TextComponent, TextSection } from '../../components';

export const AneueTile = styled(Tile)`
    padding-top: 100px;
    padding-right: 200px;
`;

export const FregieTile = styled(Tile)`
    padding-top: 140px;
    padding-left: 300px;
`;

export const GrindTile = styled(Tile)`
    padding-top: 125px;
    padding-right: 200px;
`;

export const TryVTile = styled(Tile)`
    padding-top: 140px;
    padding-bottom: 200px;
    padding-left: 300px;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImageContainer = styled(SectionContainer)`
    justify-content: flex-start;
    align-items: flex-end;
    width: 200px;
    padding-left: 10%;
`;

export const StyledImage = styled.img`
    margin-bottom: 25px;

    &: hover {
        animation: transform 2s ease-in-out;
        transform: scale(2, 2)
    }
`;

export const Section = styled(TextSection)`
`;

export const Title = styled(TextComponent)`
    top: 0;
    right: 0;
    margin-right: 100px;
    margin-top: 100px;
    position: fixed;
`;

export const DESC = {
    ANEUE: 'Some people use scent as a form of comfort and a way to ground themselves. Exploring my own personal brand identity, I created the fragrance brand Aneue to encourage people to try new things while they also discover a variety of smells from a fragrance line.',
    FREGIE: 'Food insecurity is a real problem faced by communities around the globe. We created this brand and mobile application to help people locate local community fridges in order to ease the process of donations.',
    GRIND: 'The Grind started as an idea between two friends and two cups of coffee. As lovers of the hot beverage, we wanted to create a community of coffee drinkers on our university\'s campus who could share the journey of finding the perfect cup of joe.',
    TRYV: 'Try Vegan was a social campaign that stretched across multiple medias in effort to encourage people to try and explore the benefits of a plant-based diet.',
};

export const SKILLS = {
    ANEUE: 'Branding | Adobe Dimension | Product Design | App Design',
    FREGIE: 'Adobe InDesign | Adobe Illustrator | Social Media',
    GRIND: 'Adobe InDesign | Adobe Illustrator | Social Media',
    TRYV: 'Adobe InDesign | Adobe Illustrator | App Design | Graphic Design',
};