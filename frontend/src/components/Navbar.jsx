import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between mt-[-22px] bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)]">
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
  );
}
