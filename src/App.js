import "./App.scss";
import "./css/Main.scss";
import "./css/Header.scss";
import "./css/Banner.scss";
import "./css/Search.scss";
import "./css/Crime.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./components/Maincomponent";
import SearchComponent from "./components/SearchComponent";
import Crimemain from "./components/CrimemainComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/crimemain" element={<Crimemain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
