import Form from "./Form/Form";
import LandingPage from "./HomePage/Landing_Page";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Login/Login"
import AdminDashBoard from "./AdminDash/AdminDashboard";
import Progress from "./userDash/Progress"
import ApplyFunds from "./userDash/ApplyFunds"
import TrackFunds from "./userDash/TrackFunds"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apply" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminDashboard" element={<AdminDashBoard />} />
        <Route path="/progress" element={<Progress/>} />
        <Route path="/applyFunds" element={<ApplyFunds />} />
        <Route path="/trackFunds" element={<TrackFunds />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
