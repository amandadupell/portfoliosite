import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
