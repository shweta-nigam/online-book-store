import React from "react"
import { Route } from "react-router-dom"
import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from "@/pages/Auth/SignUpPage";

const authRoute = (
    <>
        <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<SignupPage />} />

     
    </>
)