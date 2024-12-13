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
        <div className="w-full lg:w-[50%] flex flex-col items-center">
            <TextInput
                type="text"
                placeholder="Enter a new task"
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
            <Button
                outline
                gradientDuoTone="greenToBlue"
                className="w-[40%]"
                onClick={() => {
                    addTask();
                }}
            >
                Add Task
            </Button>
        </div>
    );
};

export default TodoInput;
