import { useState } from "react";
import TodoItemComponent from "./TodoItemComponent";
import type { Todo } from "../../types/todoTypes";

export default function TodosComponent() {
    // State Variables
    const [todoName , setTodoName] = useState("");
    const [todos , setTodos] = useState<Todo[]>([]);

    // Handler Functions
    const handleInputChange = (e: any) => {
        setTodoName(e.target.value);
    };

    const addTodo = () => {
        if(!todoName.trim()){
            return;
        };

        const newTodo : Todo = {
            id: Date.now(),
            name: todoName,
            isTimerRunning: false,
            timer: "00:00"
        };

        setTodos(prev => [...prev , newTodo]);
        setTodoName("");
    };

    const startTimer = (todoID: number) => {
        console.log("Timer Started...");

    };

    const resetTimer = (todoID: number) => {
        console.log("Timer Reset...");
    };

    const deleteTodo = (todoID: number) => {
        setTodos(prevTodos => prevTodos.filter((pt) => pt.id !== todoID));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 space-y-6">
                {/* Heading */}
                <h1 className="text-2xl font-bold text-gray-800 text-center">
                    Todo List with Timer
                </h1>
                {/* Content */}
                <p className="text-gray-600 text-center">
                    Build a todo list where each task has its own timer that can be started, paused, and reset.
                </p>
                {/* Main Todo Component */}
                <div className="space-y-4">
                    {/* Heading */}
                    <h2 className="text-xl font-semibold text-gray-700">
                        Todo with Timer
                    </h2>
                    {/* Input & Button */}
                    <div className="flex gap-2">
                        <input
                            onChange={handleInputChange}
                            value={todoName}
                            type="text"
                            placeholder="Enter todo"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button onClick={addTodo} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Add
                        </button>
                    </div>
                    {/* Todo Lists */}
                    {
                        todos.map((t) => (
                            <TodoItemComponent 
                                key={t.id} 
                                data={t}
                                onStart={startTimer}
                                onReset={resetTimer}
                                onDelete={deleteTodo}
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};