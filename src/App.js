import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar/NavBar";
import Design from "./components/Design/Design";
import Sales from "./components/Sales/Sales";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Gear from "./components/Gear/Gear";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-black flex items-center m-auto">
      <div className="">
        <Router>
          <NavBar />

          <Switch>
            <Route path="/gallery" component={Gallery} />
            <Route path="/sales" component={Sales} />
            <Route path="/contact" component={Contact} />
            <Route path="/gear" component={Gear} />
            <Route path="/gear/automated" component={Automated} />
            <Route path="/gear/static" component={StaticFixtures} />
            <Route path="/gear/power" component={Power} />
            <Route path="/gear/control" component={Control} />
            <Route path="/gear/rigging" component={Rigging} />
            <Route path="/gear/atmosphere" component={Atmosphere} />

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
