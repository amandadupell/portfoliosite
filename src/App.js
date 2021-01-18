import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import TryVeganPage from "./pages/projects/tryvegan/tryveganpage";
import Header from "./components/header/sidebar";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/tryvegan" component={TryVeganPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
