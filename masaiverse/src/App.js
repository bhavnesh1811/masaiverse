import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
