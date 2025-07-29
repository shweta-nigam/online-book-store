import React from "react";
import { Route } from "react-router-dom";
import BooksList from "@/pages/Book/BooksList";
import BookPage from "@/pages/Book/BookPage";
import OrderPage from "@/pages/Profile/ProfileOrderPage";

const BookRoutes = (
  <>
    <Route path="/books" element={<BooksList />} />
    <Route path="/book/:bookId" element={<BookPage />} />
  </>
);

export default BookRoutes;
