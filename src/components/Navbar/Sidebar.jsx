import { Calendar, Clock, ListTodo, Plus, Star, Users } from "lucide-react";
import { useState } from "react";
import leaduserdemo from "../../assets/leaduserdemo.png";
import { cn } from "../../lib/Utils";

const tabs = [
  { id: "all", icon: ListTodo, label: "All Tasks" },
  { id: "today", icon: Calendar, label: "Today" },
  { id: "important", icon: Star, label: "Important" },
  { id: "planned", icon: Clock, label: "Planned" },
  { id: "assigned", icon: Users, label: "Assigned to me" },
];

export function Sidebar() {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="w-64  border-r flex flex-col ">
      <div className="p-4">
        <div className="flex flex-col items-center mb-6">
          <img
            src={leaduserdemo}
            alt="Profile"
            className="w-16 h-16 rounded-full mb-2"
          />
          <h2 className="font-medium">Hey, ABCD</h2>
        </div>

        <nav className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                  activeTab === tab.id
                    ? "bg-green-300/20 text-green-700 dark:text-green-300"
                    : "hover:bg-green-300/30"
                )}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <button className="w-full mt-4 flex items-center gap-2 px-3 py-2 text-sm hover:bg-green-300/30 rounded-lg">
          <Plus className="w-5 h-5" />
          Add list
        </button>
      </div>

      <div className="mt-auto p-4">
        <div className="bg-green-300/30 rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium mb-2">Today Tasks</h3>
          <div className="w-32 h-32 mx-auto relative">
            <svg
              viewBox="0 0 36 36"
              className="w-full h-full transform -rotate-90"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-[#edf3ed] stroke-2"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                strokeDasharray="100"
                strokeDashoffset="25"
                className="stroke-green-600 stroke-2"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold">
              11
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
