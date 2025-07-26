import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBookStore } from "../../store/useBookStore";
import { Loader } from "@/components/ui/loader";
import { Card, CardContent } from "@/components/ui/card";
import BookFrame from "@/components/BooksPage/BookFrame";
import BookCarousel from "@/components/BooksPage/BookCarousel";

const BooksList = () => {
  const navigate = useNavigate();
  const { books, fetchAllBooks, isLoading, error } = useBookStore();

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  if (!books || books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 w-full min-h-screen text-white bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
        <img
          src="/e-shelf.jpg"
          alt="No books illustration"
          className="w-124 object-contain mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">No books found!</h2>
        <p className="text-gray-300 mb-4 text-center max-w-xs">
          Currently, there are no books available to display. Please check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full text-white bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] p-4">
        
    {/* <BookFrame /> */}
    <BookCarousel />


      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <Card
              key={book.id}
              className="cursor-pointer hover:shadow-indigo-500/40 hover:shadow-lg hover:scale-105 transition-transform w-44 sm:w-68 mx-auto rounded-2xl border border-gray-600 bg-white/10 text-white min-h-[420px] flex flex-col"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              <CardContent className="p-2 flex flex-col flex-1 justify-between">
                <div className="w-full h-72 flex justify-center items-center bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl overflow-hidden">
                  <img
                    src={book.bookCover}
                    alt={book.title}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="mt-2 text-center space-y-1">
                  <h2 className="text-sm font-semibold line-clamp-2 text-white">{book.title}</h2>
                  <p className="text-xs text-gray-300">{book.author}</p>
                  <p className="text-indigo-400 font-semibold text-sm">
                    ₹{Number(book.price ?? 0).toFixed(2)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksList;
