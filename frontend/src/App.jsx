import { Routes, Route, useLocation } from "react-router-dom";
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
import Faq from "./pages/Faq";
import Lookbook from "./pages/Lookbook";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <ShopProvider>
      {!isAdminRoute && <Navbar />}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections/classic-all" element={<ShopAll />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faq" element={<Faq />} />
        <Route path="/lookbook" element={<Lookbook />} />
<Route path="/landing" element={<LandingPage />} />
<Route path="/blog" element={<Blog />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
        {!isAdminRoute && <Footer/>}
    </ShopProvider>

  );
}

export default App;
