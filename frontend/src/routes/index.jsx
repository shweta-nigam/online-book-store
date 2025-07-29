import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Navbar from "@/components/Navbar";



import BookRoutes from "./bookRoutes";
import ReviewPage from "../pages/Book/ReviewPage";
import OrderRoutes from "./orderRoutes";
import AuthRoute from "./authRoutes";
import ProfileRoute from "./ProfileRoutes";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";



export const AppRoutes = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {BookRoutes}
        {OrderRoutes} 
        {AuthRoute}
        {ProfileRoute}



        <Route path="/book/:bookId/reviews" element={<ReviewPage />} />
      
       
       <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
