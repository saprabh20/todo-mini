import React, { useEffect, useState } from "react";
import HeaderBar from "./components/HeaderBar";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";
import FooterBar from "./components/FooterBar";

const App = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // function setTodosInLocalStorage() {
    //     localStorage.setItem("todos", JSON.stringify(todos));
    //     getTodosFromLocalStorage();
    // }

    // function getTodosFromLocalStorage() {
    //     const storedTodos = localStorage.getItem("todos");
    //     if (storedTodos) {
    //         setTodos(JSON.parse(storedTodos));
    //     } else {
    //         setTodos([]);
    //     }
    // }

    function addTodo(todo) {
        setTodos([...todos, todo]);
    }

    function completeTodo(todo) {
        const todoId = todo.id;
        const updatedTodos = todos.map((t) =>
            t.id === todoId ? { ...t, completed: true } : t
        );
        setTodos(updatedTodos);
    }

    function deleteTodo(todo) {
        const todoId = todo.id;
        const updatedTodos = todos.filter((t) => t.id !== todoId);
        setTodos(updatedTodos);
    }

    console.log(todos);
    return (
        <div className="w-[100vw] h-[100vh] bg-slate-100">
            <div className="header">
                <HeaderBar />
            </div>
            <div className="flex w-full justify-center p-4">
                <TodoInput addTodo={addTodo} />
            </div>
            <div className="flex w-full justify-center p-4">
                <Todos
                    todos={todos}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                />
            </div>
            <div className="flex w-full justify-center p-4">
                <FooterBar />
            </div>
        </div>
    );
};

export default App;
