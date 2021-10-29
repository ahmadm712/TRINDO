import logo from "./assets/images/logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/404Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
