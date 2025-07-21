import React, { useEffect, useState } from "react";
import { useReviewStore } from "../../store/useReviewStore";
import { useParams } from "react-router-dom";
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ReviewPage = () => {
  const { bookId } = useParams();
  const { listReviews, addReviews, deleteReview, reviews, isLoading } = useReviewStore();

  const [form, setForm] = useState({
    title: "",
    message: "",
    rating: "",
  });

  useEffect(() => {
    if (bookId) {
      listReviews(bookId);
    }
  }, [bookId]);

  const handleInputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log("Submit clicked", form); 
    if (!form.title || !form.message || !form.rating) return;
    await addReviews({ bookId, ...form });
    setForm({ title: "", message: "", rating: "" });
  };

  return (
    <div className="w-full min-h-screen px-4 py-10 bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-center">Reviews</h1>

        {/* Review Form */}
        <Card className="bg-black/60 backdrop-blur-sm shadow-lg rounded-2xl">
          <CardContent className="p-6 md:p-8 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="title"
                placeholder="Review Title"
                value={form.title}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 placeholder-gray-400 text-white"
              />
              <Textarea
                name="message"
                placeholder="Write your review..."
                value={form.message}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 placeholder-gray-400 text-white"
              />
              <Input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                value={form.rating}
                onChange={handleInputChange}
                min="1"
                max="5"
                required
                className="bg-white/10 border-white/20 placeholder-gray-400 text-white"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200"
              >
                {isLoading ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Review List */}
        {isLoading ? (
          <div className="flex justify-center pt-10"><Loader /></div>
        ) : reviews.length === 0 ? (
          <p className="text-center text-gray-300">No reviews yet.</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="bg-white/5 border border-white/10 text-white shadow-md rounded-xl"
              >
                <CardContent className="p-5 space-y-2">
                  <h2 className="text-xl font-bold">{review.title}</h2>
                  <p className="text-gray-200">{review.message}</p>
                  <p className="text-yellow-400 font-semibold">
                    Rating: {review.rating}/5
                  </p>
                  <Button
                    variant="destructive"
                    className="mt-2 hover:bg-red-700 transition-all duration-200"
                    onClick={() => deleteReview(review.id)}
                  >
                    Delete Review
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;

