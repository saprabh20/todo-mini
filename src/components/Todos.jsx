import { List, ToggleSwitch } from "flowbite-react";
import React, { useEffect, useState } from "react";

const Todos = ({ todos, completeTodo, deleteTodo }) => {
    const [toggle, setToggle] = useState(() => {
        const storedToggle = localStorage.getItem("toggle");
        return storedToggle ? JSON.parse(storedToggle) : false;
    });

    useEffect(() => {
        localStorage.setItem("toggle", JSON.stringify(toggle));
    }, [toggle]);
    console.log(toggle);
    return (
        <div className="w-full lg:w-[90%] h-[60vh] bg-[#F5EFFF] rounded-lg p-4 flex flex-col items-center">
            <div className="flex w-[80%] mb-4">
                <div className="mr-2 text-violet-500">Order: </div>
                <ToggleSwitch
                    checked={toggle}
                    onChange={setToggle}
                    className="bg-[#A294F9] hover:bg-violet-500 rounded-full"
                    color="#A294F9"
                />
            </div>
            <div className="overflow-y-auto w-[80%] h-[90%]">
                <List ordered={toggle}>
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
                                        ? "text-red-400 line-through hover:text-red-500"
                                        : "text-[#A294F9] hover:text-violet-500"
                                } text-wrap`}
                                key={todo.id}
                            >
                                {todo.text}
                            </List.Item>
                        );
                    })}
                </List>
            </div>
        </div>
    );
};

export default Todos;
