import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Footer from "./components/Footer";
import PricingPage from "./pages/PricingPage";
import Features from "./pages/Features";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
