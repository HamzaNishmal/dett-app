import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from "./components/About/About";
import Home from './components/NavBar/Home';
import PreBook from "./components/Booking/PreBook";
import LoginPage from "./components/Login/LoginPage";
import Conditions from "./components/CompanyRoles/TermsConditions";
import PrivacyPolicy from "./components/CompanyRoles/PrivacyPolicy";

function App() {
  return (
   
    <Router>  
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/prebook" element={<PreBook/>}/>
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/termsandcondition" element={<Conditions/>}/>
         <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      </Routes>
    </Router>

  );
}

export default App;
