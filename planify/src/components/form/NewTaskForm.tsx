'use client';

import React from "react";

export default function NewTaskForm() {
    function handleNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const task = event.currentTarget;
        const newTaskName = task.querySelector("input")?.value;
        if (newTaskName) {
            console.log(newTaskName);
            alert(`New task created: ${newTaskName}`);
        }
    }


    return (
        <form name="form" onSubmit={handleNewTask} className="max-w-sm">
            <div className="flex flex-col items-center">
                <label className="mb-2">
                    <span className="title">Task name :</span>
                    <input name="field" type="text" placeholder="new task name" className="" />
                </label>
                <button type="submit" className="mr-auto">Create new task</button>
            </div>
        </form>
    )
}