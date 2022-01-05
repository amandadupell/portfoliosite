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
                    <a
                        style={{ 'text-decoration': 'none' }}
                        href='https://www.dropbox.com/s/qht5ne8wdr529lj/RESUME.pdf?dl=0'
                        target='_blank'
                        rel="noreferrer"
                        aria-label='resume link'
                    >
                        <MainItem text="resume" type={'header'} size={'large'} />
                    </a>
                </SidebarNav>
            </Container>
        </>
    );
};

export default Header;
