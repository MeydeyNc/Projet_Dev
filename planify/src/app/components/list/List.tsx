'use client';

import React, { SetStateAction } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { TaskType } from '/home/jancel/Projet_Dev/planify/src/app/board/board';



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
            >
                {tasks.map(task => (
                    <div className='border'>
                        <span>{task.name}</span>
                    </div>
                ))}
            </ReactSortable>
        </div>
    );
}