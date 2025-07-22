import React, { useEffect } from "react";
import { useOrderStore } from "@/store/useOrderStore";
import { Loader } from "@/components/ui/loader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const OrderPage = () => {
  const {
    fetchUserOrder,
    orders,
    deleteOrder,
    getOrderDetails,
    isLoading,
  } = useOrderStore();

  useEffect(() => {
    fetchUserOrder();
  }, []);

  if (isLoading) return <Loader />;

  console.log("Orders from useOrderStore:", orders);
console.log("Type of orders:", typeof orders);


  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <h3 className="text-xl font-bold mb-6 text-indigo-100">Your Orders</h3>

      {orders.length === 0 ? (
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner text-center">
          <p className="text-gray-300 text-lg">You haven’t placed any order yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card
              key={order.id}
              className="bg-white/5 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl text-white"
            >
              <CardContent className="p-6 space-y-4">
                <div>
                  <strong className="text-indigo-300">Order ID:</strong> {order.id}
                </div>
                <div>
                  <strong className="text-indigo-300">Book ID:</strong> {order.bookId}
                </div>
                <div>
                  <strong className="text-indigo-300">Quantity:</strong> {order.quantity}
                </div>
                <div>
                  <strong className="text-indigo-300">Status:</strong>{" "}
                  <Badge variant="outline" className="bg-green-600/30 border-green-300 text-green-100">
                    {order.status}
                  </Badge>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button
                    onClick={() => getOrderDetails(order.id)}
                    variant="outline"
                  >
                    Refresh Details
                  </Button>
                  <Button
                    onClick={() => deleteOrder(order.id)}
                    variant="destructive"
                  >
                    Delete Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;

