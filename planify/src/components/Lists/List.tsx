'use client';

import React, { SetStateAction } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { TaskType } from '../Task/Task';
import prisma from '@/lib/prisma';

export type ListType = {
    id: number | string;
    list_name: string;
    owner: string;
    index: number;
    tasks: TaskType[];
}


export interface ListProps {
    id: string | number;
    list_name: string;
    owner: string;
    index: number;
    tasks: TaskType[];
    setTasks: SetStateAction<any>;
}

export default function List({ id, list_name, tasks, owner, setTasks }: ListProps) {

    function setTasksForList(sortedTasks: TaskType[], newListId: string | number) {

        setTasks((prevTasks: TaskType[]) => {
            const newTasks = [...prevTasks];
            sortedTasks.forEach((sortedTask: TaskType, newIndex: number) => {
                const foundTask = newTasks.find(newTask => newTask.id === sortedTask.id);
                if (foundTask) {
                    foundTask.order = newIndex;
                    foundTask.listId = newListId;
                }
            });
            return newTasks;
        });
    }
    return (
        <div className=" bg-white shadow-sm rounded-md p-8 ">
            <h4>{list_name}</h4>
            <p>owner : {owner}</p>
            <ReactSortable
                list={tasks}
                setList={items => setTasksForList(items, id)}
                group="tasks"
                className="min-h-12"
                ghostClass="opacity-40"
            >
                {tasks.map(task => (
                    <div key={task.id} className='border bg-white my-2 p-4 rounded-md'>
                        <div>
                            <span>{task.task_name}</span>
                        </div>
                        <div>
                            <span>Description : {task.task_description}</span>
                        </div>
                        <div>
                            <span>Date limite : {task.due_date}</span>
                        </div>
                    </div>
                ))}
            </ReactSortable>
        </div>
    );
}