import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookStore } from "../store/useBookStore";
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BookPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { fetchBookDetails, deleteBook, selectBook, isLoading, error } =
    useBookStore();

  const handleDelete = async () => {
    await deleteBook(bookId);
    navigate("/books");
  };

  if (isLoading) return <Loader />;

  if (error || !selectBook) {
    return (
      <p className="text-center text-red-600">{error || "Book not found."}</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">{selectBook.title}</h1>
          <p className="text-gray-700">{selectBook.description}</p>
          <p className="text-indigo-500 font-semibold">
            Price: ₹{selectBook.price}
          </p>
          <p className="text-sm text-gray-500">Author: {selectBook.author}</p>
          <p className="text-sm text-gray-500">
            Category: {selectBook.category}
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button onClick={() => navigate(`book/${bookId}/order`)}>
              Place Order
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(`/book/${bookId}/reviews`)}
            >
              View Reviews
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete Book
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate(`/book/${bookId}/edit`)}
            >
              Edit Book
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookPage;
