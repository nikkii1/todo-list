import { Grid3X3, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.svg";
import { toogleTheme } from "../../redux/Theme/themeSlice";

const Header = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isListView, setIsListView] = useState(true);
  const dispatch = useDispatch();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    dispatch(toogleTheme());
  };

  return (
    <header className="flex sticky z-10 top-0 items-center justify-between px-4 py-2 border-b bg-white dark:border-gray-700 dark:bg-gray-800 transition-colors duration-200">
      <div className="flex items-center gap-2 ">
        <button
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          <Menu className="w-5 h-5 dark:text-white" />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex w-24 items-center justify-center rounded-lg">
            <img src={logo} alt="Logo" />
          </div>
          <span className="font-semibold text-lg dark:text-white"></span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Search bar */}
        <div className="flex items-center gap-4">
          {isSearchOpen && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </div>
          )}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            {isSearchOpen ? (
              <X className="w-5 h-5 dark:text-white" />
            ) : (
              <Search className="w-5 h-5 dark:text-white" />
            )}
          </button>
        </div>

        {/* List/Grid View Toggle */}
        <button
          onClick={() => setIsListView(!isListView)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          title={isListView ? "Switch to grid view" : "Switch to list view"}
        >
          <Grid3X3 className="w-5 h-5 dark:text-white" />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 dark:text-white" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
