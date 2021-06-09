import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar/NavBar";
import Design from "./components/Design/Design";
import Sales from "./components/Sales/Sales";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Gear from "./components/Gear/Gear";
import Automated from "./components/GearCategories/Automated/Automated";
import StaticFixtures from "./components/GearCategories/StaticFixtures/StaticFixtures";
import Power from "./components/GearCategories/Power";
import Control from "./components/GearCategories/Control";
import Rigging from "./components/GearCategories/Rigging";
import Atmosphere from "./components/GearCategories/Atmosphere/Atmosphere";
import Footer from "./components/Footer/Footer";
import AtmosphereDetailsCard from "./components/GearCategories/Atmosphere/AtmosphereDetailsCard";
import AutomatedDetailsCard from "./components/GearCategories/Automated/AutomatedDetailsCard";

function App() {
  return (
    <div className="bg-black items-center m-auto h-auto w-auto ">
      <div className=" ">
        <Router>
          <NavBar />

          <Switch>
            <Route path="/gallery" component={Gallery} />
            <Route path="/sales" component={Sales} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/gear" component={Gear} />
            <Route exact path="/gear/automated" component={Automated} />
            <Route path="/gear/static" component={StaticFixtures} />
            <Route exact path="/gear/power" component={Power} />
            <Route path="/gear/control" component={Control} />
            <Route path="/gear/rigging" component={Rigging} />
            <Route exact path="/gear/atmosphere" component={Atmosphere} />
            <Route
              exact
              path="/gear/atmosphere/:item"
              component={AtmosphereDetailsCard}
            />
            <Route
              exact
              path="/gear/automated/:item"
              component={AutomatedDetailsCard}
            />

            <Route path="/design" component={Design} />
            <Route exact path="/" component={Landing} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
