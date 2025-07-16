import { useAuthStore } from "../store/useAuthStore";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";
import { FeaturedBooks } from "@/components/FeaturedBooks";
import AuthorSpotlights from "@/components/AuthorSpotlights";
import Testimonials from "@/components/Testimonials";
import LimitedTimeDeals from "@/components/LimitedTimeDeals";
import JoinCommunity from "@/components/JoinCommunity";

const HomePage = () => {
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="
    bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(5,87,150,0.8)_35%,rgba(0,0,0,0.85)_100%),url('/bg.png')]
    bg-cover bg-center w-screen h-auto"
      >
        <header className="w-full px-6 py-4 flex items-center justify-between mt-[-22px]">
          <img
            src="/logo.png"
            alt="MyApp Logo"
            className="h-26 max-w-[200px] w-auto"
          />

          <div className="flex items-center gap-6">
            <nav className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {["Home", "About", "Contact", "Books"].map((item) => (
                    <NavigationMenuItem key={item}>
                      <NavigationMenuLink asChild>
                        <a
                          href={`/${
                            item.toLowerCase() === "home"
                              ? ""
                              : item.toLowerCase()
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
            </nav>

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
          </div>
        </header>

        {/* Hero section */}
        <div className="w-screen h-screen flex items-center justify-center px-4">
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
              className="text-lg px-6 py-4 text-white bg-gray-900 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300"
              onClick={() => navigate("/books")}
            >
              Browse Books
            </Button>
          </div>
        </div>
      </div>

      <FeaturedBooks />
      {/* <CategoryPreview /> */}
      <AuthorSpotlights />
      <Testimonials />
      <LimitedTimeDeals />
      <JoinCommunity />
    </>
  );
};

export default HomePage;
