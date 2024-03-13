import "./App.css";

import HomePage from "./components/main/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";

import CompanyDirectory from "./components/projects/companyDirectory/companyDirectoryComponents/CompanyDirectory";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          {/* projects */}
          <Route element={<Projects />} path="/Projects" />
          <Route element={<CompanyDirectory />} path="/CompanyDirectory" />

          {/* profile */}
          <Route element={<Profile />} path="/Profile" />

          <Route element={<Contact />} path="/Contact" />
          <Route element={<HomePage />} path="/" exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
