import { List, ToggleSwitch } from "flowbite-react";
import React, { useState } from "react";

const Todos = ({ todos, completeTodo, deleteTodo }) => {
    const [switch1, setSwitch1] = useState(false);
    console.log(switch1);
    return (
        <div className="w-full lg:w-[50%] overflow-y-auto h-[60vh]">
            <ToggleSwitch
                checked={switch1}
                onChange={setSwitch1}
                className="ml-2 mt-1 mb-4"
            />
            <List ordered={switch1}>
                {todos.map((todo) => {
                    return (
                        <List.Item
                            onDoubleClick={() => {
                                if (todo.completed === true) {
                                    deleteTodo(todo);
                                } else {
                                    completeTodo(todo);
                                }
                            }}
                            className={`${
                                todo.completed
                                    ? "text-red-500 line-through hover:text-orange-400"
                                    : "text-violet-500 hover:text-yellow-300"
                            }`}
                            key={todo.id}
                        >
                            {todo.text}
                        </List.Item>
                    );
                })}
            </List>
        </div>
    );
};

export default Todos;
