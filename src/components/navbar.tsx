import { FC, useEffect, useRef } from "react";
import PhicosLogo from "@/assets/logo/phicos_logo.png";
import { Link, NavLink } from "react-router-dom";
import { useScroll } from "framer-motion";

import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

interface MenuListItem {
    label: string;
    path: string;
}

const Navbar: FC = () => {
    // const menuListItem: MenuListItem[] = [
    //     {
    //         label: "Works",
    //         path: "/works"
    //     },
    //     {
    //         label: "Careers",
    //         path: "/careers"
    //     },
    //     {
    //         label: "About Us",
    //         path: "/about"
    //     },
    //     {
    //         label: "Structure",
    //         path: "/structure"
    //     }
    // ];

    const menuServices: any[] = [
        {
            label: "Software Development",
            path: "/services/softdev"
        },
        {
            label: "Networking Server",
            path: "/services/networking"
        },
        {
            label: "Multimedia",
            path: "/services/multimedia"
        },
        {
            label: "Web & Mobile Development",
            path: "/services/mobiledev"
        },
        {
            label: "Graphic Design",
            path: "/services/graphic"
        },
        {
            label: "Technology Consulting",
            path: "/services/consulting"
        }
    ];

    const { scrollY } = useScroll();
    const navContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navContainer.current) {
                if (window.scrollY > 50) {
                    navContainer.current.classList.add(
                        "navShadow",
                        "drop-shadow-md"
                    );
                } else {
                    navContainer.current.classList.remove(
                        "navShadow",
                        "drop-shadow-md"
                    );
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
        <nav
            ref={navContainer}
            className="bg-slate-900 dark: py-5 transition-all"
        >
            <div className="container mx-auto flex justify-between">
                <Link to="/">
                    <img src={PhicosLogo} alt="phicos logo" className="h-12" />
                </Link>

                <div className="flex items-center flex-1 justify-end">
                    <ul className="flex gap-5 text-slate-700">
                        <NavigationMenu>
                            <NavigationMenuList className="flex justify-between">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px]">
                                            {menuServices.map((item, i) => (
                                                <li className="">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end p-3 no-underline outline-none focus:shadow-md bg-transparent hover:bg-slate-50 ease-in-out duration-150 font-light"
                                                            href="/"
                                                        >
                                                            <div className="text-sm font-medium">
                                                                {item.label}{" "}
                                                            </div>
                                                            {/* <p className="text-sm leading-tight text-muted-foreground">
                                                                Beautifully
                                                                designed
                                                                components built
                                                                with Radix UI
                                                                and Tailwind
                                                                CSS.
                                                            </p> */}
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        to="/works"
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <NavigationMenuLink>
                                            Works
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        to="/career"
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <NavigationMenuLink>
                                            Career
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        to="/aboutus"
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <NavigationMenuLink>
                                            About Us
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        to="/structure"
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <NavigationMenuLink>
                                            Structure
                                        </NavigationMenuLink>
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
