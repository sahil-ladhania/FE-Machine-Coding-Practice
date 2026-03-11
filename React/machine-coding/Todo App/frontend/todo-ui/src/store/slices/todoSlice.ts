import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    items: Todo[];
}

const initialState: TodoState = {
    items: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            // Logic
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            // Logic
        },
        clearTodos: (state) => {
            // Logic
        },
    },
});

export const { addTodo, toggleTodo, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;