import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "@/pages/SignUpPage";
import BookPage from "../pages/BookPage";
import ReviewPage from "../pages/ReviewPage";
import NotFoundPage from "../pages/NotFoundPage";
import Navbar from "@/components/Navbar";

export const AppRoutes = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/book/:bookId/reviews" element={<ReviewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
