import styled from 'styled-components';
import { Tile, TextComponent, TextSection } from '../../components';

export const GenericTile = styled(Tile)`
    padding-top: 100px;
`;

export const AneueTile = styled(GenericTile)`
`;

export const FregieTile = styled(GenericTile)`
`;

export const GrindTile = styled(GenericTile)`
`;

export const TryVTile = styled(GenericTile)`
    padding-bottom: 200px;
`;

export const SpaceContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 25%;
    justify-content: space-around;
    align-items: space-around;

    @media screen and (max-width: 800px) {
        padding-top: 125px;
        margin: 15px;
        flex-direction: column;
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImageContainer = styled(SectionContainer)`
    justify-content: space-around;
    align-items: center;
    width: 200px;
    padding-left: 10%;

    @media screen and (max-width: 800px) {
        padding: 0;
        width: 100%;
    }
`;

export const StyledImage = styled.img`
    margin-bottom: 25px;
    
    @media screen and (min-width: 800px) {
        transition: transform .2s ease-in-out;

        &: hover {
            transform: scale(3, 3);
        }
    }
`;

export const Section = styled(TextSection)`
    margin-bottom: 100px;
`;

export const Title = styled(TextComponent)`
    top: 0;
    right: 0;
    margin-right: 100px;
    margin-top: 100px;
    position: fixed;

    @media screen and (max-width: 800px) {
        margin-right: 15px;
        margin-top: 15px;
    }
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