import React, { useEffect, useRef, useState } from "react";
import './styles.css';
import { AiFillEdit , AiFillDelete} from "react-icons/ai";
import { MdDone } from "react-icons/md"
import { Todo } from "../model";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const SingleTodo = ({todo, todos, setTodos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])


    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo)=> todo.id === id ? {...todo, todo: editTodo }: todo ));
        setEdit(false);
    }


    const handleDone = (id: number) => {
        setTodos(todos.map((todo)=> todo.id === id ? {...todo,isDone: !todo.isDone }: todo ))
    } 

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    return (
        <form className="singletodo" onSubmit={(e) =>{ handleEdit(e, todo.id) }}>
            {
                edit ? (
                    <input type="text" className="singletodo-single-text" 
                    ref={inputRef}
                    value={editTodo} 
                    onChange={(e)=> setEditTodo(e.target.value)}/>
                ) : (
                    todo.isDone? (
                    <s className="singletodo-single-text">{todo.todo}</s>
                    ) : (
                    <span className="singletodo-single-text">{todo.todo}</span>
                    )
                ) 
            }
            <div>
                <span className="icons" onClick={() => {
                    if (!edit && !todo.isDone){
                        setEdit(!edit)
                    }
                    }} > <AiFillEdit/> </span>
                <span className="icons" onClick={()=>{handleDelete(todo.id)}}> <AiFillDelete/> </span>
                <span className="icons" onClick={()=>{handleDone(todo.id)}}> <MdDone/> </span>
            </div>

        </form>
    );
}

export default SingleTodo;