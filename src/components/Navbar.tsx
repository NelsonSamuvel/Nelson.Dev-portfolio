import { Search } from "lucide-react";
import { menuData } from "../staticData";
import { motion } from "motion/react";

const Navbar = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <header>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-md:px-4"
      >
        <div
          data-aos="fade-down"
          className="custom-container flex items-center justify-between bg-light-gray px-6 py-3 mt-2 rounded-full shadow-lg backdrop-blur-sm bg-opacity-90  hover:shadow-xl transition-all duration-500"
        >
          <h1 className="text-xl font-medium">
            <a href="#" className="group">
              <span className="text-primary group-hover:text-primary/80 transition-colors duration-300">
                Nelson
              </span>
              <span className="group-hover:text-primary/60 transition-colors duration-300">
                .Dev
              </span>
            </a>
          </h1>
          <button
            onClick={() => setIsSearchOpen((open) => !open)}
            className="cursor-pointer md:hidden bg-primary p-2 rounded-md hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Search className="icon-sm" />
          </button>

          <ul className="hidden md:flex items-center gap-5 font-medium">
            {menuData.map((menuItem) => (
              <li
                key={menuItem.id}
                className="hover:text-primary transition-all duration-300 relative group"
              >
                <a
                  href={`#${menuItem.link}`}
                  className="relative px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                >
                  {menuItem.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {isSearchOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex flex-col fixed z-50 left-4 right-4 md:hidden py-2 transition-all duration-300 gap-2.5 divide-y divide-light-gray bg-black/95 backdrop-blur-md shadow-2xl`}
          >
            {menuData.map((menuItem) => (
              <li
                key={menuItem.id}
                className="transform hover:translate-x-2 transition-transform duration-300"
              >
                <a
                  onClick={() => setIsSearchOpen(false)}
                  className="block hover:text-primary transition-all duration-300 px-4 py-2 rounded-md hover:bg-primary/10 relative group"
                  href={`#${menuItem.link}`}
                >
                  {menuItem.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </header>
  );
};

export default Navbar;
