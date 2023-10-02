import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import "./App.css";
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
      path="/portfolio"
      element={
        <PortfolioPage/>
      }/>
     </Routes>
    </div>
  );
}

export default App;
