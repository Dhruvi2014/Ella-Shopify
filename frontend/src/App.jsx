import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {

  return (
    <>
          <Navbar />


      <BrowserRouter>
        <Routes>
                      <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
