import React from 'react';
import { AneueTile, Container, FregieTile, GrindTile, TryVTile, DESC, SKILLS } from './constants';
import Aneue from '../../../images/aneue/aneue.png';
import AneueBox from '../../../images/aneue/aneuegradient.png';
import Fregie from '../../../images/fregie/fregie.png';
import FregieBox from '../../../images/fregie/fregiegradient.png';
import Grind from '../../../images/thegrind/grindmainlogo.png';
import GrindBox from '../../../images/thegrind/green.png';
import TryV from '../../../images/tryv/try.png';
import TryVBox from '../../../images/tryv/tan.png';

class Projects extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <AneueTile image1={AneueBox} image2={Aneue} title={'Aneue'} description={DESC.ANEUE} skills={SKILLS.ANEUE} />
                    <FregieTile image1={FregieBox} image2={Fregie} title={'Fregie'} description={DESC.FREGIE} skills={SKILLS.FREGIE} />
                    <GrindTile image1={GrindBox} image2={Grind} title={'The Grind'} description={DESC.GRIND} skills={SKILLS.GRIND} />
                    <TryVTile image1={TryVBox} image2={TryV} title={'Try Vegan'} description={DESC.TRYV} skills={SKILLS.TRYV} />
                </Container>
            </>
        );
    }
};

export default Projects;
