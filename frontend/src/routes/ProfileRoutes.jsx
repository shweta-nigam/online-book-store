import React from "react";
import { Route } from "react-router-dom";

import OrderPage from "@/pages/Profile/ProfileOrderPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import ProfileSettingPage from "@/pages/Profile/profileSettingPage";
import ProtectedRoute from "./ProtectedRoute";
import ReviewPage from "@/pages/Book/ReviewPage";

const ProfileRoute = (
  <>
    <Route path="/profile" element={<ProfilePage />}>
      <Route path="orders" element={<OrderPage />} />
      <Route path="reviews" element={<ReviewPage />} />
      <Route
        path="settings"
        element={
          <ProtectedRoute>
            <ProfileSettingPage />
          </ProtectedRoute>
        }
      />
    </Route>
  </>
);

export default ProfileRoute;

