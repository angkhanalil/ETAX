import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import TaxInvoice from "./Pages/TaxInvoice/TaxInvoice";
function App() {
  return (
    <Router>
      {/* <div className="app"> */}
      <Navbar />
      <TaxInvoice />
      {/*  <main>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/wacoal-tax-invoice" element={<TaxInvoice />} />
          {/* <Route exact path="/" component={}/>  
        </Routes>
      </main>*/}
      {/* Navbar */}
      {/* Side */}
      {/* backdrop */}
      {/* home screen */}
      {/* </div> */}
    </Router>
  );
}

export default App;
