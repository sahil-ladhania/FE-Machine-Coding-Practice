import express, { type Application } from 'express';
import dotenv from 'dotenv';
import { createTodoController, deleteTodoController, getAllTodosController, getSpecificTodoController, updateTodoController } from './controllers/todo.controllers.js';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

// API Endpoints
app.post("/todo" , createTodoController);
app.patch("/todo/:todoId" , updateTodoController);
app.delete("/todo/:todoId" , deleteTodoController);
app.get("/todos" , getAllTodosController);
app.get("/todo/:todoId" , getSpecificTodoController);

app.listen(port , () => {
    console.log("Todo App Listening on Port : " , port);
});