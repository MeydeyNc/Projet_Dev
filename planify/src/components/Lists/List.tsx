'use client';

import React, { SetStateAction } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { TaskType } from '../Board/Board';



interface ListProps {
    id: string | number;
    name: string;
    tasks: TaskType[];
    setTasks: SetStateAction<any>;
}

export default function List({ id, name, tasks, setTasks }: ListProps) {

    function setTasksForList(sortedTasks: TaskType[], newListId: string | number) {

        setTasks((prevTasks: TaskType[]) => {
            const newTasks = [...prevTasks];
            sortedTasks.forEach((sortedTask: TaskType, newIndex: number) => {
                const foundTask = newTasks.find(newTask => newTask.id === sortedTask.id);
                if (foundTask) {
                    foundTask.index = newIndex;
                    foundTask.listId = newListId;
                }
            });
            return newTasks;
        });
    }
    return (
        <div className=" bg-white shadow-sm rounded-md p-8 ">
            <h4>{name}</h4>
            <ReactSortable
                list={tasks}
                setList={items => setTasksForList(items, id)}
                group="tasks"
                className="min-h-12"
                ghostClass="opacity-40"
            >
                {tasks.map(task => (
                    <div key={task.id} className='border bg-white my-2 p-4 rounded-md'>
                        <span>{task.name}</span>
                    </div>
                ))}
            </ReactSortable>
        </div>
    );
}