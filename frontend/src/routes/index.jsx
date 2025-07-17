import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "../pages/HomePage";
import BookRoutes from "./bookRoutes";
import NotFoundPage from "../pages/NotFoundPage";


import ReviewPage from "../pages/Profile/ReviewPage";
import Navbar from "@/components/Navbar";
import VerifyPage from "@/pages/Auth/VerifyPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import OrderPage from "@/pages/Profile/OrderPage";



export const AppRoutes = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {BookRoutes}
        
        {/* <Route path="/books" element={<BooksList />} /> */}
        <Route path="/book/:bookId/reviews" element={<ReviewPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/profile" element={<ProfilePage />}>
          <Route path="orders" element={< OrderPage />} />

        </Route>
      </Routes>
    </>
  );
};
