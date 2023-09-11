"use client";
import { categories } from "@/constants";
import Link from "next/link";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const isActive = (path: string) => {
    return pathName?.split("/").pop() === path;
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-6 text-xs md:text-sm gap-4 pb-10 mx-auto border-b">
      {categories.map((category: Category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
};

export default Navbar;
