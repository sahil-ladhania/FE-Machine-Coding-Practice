import { memo } from "react";

const P2_TodoItem = memo(({ todo, onDelete }) => {

    console.log(`TodoItem ${todo.id} re-rendered!`);

    return (
        <div className="border my-2 p-2 flex items-center justify-between">
            <p>{todo.title}</p>
            <button onClick={() => onDelete(todo.id)} className="border p-2">Delete</button>
        </div>
    );
});

export default P2_TodoItem;