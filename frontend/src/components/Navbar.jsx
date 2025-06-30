import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      style={
        isHome
          ? {
              background: "linear-gradient(90deg, rgba(0,36,31,1) 0%, rgba(5,87,150,1) 35%, rgba(0,0,0,1) 100%)"
            }
          : {}
      }
      className={`flex items-center justify-between px-6 py-4 shadow ${
        isHome ? "bg-transparent" : "bg-white"
      }`}
    >
      <img src="/logo.png" alt="MyApp Logo" className="h-32 w-auto" />

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="px-4 py-2">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="px-4 py-2">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="px-4 py-2">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <Button asChild>
        <a href="/signup">Sign Up</a>
      </Button>
    </header>
  );
}
