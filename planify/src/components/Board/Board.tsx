'use client';

import React from 'react';
import Column from '../Columns/Columns';


const columns = [
    { id: '0', name: 'todo', index: 0, tasks: [] },
    { id: '1', name: 'shopping', index: 1, tasks: [] },
    { id: '2', name: 'plans', index: 2, tasks: [] },
];

export type TaskType = {
    id: number;
    name: string;
    order: number;
    description: string[];
};

const tasks = [
    { id: 0, columnId: '0', name: 'task 1', order: 0, description: ["Bonsoir"] },
    { id: 1, columnId: '1', name: 'task 2', order: 1, description: ["C'est sympa ici"] },
    { id: 2, columnId: '2', name: 'task 3', order: 2, description: ["Non bof"] },
];

export default function Board() {
    return (
        <div className="flex gap-4">

            {columns.map(column => (
                <Column {...column} tasks={tasks} />
            ))}

        </div>
    );
}
