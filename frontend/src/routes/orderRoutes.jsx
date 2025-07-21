import React from "react";
import { Route } from "react-router-dom";
import PlaceOrder from "@/pages/Order/PlaceOrder";

const OrderRoutes = (
  <>
    {/* <Route path="/book/:bookId/order" element={<OrderPage />} /> */}
    <Route path="/book/:bookId/order" element={<PlaceOrder />} />
  </>
);

export default OrderRoutes;
