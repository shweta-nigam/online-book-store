import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from "@/pages/Auth/SignUpPage";
import VerifyPage from "@/pages/Auth/VerifyPage";

const AuthRoute = (
  <>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/verify" element={<VerifyPage />} />
  </>
);
export default AuthRoute;
