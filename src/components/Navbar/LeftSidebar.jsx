
import {
  ListTodo,
  Calendar,
  Star,
  Clock,
  UserSquare,
  Plus,
  Info,
} from "lucide-react";
import { useTodo } from "../../context/TodoContext";
import leaduserdemo from "../../assets/leaduserdemo.png";
export function LeftSidebar() {
  const { state } = useTodo();
  const pendingTasks = state.tasks.filter((task) => !task.completed).length;
  const completedTasks = state.tasks.filter((task) => task.completed).length;
  const totalTasks = state.tasks.length;

  return (
    <div className="h-full flex flex-col p-4">
      {/* User Profile */}
      <div className="flex items-center gap-4 mx-auto mt-4">
        <div className="flex flex-col items-center mb-6">
          <img
            src={leaduserdemo}
            alt="Profile"
            className="w-16 h-16 rounded-full mb-2"
          />
          <h2 className="font-medium">Hey, ABCD</h2>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1  dark:bg-slate-700 bg-white rounded-lg p-2">
        <nav className="flex-1 ">
          <ul className="space-y-2 ">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ListTodo className="h-5 w-5 text-[#347937]" />
                <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit'] dark:text-green-300">
                  All Tasks
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e8f5e9] dark:bg-green-200/20"
              >
                <Calendar className="h-5 w-5 text-[#347937]" />
                <span className="text-[#347937] text-[15px] font-medium font-['Outfit'] dark:text-green-200">
                  Today
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Star className="h-5 w-5 text-[#347937]" />
                <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit'] dark:text-green-200">
                  Important
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Clock className="h-5 w-5 text-[#347937]" />
                <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit'] dark:text-green-200">
                  Planned
                </span>
              </a>
            </li>
            <li className="mt-4 ">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <UserSquare className="h-5 w-5 text-[#347937]" />
                <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit'] dark:text-green-200">
                  Assigned to me
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div >
        <button className="mt-4 h-20  flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-green-200 dark:hover:bg-green-500/30  dark:text-green-200 bg-green-300/20">
          <Plus className="h-5 w-5 text-[#347937]" />
          <span className="text-[#1a271b] text-[15px]  font-medium font-['Outfit'] dark:text-green-200">
            Add list
          </span>
        </button>
      </div>
      {/* Today's Tasks Stats */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <h3 className="text-black dark:text-green-600 text-xl font-medium font-['Inter']">
            Today Tasks
          </h3>
          <Info className="h-4 w-4 text-gray-400" />
        </div>
        <div className="text-black dark:text-gray-300 text-[32px] font-medium font-['Inter']">
          {totalTasks}
        </div>
        <div className="relative h-32 w-32 mx-auto ">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-[#e8f5e9] dark:stroke-green-100/"
              strokeWidth="4"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-[#347937]"
              strokeWidth="4"
              strokeDasharray={90}
              transform="rotate(-90 18 18)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-black dark:text-green-500 text-xs font-normal font-['Inter']">
                Pending
              </div>
              <div className="text-black dark:text-gray-200 text-xs font-normal font-['Inter']">
                {pendingTasks}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
