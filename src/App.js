import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import AboutMe from "./page/AboutMe"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* this is wherer you put a nav bar */}
        <Switch>  {/* you can only have 1 switch and only 1 route can be active at any given time.*/}
          <Route exact path="/" component={AboutMe} />
        </Switch>
        {/* thi sis wherer you put the footer. */}
      </BrowserRouter>
    </div>
  );
}

export default App;
