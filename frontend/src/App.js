import './App.css';
import * as React from "react";
import LandingPage from "./Landing_Page";
import { BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      Crawler
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
