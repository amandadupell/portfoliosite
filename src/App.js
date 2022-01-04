import { Route, Switch } from 'react-router-dom';
import { Footer } from './v2/components';
import Projects from './v2/pages/projects/projects';
import About from './v2/pages/about/about';
import Home from './pages/home/home';
import TryVeganPage from './pages/projects/tryvegan/tryveganpage';
import { Header } from './v2/components';
import ScrollToTop from './assets/scrollToTop';
import GrindPage from './pages/projects/grind/grindpage';
import AneuePage from './pages/projects/aneue/aneuepage';
import FregiePage from './pages/projects/fregie/fregiepage';
import Resume from './pages/resume/resume';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/aneue" component={AneuePage} />
        <Route exact path="/projects/fregie" component={FregiePage} />
        <Route exact path="/projects/thegrind" component={GrindPage} />
        <Route exact path="/projects/tryvegan" component={TryVeganPage} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
