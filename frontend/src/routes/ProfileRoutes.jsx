import React from "react";
import { Route } from "react-router-dom";
import OrderPage from "@/pages/Profile/OrderPage";
import ProfilePage from "@/pages/Profile/ProfilePage";

const ProfileRoute = (
  <>
    
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="orders" element={< OrderPage />} />

        </Route>
  </>
);

export default ProfileRoute
