import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import TryVeganPage from "./pages/projects/tryvegan/tryveganpage";
import Header from "./components/header/sidebar";
import ScrollToTop from "./assets/scrollToTop";
import GrindPage from "./pages/projects/grind/grindpage";
import AneuePage from "./pages/projects/aneue/aneuepage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/aneue" component={AneuePage} />
        <Route exact path="/projects/thegrind" component={GrindPage} />
        <Route exact path="/projects/tryvegan" component={TryVeganPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
