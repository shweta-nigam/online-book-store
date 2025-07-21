import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookStore } from "../../store/useBookStore";
import { useAuthStore } from "../../store/useAuthStore";
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BookPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { fetchBookDetails, deleteBook, selectBook, isLoading, error } =
    useBookStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (bookId) {
      fetchBookDetails(bookId);
    }
  }, [bookId, fetchBookDetails]);

  const handleDelete = async () => {
    await deleteBook(bookId);
    navigate("/books");
  };

  if (isLoading) return <Loader />;

  if (error || !selectBook) {
    return (
      <p className="text-center text-red-500 font-semibold mt-10">
        {error || "Book not found."}
      </p>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-black/50 backdrop-blur-sm shadow-2xl rounded-2xl text-white">
        <CardContent className="p-6 md:p-10">
  {/* Title Above Grid */}
  <h1 className="text-sm sm:text-base font-semibold text-gray-300 uppercase tracking-wide mb-6 text-center">
    {selectBook.title}
  </h1>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* LEFT SIDE - Book Cover + Info */}
    <div className="space-y-4">
      {selectBook.bookCover && (
        <img
          src={selectBook.bookCover}
          alt={selectBook.title}
          className="w-full max-h-[400px] object-contain rounded-lg"
        />
      )}
      <p className="text-base text-gray-200">{selectBook.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
        <p>
          <span className="font-semibold text-white">Author:</span>{" "}
          {selectBook.author}
        </p>
        <p>
          <span className="font-semibold text-white">Category:</span>{" "}
          {selectBook.category}
        </p>
        <p>
          <span className="font-semibold text-white">Price:</span> ₹
          {selectBook?.price
            ? (Number(selectBook.price) * 85).toFixed(2)
            : "N/A"}
        </p>
        <p>
          <span className="font-semibold text-white">Availability:</span>{" "}
          In Stock
        </p>
      </div>
    </div>

    {/* RIGHT SIDE - Actions */}
    <div className="space-y-4 bg-white/5 p-6 rounded-xl shadow-inner">
      <h2 className="text-lg font-bold mb-2">Actions</h2>

      <Button
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={() => navigate(`/book/${bookId}/order`)}
      >
        Place Order
      </Button>

      <Button
        variant="secondary"
        className="w-full hover:bg-slate-600"
        onClick={() => navigate(`/book/${bookId}/reviews`)}
      >
        View Reviews
      </Button>

      <Button
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
        onClick={() => alert("Added to cart!")}
      >
        Add to Cart
      </Button>

      {user?.role === "admin" && (
        <>
          <Button
            variant="outline"
            className="w-full border-white text-white hover:bg-white hover:text-black"
            onClick={() => navigate(`/book/${bookId}/edit`)}
          >
            Edit Book
          </Button>

          <Button
            variant="destructive"
            className="w-full"
            onClick={handleDelete}
          >
            Delete Book
          </Button>
        </>
      )}
    </div>
  </div>
</CardContent>

        </Card>

        {/* ✅ Reviews Section */}
        <div className="mt-12 bg-black/30 rounded-xl p-6 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>

          {selectBook.reviews && selectBook.reviews.length > 0 ? (
            <div className="space-y-4">
              {selectBook.reviews.map((review, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg p-4 bg-white/5"
                >
                  <p className="text-sm italic">"{review.comment}"</p>
                  <p className="text-sm mt-2 text-gray-300">
                    – {review.user || "Anonymous"}, Rating: {review.rating}/5
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
