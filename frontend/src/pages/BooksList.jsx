import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBookStore } from "../store/useBookStore";
import { Loader } from "@/components/ui/loader";
import { Card, CardContent } from "@/components/ui/card";

const BooksList = () => {
  const navigate = useNavigate();
  const { books, fetchAllBooks, isLoading, error } = useBookStore();

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  if (isLoading) return <Loader />;

  if (error) return <p className="text-center text-red-600">{error}</p>;

  if (!books || books.length === 0) {
    return <p className="text-center">No books found. Try adding some!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {books.map((book) => (
        <Card
          key={book._id}
          className="cursor-pointer hover:shadow-xl"
          onClick={() => navigate(`/book/${book._id}`)}
        >
          <CardContent className="p-4 space-y-2">
            <img src={book.bookCover} alt={book.title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="text-indigo-500 font-semibold">₹{book.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BooksList;
