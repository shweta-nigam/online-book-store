import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar({ transparent = false }) {
  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full text-white transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]"
      }`}
    >
      {/* Top Row: Logo + Desktop Search + Nav + Hamburger */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="MyApp Logo"
          className="h-auto w-24 sm:w-28 md:w-36 lg:w-40 xl:w-44 max-w-[160px]"
        />

        {/* Desktop Search */}
        <div className="hidden md:block">
          <SearchBar placeholder="Search books..." />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {["Home", "About", "Contact", "Books"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                      className="px-3 py-2 text-white text-lg font-medium hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {!authUser ? (
            <>
              <Button
                variant="outline"
                className="text-white bg-black border-white hover:text-black hover:bg-white hover:border-black"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="outline"
                className="text-white bg-black border-white hover:text-black hover:bg-white hover:border-black"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              className="text-white bg-black border-white hover:text-black hover:bg-white hover:border-black"
              onClick={() => navigate("/profile")}
            >
              Profile
            </Button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile SearchBar (below logo and hamburger) */}
      <div className="block md:hidden px-6 pb-4">
        <SearchBar placeholder="Search books..." />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {["Home", "About", "Contact", "Books"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="text-lg font-medium text-white hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          {!authUser ? (
            <>
              <Button
                variant="outline"
                className="text-white bg-black border-white hover:text-black hover:bg-white hover:border-black"
                onClick={() => {
                  navigate("/login");
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </Button>
              <Button
                variant="outline"
                className="text-white bg-black border-white hover:text-black hover:bg-white hover:border-black"
                onClick={() => {
                  navigate("/signup");
                  setMobileMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              className="text-white bg-black border-white hover:text-black hover:bg-white hover:border-black"
              onClick={() => {
                navigate("/profile");
                setMobileMenuOpen(false);
              }}
            >
              Profile
            </Button>
          )}
        </div>
      )}
    </header>
  );
}

