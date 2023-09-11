import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import DarkModeButton from "./DarkModeButton";
const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer inline-block" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl underline decoration-6 decoration-orange-400 text-center">
            The News Express
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe us
          </button>
        </div>
      </div>
      <Navbar />
      <SearchBar />
    </header>
  );
};

export default Header;
