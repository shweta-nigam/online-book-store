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
    return (
      <div className="flex flex-col items-center justify-center py-12 w-full">
        <img
          src="https://undraw.co/api/illustrations/4f6cbf45-8d1e-4779-9c69-cb1b6f2d5c3a"
          alt="No books illustration"
          className="w-64 h-64 object-contain mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">No books found!</h2>
        <p className="text-gray-500 mb-4 text-center max-w-xs">
          Currently, there are no books available to display. Please check back
          later!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {books.map((book) => (
          <Card
            key={book.id}
            className="cursor-pointer hover:shadow-xl hover:scale-105 transition-transform w-40 sm:w-68 mx-auto rounded-2xl border border-gray-400 min-h-[420px] flex flex-col"
            onClick={() => navigate(`/book/${book.id}`)}
          >
            <CardContent className="p-2 flex flex-col flex-1 justify-between">
              <div className="w-full h-72 flex justify-center items-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl overflow-hidden">
                <img
                  src={book.bookCover}
                  alt={book.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="mt-2 text-center space-y-1">
                <h2 className="text-base font-semibold line-clamp-2">
                  {book.title}
                </h2>
                <p className="text-xs text-gray-500">{book.author}</p>
                <p className="text-indigo-500 font-semibold text-sm">
                  ${Number(book.price ?? 0).toFixed(2)}
                  <span className="text-gray-500 ml-1">
                    / ₹{Math.round(Number(book.price ?? 0) * 83)}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
