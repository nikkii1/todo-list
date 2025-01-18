// import {
//   ListTodo,
//   Calendar,
//   Star,
//   Clock,
//   UserSquare,
//   Plus,
//   Info,
// } from "lucide-react";
// import { useTodo } from "../../context/TodoContext";

// export function LeftSidebar() {
//   const { state } = useTodo();
//   const pendingTasks = state.tasks.filter((task) => !task.completed).length;
//   const completedTasks = state.tasks.filter((task) => task.completed).length;
//   const totalTasks = state.tasks.length;

//   return (
//     <div className="h-full flex flex-col p-4">
//       {/* User Profile */}
//       <div className="flex items-center gap-4 mb-8">
//         <img
//           src="/placeholder.svg?height=40&width=40"
//           alt="Profile"
//           className="w-10 h-10 rounded-full"
//         />
//         <div>
//           <h2 className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
//             Hey, ABCD
//           </h2>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1">
//         <ul className="space-y-2">
//           <li>
//             <a
//               href="#"
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               <ListTodo className="h-5 w-5" />
//               <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
//                 All Tasks
//               </span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e8f5e9] dark:bg-[#1a271b]/10"
//             >
//               <Calendar className="h-5 w-5 text-[#347937]" />
//               <span className="text-[#347937] text-[15px] font-medium font-['Outfit']">
//                 Today
//               </span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               <Star className="h-5 w-5" />
//               <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
//                 Important
//               </span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               <Clock className="h-5 w-5" />
//               <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
//                 Planned
//               </span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               <UserSquare className="h-5 w-5" />
//               <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
//                 Assigned to me
//               </span>
//             </a>
//           </li>
//         </ul>

//         <button className="mt-4 flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//           <Plus className="h-5 w-5" />
//           <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
//             Add list
//           </span>
//         </button>
//       </nav>

//       {/* Today's Tasks Stats */}
//       <div className="mt-8">
//         <div className="flex items-center gap-2">
//           <h3 className="text-black text-xl font-medium font-['Inter']">
//             Today Tasks
//           </h3>
//           <Info className="h-4 w-4 text-gray-400" />
//         </div>
//         <div className="text-black text-[32px] font-medium font-['Inter']">
//           {totalTasks}
//         </div>
//         <div className="relative h-32 w-32 mx-auto mt-4">
//           <svg className="w-full h-full" viewBox="0 0 36 36">
//             <circle
//               cx="18"
//               cy="18"
//               r="16"
//               fill="none"
//               className="stroke-[#e8f5e9] dark:stroke-[#1a271b]/10"
//               strokeWidth="4"
//             />
//             <circle
//               cx="18"
//               cy="18"
//               r="16"
//               fill="none"
//               className="stroke-[#347937]"
//               strokeWidth="4"
//               strokeDasharray={`${(completedTasks / totalTasks) * 100} 100`}
//               transform="rotate(-90 18 18)"
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               <div className="text-black text-xs font-normal font-['Inter']">
//                 Pending
//               </div>
//               <div className="text-black text-xs font-normal font-['Inter']">
//                 {pendingTasks}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { X, Plus, Bell, Calendar, Repeat, Trash2 } from "lucide-react";
import { useTodo } from "../../context/TodoContext";

export function RightSidebar() {
  const { state, dispatch } = useTodo();
  const { selectedTask } = state;

  if (!selectedTask) return null;

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
          {selectedTask.title}
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch({ type: "TOGGLE_RIGHT_SIDEBAR" })}
            className="p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Plus className="h-5 w-5" />
          <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
            Add Step
          </span>
        </button>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Bell className="h-5 w-5" />
          <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
            Set Reminder
          </span>
        </button>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Calendar className="h-5 w-5" />
          <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
            Add Due Date
          </span>
        </button>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Repeat className="h-5 w-5" />
          <span className="text-[#1a271b] text-[15px] font-medium font-['Outfit']">
            Repeat
          </span>
        </button>

        <div className="mt-4">
          <textarea
            placeholder="Add Notes"
            className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-[#347937]"
            rows={4}
          />
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-gray-500 text-sm">Created Today</span>
        <button
          onClick={() =>
            dispatch({ type: "DELETE_TASK", payload: selectedTask.id })
          }
          className="p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
        >
          <Trash2 className="h-5 w-5 text-red-500" />
        </button>
      </div>
    </div>
  );
}

