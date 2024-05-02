import './App.css';

import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/navbar";


function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
