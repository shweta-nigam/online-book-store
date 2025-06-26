import { Routes, Route} from "react-router-dom"

import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import SignupPage from "@/pages/SignUpPage"
import BookPage from "../pages/BookPage";
import ReviewPage from "../pages/ReviewPage";
import NotFoundPage from "../pages/NotFoundPage";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/books" element={<BookPage/>}/>
            <Route path="/reviews" element={<ReviewPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}