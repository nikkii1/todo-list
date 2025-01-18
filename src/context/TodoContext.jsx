"use client"

import { createContext, useContext, useReducer } from 'react'

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Buy groceries',
      completed: false,
      important: false,
      starred: false,
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Finish project report',
      completed: false,
      important: true,
      starred: false,
      createdAt: new Date()
    },
    // Add more sample tasks...
  ],
  selectedTask: null,
  sidebarOpen: true,
  rightSidebarOpen: false,
  viewMode: 'list',
  darkMode: false
}

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      }
    case 'TOGGLE_IMPORTANT':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, important: !task.important }
            : task
        )
      }
    case 'TOGGLE_STAR':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, starred: !task.starred }
            : task
        )
      }
    case 'SELECT_TASK':
      return {
        ...state,
        selectedTask: action.payload,
        rightSidebarOpen: !!action.payload
      }
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen
      }
    case 'TOGGLE_RIGHT_SIDEBAR':
      return {
        ...state,
        rightSidebarOpen: !state.rightSidebarOpen
      }
    case 'SET_VIEW_MODE':
      return {
        ...state,
        viewMode: action.payload
      }
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        selectedTask: null,
        rightSidebarOpen: false
      }
    default:
      return state
  }
}

const TodoContext = createContext(null)

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  return context
}
