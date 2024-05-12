'use client';

import React from 'react';
import List from '/home/jancel/Projet_Dev/planify/src/app/components/list/List';
import NewListForm from '/home/jancel/Projet_Dev/planify/src/app/components/form/NewListForm';


const defaultListDisplayed = [
    { id: 'List0', name: 'Première liste', index: 0, tasks: [] },
    { id: 'List1', name: 'Deuxième liste', index: 1, tasks: [] },
    { id: 'List2', name: 'Troisième liste', index: 2, tasks: [] }
];

export type TaskType = {
    name: string;
    id: string | number;
    index: number;
    listId: string | number;
};

const defaultTasks = [
    { id: '0', name: 'task 1', index: 0, listId: 'List0' },
    { id: '3', name: 'task 2', index: 1, listId: 'List0' },
    { id: '1', name: 'Banane', index: 1, listId: 'List1' },
    { id: '2', name: 'Developper', index: 2, listId: 'List2' }
];


export default function Board() {
    const [tasks, setTasks] = React.useState(defaultTasks);
    const [lists, setLists] = React.useState(defaultListDisplayed);
    return (
        <div className="flex gap-5">

            {lists.map(list => (
                < List 
                {...list} 
                setTasks={setTasks}
                tasks={
                    tasks
                    .sort((a, b) => a.index - b.index)
                    .filter(c => c.listId === list.id)
                } />
            ))}
            {/* <NewListForm /> */}
            <div className='flex flex-grow  '>
                <NewListForm />
            </div>
        </div>
    );
}