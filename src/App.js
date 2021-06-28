import { React, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
// import Design from "./components/Design/Design";
import Sales from "./components/Sales/Sales";
import Contact from "./components/Contact/Contact";
// import Gallery from "./components/Gallery/Gallery";
// import Gear from "./components/Gear/Gear";
// import Automated from "./components/GearCategories/Automated/Automated";
// import StaticFixtures from "./components/GearCategories/StaticFixtures/StaticFixtures";
// import Power from "./components/GearCategories/Power/Power";
// import Control from "./components/GearCategories/Control/Control";
// import Rigging from "./components/GearCategories/Rigging/Rigging";
// import Cable from "./components/GearCategories/Cable/Cable";
// import Atmosphere from "./components/GearCategories/Atmosphere/Atmosphere";
import Footer from "./components/Footer/Footer";
import AtmosphereDetailsCard from "./components/GearCategories/Atmosphere/AtmosphereDetailsCard";
import AutomatedDetailsCard from "./components/GearCategories/Automated/AutomatedDetailsCard";
import StaticFixturesDetailsCard from "./components/GearCategories/StaticFixtures/StaticFixturesDetailsCard";
import CableDetailsCard from "./components/GearCategories/Cable/CableDetailsCard";
import ControlDetailsCard from "./components/GearCategories/Control/ControlDetailsCard";
// eslint-disable-next-line no-unused-vars
import GalleryPage from "./components/Gallery/GalleryPage";
const Landing = lazy(() => import("./components/Landing/Landing"));
const Gear = lazy(() => import("./components/Gear/Gear"));
const Design = lazy(() => import("./components/Design/Design"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));
const Automated = lazy(() =>
  import("./components/GearCategories/Automated/Automated")
);
const StaticFixtures = lazy(() =>
  import("./components/GearCategories/StaticFixtures/StaticFixtures")
);
const Power = lazy(() => import("./components/GearCategories/Power/Power"));
const Control = lazy(() =>
  import("./components/GearCategories/Control/Control")
);
const Rigging = lazy(() =>
  import("./components/GearCategories/Rigging/Rigging")
);
const Cable = lazy(() => import("./components/GearCategories/Cable/Cable"));
const Atmosphere = lazy(() =>
  import("./components/GearCategories/Atmosphere/Atmosphere")
);

function App() {
  return (
    <div className="flex items-center m-0 h-full  ">
      <div className=" min-h-full w-full">
        <Suspense fallback={<h1>loading...</h1>}>
          <Router>
            <NavBar />

            <Switch>
              {/* <Redirect exact from="/gallery" to="/gallery/concert" /> */}
              <Route exact path="/sales" component={Sales} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/gear" component={Gear} />
              <Route exact path="/gear/automated" component={Automated} />
              <Route exact path="/gear/static" component={StaticFixtures} />
              <Route exact path="/gear/power" component={Power} />
              <Route exact path="/gear/control" component={Control} />
              <Route exact path="/gear/rigging" component={Rigging} />
              <Route exact path="/gear/cable" component={Cable} />
              <Route exact path="/gear/atmosphere" component={Atmosphere} />
              <Route exact path="/gallery/:item" component={Gallery} />
              <Redirect exact path="/gallery" to="/gallery/concert" />
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
              <Route
                exact
                path="/gear/static/:item"
                component={StaticFixturesDetailsCard}
              />
              <Route
                exact
                path="/gear/cable/:item"
                component={CableDetailsCard}
              />
              <Route
                exact
                path="/gear/control/:item"
                component={ControlDetailsCard}
              />

              <Route exact path="/design" component={Design} />

              <Route exact path="/" component={Landing} />
            </Switch>
            <Footer />
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
