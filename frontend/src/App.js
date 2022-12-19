import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
function App() {
  return (
    <Router>
      {/* <div className="app"> */}
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/" component={}/> */}
        </Routes>
      </main>
      {/* Navbar */}
      {/* Side */}
      {/* backdrop */}
      {/* home screen */}
      {/* </div> */}
    </Router>
  );
}

export default App;
