import React,{useState} from 'react'
import { useTodoContext } from '../contexts/todocontext';

function TodoForm() {
    const [todo, setTodo] = useState([])
    const {addTodo} =useTodoContext()
    const add = (e) =>{
        e.preventDefault()
        if(!todo) return
        addTodo({id: Math.random(),text:todo, completed: false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex gap-3">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-lg px-3 py-1 bg-indigo-500 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;