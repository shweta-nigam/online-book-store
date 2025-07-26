import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/books?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false); // close menu after search
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="MyApp Logo"
          className="h-12 w-auto max-w-[160px]"
        />

        {/* Desktop Search */}
        <div className="hidden md:block ml-4">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="px-4 py-2 w-[250px] rounded-full text-white bg-black/40 border border-white/40 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {["Home", "About", "Contact", "Books"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink asChild>
                    <a
                      href={`/${
                        item.toLowerCase() === "home" ? "" : item.toLowerCase()
                      }`}
                      className="px-3 py-2 text-white text-lg font-medium hover:text-blue-400 transition-colors"
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

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="px-4 py-2 w-full rounded-full text-white bg-black/40 border border-white/40 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-300"
          />

          {["Home", "About", "Contact", "Books"].map((item) => (
            <a
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className="text-lg font-medium text-white hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
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
