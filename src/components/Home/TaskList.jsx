
import { useState } from 'react'
import { Bell, RotateCcw, Calendar, Star } from 'lucide-react'



export function TaskList() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Buy groceries', completed: false, important: false },
    { id: '2', text: 'Finish project report', completed: false, important: true },
    { id: '3', text: 'Call the bank', completed: false, important: false },
    { id: '4', text: 'Schedule dentist appointment', completed: false, important: false },
    { id: '5', text: 'Plan weekend trip', completed: false, important: false },
    { id: '6', text: 'Read a book', completed: true, important: false },
    { id: '7', text: 'Clean the house', completed: true, important: false },
    { id: '8', text: 'Prepare presentation', completed: true, important: false },
    { id: '9', text: 'Update blog', completed: true, important: false },
  ])

  
  const [newTask, setNewTask] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if (!newTask.trim()) return

    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        text: newTask,
        completed: false,
        important: false
      }
    ])
    setNewTask('')
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const toggleImportant = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, important: !task.important } : task
    ))
  }

  return (
    <div className="flex-1 p-6 ">
      <div className=" mx-auto">
        <div className="flex items-baseline justify-start mb-6">
          <select className="bg-transparent border-none text-lg font-medium focus:outline-none">
            <option>To Do</option>
          </select>
        </div>
        <div className="bg-green-300/30 rounded-xl justify-center h-32 mb-8 p-4">
          <form onSubmit={addTask} className="mb-6">
            <div className=" rounded-lg p-4 flex gap-4">
              <input
                type="text"
                placeholder="Add A Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="flex-1  bg-transparent dark:text-white placeholder-white focus:outline-none"
              />
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Bell className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Calendar className="w-5 h-5" />
                </button>
              </div>
              <button
                type="submit"
                className="px-3 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                ADD TASK
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-1">
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 p-3 hover:bg-green-300/30  rounded-lg group"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="w-5 h-5 border-2 border-gray-300 rounded-sm checked:bg-green-600 checked:border-green-600"
                />
                <span className="flex-1 text-black dark:text-gray-200">{task.text}</span>
                <button
                  onClick={() => toggleImportant(task.id)}
                  className={`${
                    task.important ? "text-yellow-500" : "text-gray-400"
                  } hover:text-yellow-500`}
                >
                  <Star className="w-5 h-5" />
                </button>
              </div>
            ))}
        </div>

        {tasks.some((tasks) => tasks.completed) && (
          <div className="mt-6">
            <h3 className="text-green-500 mb-2">Completed</h3>
            <div className="space-y-1">
              {tasks
                .filter((task) => task.completed)
                .map((tasks) => (
                  <div
                    key={tasks.id}
                    className="flex items-center gap-3 p-3 hover:bg-green-300/30 rounded-lg group"
                  >
                    <input
                      type="checkbox"
                      checked={tasks.completed}
                      onChange={() => toggleComplete(tasks.id)}
                      className="w-5 h-5 border-2 border-gray-300 checked:bg-green-600 checked:border-green-600"
                    />
                    <span className="flex-1 line-through text-gray-400">
                      {tasks.text}
                    </span>
                    <button
                      onClick={() => toggleImportant(tasks.id)}
                      className={`${
                        tasks.important ? "text-yellow-500" : "text-gray-400"
                      } hover:text-yellow-500`}
                    >
                      <Star className="w-5 h-5"/>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

