import { useAuthStore } from "../store/useAuthStore";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";
import { FeaturedBooks } from "@/components/HomePage/FeaturedBooks";
import AuthorSpotlights from "@/components/HomePage/AuthorSpotlights";
import Testimonials from "@/components/HomePage/Testimonials";
import LimitedTimeDeals from "@/components/HomePage/LimitedTimeDeals";
import JoinCommunity from "@/components/HomePage/JoinCommunity";
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <div
        className="
    bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(5,87,150,0.8)_35%,rgba(0,0,0,0.85)_100%),url('/bg.png')]
    bg-cover bg-center w-full h-auto"
      >
       
         <Navbar transparent />

        <div className="w-full h-screen flex items-center justify-center px-4">
          <div className="text-center mx-auto mb-20">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
              Welcome to ReadGala
            </h1>
            <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
              Dive into a universe of stories — discover, explore, and review
              your favorite books with fellow readers.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="btn"
              onClick={() => navigate("/books")}
            >
              Browse Books
            </Button>
          </div>
        </div>
      </div>

      <FeaturedBooks />
      <AuthorSpotlights />
      <Testimonials />
      <LimitedTimeDeals />
      <JoinCommunity />
    </>
  );
};

export default HomePage;
