import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ addTodo }) => {
    const [input, setInput] = useState("");
    function addTask(e){
        if (input !== "") {
            const todo = {
                id: uuidv4(),
                text: input,
                completed: false,
            };
            addTodo(todo);
            setInput("");
        } else {
            alert("Please enter a task");
        }
    }
    return (
        <div className="w-full lg:w-[80%] flex flex-col items-center">
            <TextInput
                type="text"
                placeholder="Enter a new task ↵ "
                className="w-full mb-2"
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                value={input}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addTask();
                    }
                }}
            />
            <button
                className="w-[30%] h-10 rounded-lg text-[#F5EFFF] bg-[#A294F9] hover:bg-violet-500"
                onClick={() => {
                    addTask();
                }}
            >
                Add Task
            </button>
        </div>
    );
};

export default TodoInput;
