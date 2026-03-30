import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ShopAll from "./pages/ShopAll";
import Wishlist from "./pages/Wishlist";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ShopProvider } from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections/classic-all" element={<ShopAll />} />
            <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
