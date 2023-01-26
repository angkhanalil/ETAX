import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ConditionsTaxInv from "./Pages/ConditionsTaxInv/ConditionsTaxInv";
import TaxInvoice from "./Pages/TaxInvoice/TaxInvoice";
import Footer from "./components/Footer/Footer";
import CookieConsent from "./components/CookieConsent/CookieConsent";

import Container from "@mui/material/Container";
function App() {
  return (
    <Router>
      {/* <div className="app"> */}
      <Navbar />
      {/* <TaxInvoice /> */}
      <Container maxWidth="xl" sx={{ paddingBottom: "70px" }}>
        <Routes>
          <Route exact path="/" element={<TaxInvoice />} />
          <Route exact path="/conditions" element={<ConditionsTaxInv />} />

          {/* <Route exact path="/wacoal-tax-invoice" element={<TaxInvoice />} /> */}
        </Routes>
      </Container>

      {/* {  {  <Route exact path="/" component={}/>    } */}
      <CookieConsent />
      <Footer />
    </Router>
  );
}

export default App;
