import "./App.css";

import Landing from "./components/Landing";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-black flex items-center m-auto">
      <div className="">
        <NavBar />
        <Landing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
