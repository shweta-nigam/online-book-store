import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOrderStore } from "../../store/useOrderStore";
import { Loader } from "@/components/ui/loader";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { placeOrder, isLoading } = useOrderStore();

  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState("pending");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bookId) {
      toast.error("Book ID is missing");
      return;
    }

    try {
      await placeOrder({ bookId, quantity, status });
      toast.success("Order placed successfully!");
    //   navigate("/orders");
    navigate("/profile/orders");

    } catch (error) {
      console.error("Order placement failed:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg w-full max-w-md text-white space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Place Your Order</h2>

        <div className="space-y-2">
          <label htmlFor="quantity" className="block text-sm font-medium">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="status" className="block text-sm font-medium">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="shipped">Shipped</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 mt-4 bg-gradient-to-r from-indigo-600 via-purple-700 to-blue-600 hover:opacity-90 transition rounded-lg font-semibold text-white"
        >
          {isLoading ? <Loader size="sm" /> : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
