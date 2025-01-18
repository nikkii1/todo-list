import { Menu, Search, Grid3X3, List, Moon, Sun, X } from "lucide-react";
import { useTodo } from "../context/TodoContext";
import { LeftSidebar } from "../components/Navbar/LeftSidebar";
import { RightSidebar } from "../components/Navbar/RightSidebar";
import { useState } from "react";
import logo from "../assets/logo.svg";

export function Layout({ children }) {
  const { state, dispatch } = useTodo();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className={`grid ${state.sidebarOpen ? "grid-cols-[16rem,1fr]" : "grid-cols-1"} bg-slate-900 ${state.darkMode ? "dark" : ""}`}>
      {/* Left Sidebar */}
      <div
        className={`fixed ${state.sidebarOpen ? "col-end-1" : ""} left-0 top-0 h-full bg-white dark:bg-gray-900 transition-all duration-300 ${
          state.sidebarOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <LeftSidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${state.sidebarOpen ? "col-start-2" : "col-start-1 w-full"} transition-all duration-300`}>
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 border-b bg-white dark:bg-gray-900">
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
              className="p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Do It" className="h-24 w-24" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white mr-2"
                  autoFocus
                />
              )}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
              >
                {searchOpen ? (
                  <X className="h-5 w-5 dark:text-gray-200" />
                ) : (
                  <Search className="h-5 w-5 dark:text-gray-200" />
                )}
              </button>
            </div>
            <button
              onClick={() =>
                dispatch({
                  type: "SET_VIEW_MODE",
                  payload: state.viewMode === "list" ? "grid" : "list",
                })
              }
              className="p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
            >
              {state.viewMode === "list" ? (
                <Grid3X3 className="h-5 w-5 dark:text-gray-200" />
              ) : (
                <List className="h-5 w-5 dark:text-gray-200" />
              )}
            </button>
            <button
              onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
              className="p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
            >
              {state.darkMode ? (
                <Sun className="h-5 w-5 dark:text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 dark:text-gray-200" />
              )}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-950">
          {children}
        </main>
      </div>

      {/* Right Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full bg-white dark:bg-gray-900 transition-all duration-300 ${
          state.rightSidebarOpen ? "w-80" : "w-0"
        } overflow-hidden`}
      >
        <RightSidebar />
      </div>
    </div>
  );
}
