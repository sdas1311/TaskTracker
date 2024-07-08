import {createContext,useContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
        id : 1 ,
        text : 'Learn React',
        completed : false,
        }
    ],
    addTodo:(text)=>{},
    editTodo:(id,text)=>{},
    removeTodo:(id)=>{},
    toggleTodo:(id)=>{}
});

export const useTodoContext = ()=>useContext(TodoContext);

export const TodoContextprovider = TodoContext.Provider;