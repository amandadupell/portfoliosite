import { SidebarData } from './sidebarData';
import SubMenu from './subMenu';
import { SidebarNav, Container, MainItem } from './constants';

const Header = () => {
    return (
        <>
            <Container>
                <SidebarNav>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                    <a style={{ 'text-decoration': 'none' }} href='/RESUME2022.pdf' target='_blank'>
                        <MainItem text="resume" type={'header'} size={'large'} />
                    </a>
                </SidebarNav>
            </Container>
        </>
    );
};

export default Header;
