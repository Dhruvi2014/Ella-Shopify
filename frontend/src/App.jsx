import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ShopAll from "./pages/ShopAll";
import Wishlist from "./pages/Wishlist";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ShopProvider } from "./context/ShopContext";
import Footer from "./components/Footer";
import About from "./pages/About";
import Brands from "./pages/Brands";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <ShopProvider>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections/classic-all" element={<ShopAll />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contactus" element={<ContactUs />} />

        </Routes>
          <Footer/>

    </ShopProvider>

  );
}

export default App;
