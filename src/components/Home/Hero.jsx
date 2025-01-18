import { useState } from "react";
// import { Sidebar } from "../Navbar/Sidebar";
import { TaskList } from "./TaskList";
import { TodoProvider } from "../../context/TodoContext";
import { Layout } from "../../layouts/Layout";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);
  // const [activeTab, setActiveTab] = useState("Today");
  return (
    <div className={` ${isDark ? "dark" : ""}`}>
      {/* <div className="flex bg-white dark:bg-gray-800 dark:text-white">
        <Sidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isDark={isDark}
          onThemeToggle={() => setIsDark(!isDark)}
        />
        <div className="flex-1 flex flex-col">
          <TaskList activeTab={activeTab} />
        </div>
      </div> */}

      <TodoProvider>
        <Layout>
          <TaskList />
        </Layout>
      </TodoProvider>
    </div>
  );
}
