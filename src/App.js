import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Portfolio from "./page/Portfolio"

import AboutMe from "./page/AboutMe"

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        {/* this is wherer you put a nav bar */}
        <Header />
        <Switch>
          {/* you can only have 1 switch and only 1 route can be active at any given time.*/}
          <Route exact path="/" component={AboutMe} /> {/* <Route exact path="/portfolio" component={Portfolio} /> */}

          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
        {/* thi sis wherer you put the footer. */}
      </div>
    </BrowserRouter >

  );
}

export default App;
