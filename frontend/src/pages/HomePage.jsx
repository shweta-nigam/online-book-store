import { useAuthStore } from "../store/useAuthStore";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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

const HomePage = () => {
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="
    bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(5,87,150,0.8)_35%,rgba(0,0,0,0.85)_100%),url('/bg.png')]
    bg-cover bg-center w-full h-auto"
      >
        <header className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between mt-[-22px]">
  <img
    src="/logo.png"
    alt="MyApp Logo"
    className="h-26 max-w-[200px] w-auto z-50"
  />

  <button
    className="md:hidden text-white z-50"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>

  <div className="hidden md:block absolute left-[230px]">
    <input
      type="text"
      placeholder="Search books..."
      className="px-4 py-2 w-[250px] rounded-full text-white bg-black/40 border border-white/40 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-300"
    />
  </div>

  <nav className="hidden md:flex items-center gap-6">
    <NavigationMenu>
      <NavigationMenuList>
        {["Home", "About", "Contact", "Books"].map((item) => (
          <NavigationMenuItem key={item}>
            <NavigationMenuLink asChild>
              <a
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="px-3 py-2 text-white text-2xl font-medium hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>

    {!authUser ? (
      <>
        <Button
          variant="outline"
          className="text-white bg-black border-white  hover:text-black hover:bg-white hover:border-black transition-colors duration-300"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          variant="outline"
          className="text-white bg-black border-white  hover:text-black hover:bg-white hover:border-black transition-colors duration-300"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </>
    ) : (
      <Button
        variant="outline"
        className="text-white bg-black border-white hover:text-black hover:bg-white hover:border-black transition-colors duration-300 rounded-3xl"
        onClick={() => navigate("/profile")}
      >
        Profile
      </Button>
    )}
  </nav>

  {/* Mobile Nav */}
  {menuOpen && (
    <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md text-white px-6 py-4 z-40">
      <ul className="space-y-4 text-lg">
        {["Home", "About", "Contact", "Books"].map((item) => (
          <li key={item}>
            <a
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className="block hover:text-blue-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
        {!authUser ? (
          <>
            <li>
              <button
                className="w-full text-left"
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="w-full text-left"
                onClick={() => {
                  navigate("/signup");
                  setMenuOpen(false);
                }}
              >
                Sign Up
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              className="w-full text-left"
              onClick={() => {
                navigate("/profile");
                setMenuOpen(false);
              }}
            >
              Profile
            </button>
          </li>
        )}
      </ul>
    </div>
  )}
</header>

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
