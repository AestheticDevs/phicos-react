import { FC, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import PhicosLogo from "@/assets/logo/phicos_logo.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar: FC = () => {
  const location = useLocation();
  const menuServices: any[] = [
    {
      label: "Software Development",
      path: "/services/softdev",
    },
    {
      label: "Networking Server",
      path: "/services/networking",
    },
    {
      label: "Multimedia",
      path: "/services/multimedia",
    },
    {
      label: "Web & Mobile Development",
      path: "/services/mobiledev",
    },
    {
      label: "Graphic Design",
      path: "/services/graphic",
    },
    {
      label: "Technology Consulting",
      path: "/services/consulting",
    },
  ];

  const navContainer = useRef<HTMLDivElement>(null);
  const navLogo = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navContainer.current) {
        if (window.scrollY > 70) {
          navContainer.current.classList.add("navShadow", "drop-shadow-md");
          navLogo.current?.classList.add("brightness-0", "invert");
        } else {
          navContainer.current.classList.remove("navShadow", "drop-shadow-md");
          navLogo.current?.classList.remove("brightness-0", "invert");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navContainer} className="dark: bg-slate-900 py-5 transition-all">
      <div className="container mx-auto flex justify-between">
        <Link to="/">
          <img
            ref={navLogo}
            src={PhicosLogo}
            alt="phicos logo"
            className="h-12 transition-all"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end">
          <ul className="flex gap-5 text-slate-700">
            <NavigationMenu>
              <NavigationMenuList className="flex justify-between">
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={`${navigationMenuTriggerStyle()} ${location.pathname === "/" ? "active" : ""}`}
                  >
                    <NavigationMenuLink>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px]">
                      {menuServices.map((item, i) => (
                        <li key={i} className="">
                          <NavigationMenuLink asChild>
                            <Link
                              className={`flex h-full w-full select-none flex-col justify-end bg-transparent p-3 font-light no-underline outline-none duration-150 ease-in-out hover:bg-slate-50 focus:shadow-md ${location.pathname === item.path ? "active" : ""}`}
                              to={item.path}
                            >
                              <div className="text-sm font-medium">
                                {item.label}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/works"
                    className={`${navigationMenuTriggerStyle()} ${location.pathname === "/works" ? "active" : ""}`}
                  >
                    <NavigationMenuLink>Works</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/career"
                    className={`${navigationMenuTriggerStyle()} ${location.pathname === "/career" ? "active" : ""}`}
                  >
                    <NavigationMenuLink>Career</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className={`${navigationMenuTriggerStyle()} ${location.pathname === "/about" ? "active" : ""}`}
                  >
                    <NavigationMenuLink>About Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/structure"
                    className={`${navigationMenuTriggerStyle()} ${location.pathname === "/structure" ? "active" : ""}`}
                  >
                    <NavigationMenuLink>Structure</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
