import { Menu, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="flex items-center justify-between bg-light-gray px-6 py-3 w-full max-w-screen-xl mt-2 md:mx-auto rounded-full">
          <h1 className="text-xl font-medium">
            <a href="#">
              <span className="text-primary">Nelson</span>.Dev
            </a>
          </h1>
          <button
            onClick={() => setIsSearchOpen((open) => !open)}
            className="cursor-pointer md:hidden  bg-primary p-2 rounded-md"
          >
            <Search className="w-6 h-6" />
          </button>

          <ul className="hidden md:flex items-center gap-5 font-medium">
            <li className="hover:text-primary transition-all duration-300">
              <a href="#about-me">About Me</a>
            </li>
            <li className="hover:text-primary transition-all duration-300">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-primary transition-all duration-300">
              <a href="#tech">Tech Stack</a>
            </li>
            <li className="hover:text-primary transition-all duration-300">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        {isSearchOpen && (
          <ul className="flex flex-col md:hidden px-6 py-2  gap-2 divide-y divide-light-gray bg-black">
            <li className="hover:text-primary transition-all duration-300 pb-2">
              <a href="#about-me">About Me</a>
            </li>
            <li className="hover:text-primary transition-all duration-300 pb-2">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-primary transition-all duration-300 pb-2">
              <a href="#tech">Tech Stack</a>
            </li>
            <li className="hover:text-primary transition-all duration-300 pb-2">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
