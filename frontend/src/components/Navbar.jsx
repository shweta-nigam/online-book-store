import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Navbar() {

  return (
  <header className="  w-full px-4 py-4 flex items-center justify-between   bg-[linear-gradient(90deg,rgba(0,36,31,1)_0%,rgba(5,87,150,1)_35%,rgba(0,0,0,1)_100%)]">

      <img src="/logo.png" alt="MyApp Logo" className="h-32 w-auto" />

      <nav className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="px-4 py-2 text-gray-500 text-xl">
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
