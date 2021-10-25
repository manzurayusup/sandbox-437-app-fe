import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import Navbar from './components/Navbar';
// import Home from './components/Home';
import LoginPage from "./components/LoginPage";
// import ContactUs from './components/ContactUs';
// import About from './components/About';
// import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      // HashRouter idea taken from: https: stackoverflow.com/questions/58228017/react-router-v4-cant-load-page-on-github-pages
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          {/* <Navbar /> */}
          <Switch>
            {/* <Route path="/" component={Home} exact /> */}
            {/* <Route path="/about" component={About} /> */}
            <Route path="/login" component={LoginPage} />} />
            {/* <Route path="/contact-us" component={ContactUs} /> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
