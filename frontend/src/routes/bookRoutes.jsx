import React from "react";
import { Route } from "react-router-dom";
import BooksList from "@/pages/Book/BooksList";
import BookPage from "@/pages/Book/BookPage";
import OrderPage from "@/pages/Profile/OrderPage";

const BookRoutes = (
  <>
    <Route path="/books" element={<BooksList />} />
    <Route path="/book/:bookId" element={<BookPage />} />
    {/* <Route path="/book/:bookId/edit" element={<EditBook />} /> */}
    {/* <Route path="/book/:bookId/reviews" element={<BookReviews />} /> */}
    <Route path="/book/:bookId/order" element={<OrderPage />} />
  </>
);

export default BookRoutes;
