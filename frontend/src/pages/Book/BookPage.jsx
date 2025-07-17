import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookStore } from "../../store/useBookStore";
import { useAuthStore } from "../../store/useAuthStore"; // assumed
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BookPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { fetchBookDetails, deleteBook, selectBook, isLoading, error } =
    useBookStore();
  const { user } = useAuthStore(); // 👈 user object with user.role = "admin" or "user"

  useEffect(() => {
    if (bookId) {
      fetchBookDetails(bookId);
      // optionally fetchReviews(bookId) here if you're loading reviews
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
          <CardContent className="p-8 space-y-6">
            {/* ✅ Book Cover */}
            {selectBook.coverImage && (
              <div className="w-full">
                {/* <img
                  src={selectBook.coverImage}
                  alt={selectBook.title}
                  className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-6"
                /> */}
                <img
                  src={book.bookCover}
                  alt={book.title}
                  className="h-full w-auto object-contain"
                />
              </div>
            )}

            <h1 className="font-extrabold">{selectBook.title}</h1>
            <p className="text-lg text-gray-200">{selectBook.description}</p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <p><span className="font-semibold text-white">Author:</span> {selectBook.author}</p>
              <p><span className="font-semibold text-white">Category:</span> {selectBook.category}</p>
              <p><span className="font-semibold text-white">Price:</span> ₹{selectBook.price}</p>
              <p><span className="font-semibold text-white">Availability:</span> In Stock</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-green-600 hover:bg-green-700 transition" onClick={() => navigate(`/book/${bookId}/order`)}>
                Place Order
              </Button>

              <Button variant="secondary" className="hover:bg-slate-600" onClick={() => navigate(`/book/${bookId}/reviews`)}>
                View Reviews
              </Button>

              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" onClick={() => alert("Added to cart!")}>
                Add to Cart
              </Button>

              {/* ✅ Only Admin Can See */}
              {user?.role === "admin" && (
                <>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" onClick={() => navigate(`/book/${bookId}/edit`)}>
                    Edit Book
                  </Button>
                  <Button variant="destructive" onClick={handleDelete}>
                    Delete Book
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* ✅ Reviews Section */}
        <div className="mt-12 bg-black/30 rounded-xl p-6 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>

          {selectBook.reviews && selectBook.reviews.length > 0 ? (
            <div className="space-y-4">
              {selectBook.reviews.map((review, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-4 bg-white/5">
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


