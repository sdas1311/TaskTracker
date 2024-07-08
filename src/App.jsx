
import React, { useEffect, useState } from 'react'
import './App.css'
import { TodoContextprovider } from './contexts/todocontext'
import {TodoForm, TodoItem } from './components/Index'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos((prev)=> [...prev, {...text}] )
  }

  // const editTodo = (id, text) => {
  //   setTodos(
  //     todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
  //   )
  // }

  const editTodo = (id, text) => { 
    setTodos(
      (prev) => prev.map(
        (prevTodo) => (prevTodo.id === id ? text : prevTodo )
      )
    ) 
  }

  const removeTodo = (id) => {
    setTodos(
      (prev) =>prev.filter((todo) => todo.id !== id)
    )
  }
  
  const toggleTodo = (id) => {
    setTodos(
      (prev)=> prev.map(
        (prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
      )
    )
  }
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  } , [] )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]) 

  return (
    <TodoContextprovider value={{ todos, addTodo, removeTodo, editTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map( 
              (todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </TodoContextprovider>
  )
}

export default App
