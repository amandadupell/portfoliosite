import React from 'react';
import { AneueTile, FregieTile, GrindTile, TryVTile, DESC, SKILLS } from './constants';
import Aneue from '../../images/aneue.png';
import AneueBox from '../../images/aneuegradient.png';
import Fregie from '../../images/fregie.png';
import FregieBox from '../../images/fregiegradient.png';
import Grind from '../../images/thegrind.png';
import GrindBox from '../../images/tan.png';
import TryV from '../../images/try.png';
import TryVBox from '../../images/tan.png';

class Projects extends React.Component {
    render() {
        return (
            <>
                <AneueTile variant={'project'} image1={Aneue} image2={AneueBox} imgH={315} imgW={300} xOffset={32} yOffset={42} title={'Aneue'} description={DESC.ANEUE} skills={SKILLS.ANEUE} />
                <FregieTile variant={'project'} image1={Fregie} image2={FregieBox} imgH={315} imgW={300} xOffset={40} yOffset={60} title={'Fregie'} description={DESC.FREGIE} skills={SKILLS.FREGIE} />
                <GrindTile variant={'project'} image1={Grind} image2={GrindBox} imgH={300} imgW={300} xOffset={32} yOffset={24} title={'The Grind'} description={DESC.GRIND} skills={SKILLS.GRIND} />
                <TryVTile variant={'project'} image1={TryV} image2={TryVBox} imgH={315} imgW={300} xOffset={50} yOffset={50} title={'Try Vegan'} description={DESC.TRYV} skills={SKILLS.TRYV} />
            </>
        );
    }
};

export default Projects;
