import React, { useEffect, useState } from "react";
import HeaderBar from "./components/HeaderBar";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";
import FooterBar from "./components/FooterBar";
import { v4 as uuidv4 } from "uuid";

const App = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        if (todos.length == 0) {
            const todo = {
                id: "007",
                text: "Double-click to mark as completed. Double-click again to delete!",
                completed: false,
            };
            addTodo(todo);
        }
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

    function updateTodos(id, updatedText) {
        const updatedTodos = todos.map((t) =>
            t.id === id? {...t, text: updatedText } : t
        );
        setTodos(updatedTodos);
    }

    console.log(todos);
    return (
        <div className="w-[100vw] h-[100vh] bg-[#E5D9F2] max-w-[100%]">
            <div className="header">
                <HeaderBar />
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-[100%] md:w-[25%] bg-[#E5D9F2]">
                    {/* <div className="flex w-full flex-col items-center p-4">
                        <h1 className="text-2xl font-bold text-[#A294F9] hover:text-violet-500">
                            Instructions
                        </h1>
                        <div className="bg-red-200 w-14 h-[80%]">

                        </div>
                    </div> */}
                </div>
                <div className="w-[100%] md:w-[50%] bg-[#E5D9F2]">
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
                </div>
                <div className="w-[100%] md:w-[25%] bg-[#E5D9F2]">
                    {/* <div className="flex w-full justify-center p-4">
                        <h1 className="text-2xl font-bold text-[#A294F9] hover:text-violet-500">
                            About Me
                        </h1>
                    </div> */}
                </div>
            </div>
            <div className="flex w-full justify-center p-4">
                <FooterBar />
            </div>
        </div>
    );
};

export default App;
