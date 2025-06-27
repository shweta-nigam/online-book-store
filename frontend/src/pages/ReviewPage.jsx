import React, { useEffect, useState } from "react";
import { useReviewStore } from "../store/useReviewStore";
import { useParams } from "react-router-dom";
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ReviewPage = () => {
  const { bookId } = useParams();
  const { listReviews, addReviews, deleteReview, reviews, isLoading } =
    useReviewStore();

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
    await addReviews({ bookId, ...form });
    setForm({ title: "", message: "", rating: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6"> Reviews </h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <Input
          type="text"
          name="title"
          placeholder="Review Title"
          value={form.title}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Write your review..."
          value={form.message}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="rating"
          placeholder="Raring(1-5)"
          value={form.rating}
          onChange={handleInputChange}
          min="1"
          max="5"
          required
        />
        <Button type="submit" disabled={isLoading}>
          Submit Review
        </Button>
      </form>

      {isLoading ? (
        <Loader />
      ) : reviews.length === 0 ? (
        <p className="text-gray-500"> No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <Card key={review.id} className="mb-4 shadow-md rounded-2xl">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{review.title}</h2>
              <p className="text-gray-700">{review.message}</p>
              <p className="text-yellow-500 font-bold">
                Rating: {review.rating}/5
              </p>
              <Button
                variant="destructive"
                className="mt-2"
                onClick={() => deleteReview(review.id)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default ReviewPage;
