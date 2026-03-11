import { useCallback, useState } from "react";
import P2_TodoItem from "./P2_Child";

const todos = [
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Complete React practice" },
    { id: 3, title: "Go for a walk" },
    { id: 4, title: "Read a book" },
    { id: 5, title: "Cook dinner" },
];

export default function P2() {
    // State Variables
    const [todoList , setTodoList] = useState(todos);

    // Handler Functions
    const handleDeleteTodo = useCallback((todoID) => {
        setTodoList(prev => prev.filter((todo) => todo.id !== todoID));
    }, []);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q2. Build a todo list where the parent holds the list state and passes an onDelete(id) handler to each TodoItem. Wrap onDelete in useCallback so it doesn't cause all items to re-render when one is deleted.
                </h1>

                {
                    todoList.map((todo) => (
                        <P2_TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
                    ))
                }
            </div>
        </>
    )
};