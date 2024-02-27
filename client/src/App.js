import logo from "./logo.svg";
import "./App.css";

import HomePage from "./components/main/HomePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";

import CompanyDirectory from "./components/projects/companyDirectory/companyDirectoryComponents/CompanyDirectory";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="container App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<Profile />} path="/Profile" />
          <Route element={<Projects />} path="/Projects" />
          <Route element={<CompanyDirectory />} path="/CompanyDirectory" />
          <Route element={<Contact />} path="/Contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;