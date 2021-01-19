import React from 'react';
import { AneueTile, FregieTile, GrindTile, TryVTile, DESC, SKILLS } from './constants';
import Aneue from '../../images/aneue/aneue.png';
import AneueBox from '../../images/aneue/aneuegradient.png';
import Fregie from '../../images/fregie/fregie.png';
import FregieBox from '../../images/fregie/fregiegradient.png';
import Grind from '../../images/thegrind/grindmainlogo.png';
import GrindBox from '../../images/thegrind/green.png';
import TryV from '../../images/tryv/try.png';
import TryVBox from '../../images/tryv/tan.png';
import { PageContainer } from '../constants';

class Projects extends React.Component {
    render() {
        return (
            <>
                <PageContainer>
                    <AneueTile variant={'project'} image1={Aneue} image2={AneueBox} imgH={265} imgW={250} xOffset={40} yOffset={75} title={'Aneue'} description={DESC.ANEUE} skills={SKILLS.ANEUE} />
                    <FregieTile variant={'project'} image1={Fregie} image2={FregieBox} imgH={265} imgW={250} xOffset={40} yOffset={75} title={'Fregie'} description={DESC.FREGIE} skills={SKILLS.FREGIE} />
                    <GrindTile variant={'project'} image1={Grind} image2={GrindBox} imgH={250} imgW={250} xOffset={32} yOffset={-50} title={'The Grind'} description={DESC.GRIND} skills={SKILLS.GRIND} />
                    <TryVTile variant={'project'} image1={TryV} image2={TryVBox} imgH={265} imgW={250} xOffset={40} yOffset={75} title={'Try Vegan'} description={DESC.TRYV} skills={SKILLS.TRYV} />
                </PageContainer>
            </>
        );
    }
};

export default Projects;
