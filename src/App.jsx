// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
// import PortfolioPage from "./pages/PortfolioPage";
// import ServicePage from "./pages/ServicePage";
// import StarterPage from "./pages/StarterPage";
// import BlogPage from "./pages/BlogPage";
// import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/portfolio-details" element={<PortfolioPage />} /> */}
          {/* <Route path="/service-details" element={<ServicePage />} /> */}
          {/* <Route path="/starter-page" element={<StarterPage />} /> */}
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
