import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { menuData } from "../staticData";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header>
      <nav className="max-md:px-4">
        <div
          data-aos="fade-down"
          className="custom-container flex items-center  justify-between  bg-light-gray px-6 py-3 mt-2  rounded-full"
        >
          <h1 className="text-xl font-medium">
            <a href="#">
              <span className="text-primary">Nelson</span>.Dev
            </a>
          </h1>
          <button
            onClick={() => setIsSearchOpen((open) => !open)}
            className="cursor-pointer md:hidden  bg-primary p-2 rounded-md"
          >
            <Search className="icon-sm" />
          </button>

          <ul className="hidden md:flex items-center gap-5 font-medium">
            {menuData.map((menuItem) => (
              <li
                key={menuItem.id}
                className="hover:text-primary transition-all duration-300"
              >
                <a href={`#${menuItem.link}`}>{menuItem.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {isSearchOpen && (
          <ul
            className={`flex flex-col fixed  z-50 w-full md:hidden py-2 transition-opacity duration-300   gap-2.5 divide-y divide-light-gray bg-black`}
          >
            {menuData.map((menuItem) => (
              <li key={menuItem.id}>
                <a
                  onClick={() => setIsSearchOpen(false)}
                  className="block hover:text-primary transition-all duration-300   px-4 py-2 rounded-md"
                  href={`#${menuItem.link}`}
                >
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
