import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import "./App.css";
import CVPage from "./pages/CV/CVPage";
import ContactPage from "./pages/Contact/ContactPage";
import AboutPage from "./pages/About/AboutPage";
function App() {
  return (
    <div className="App">
     <Routes>
      <Route
      path="/"
      element={
        <HomePage/>
      }/>
      <Route
      path="/about"
      element={
        <AboutPage/>
      }/>
      <Route
      path="/cv"
      element={
        <CVPage/>
      }/>
      <Route
      path="/portfolio"
      element={
        <PortfolioPage/>
      }/>
      <Route
      path="/contact"
      element={
        <ContactPage/>
      }/>
     </Routes>
    </div>
  );
}

export default App;
