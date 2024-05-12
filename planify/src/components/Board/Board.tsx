'use client';

import React from 'react';
import List from '../Lists/List';
import NewListForm from '../Form/NewListForm';
import NewTaskForm from '../Form/NewTaskForm';
import { ListProps } from '../Lists/List';


const defaultTasks = [
    { id: '0', task_name: 'task 1', task_description: 'Hello World', due_date: '14 Mai 2024',  order: 0, listId: 'List0' },
    { id: '3', task_name: 'Banane', task_description: 'Super ça', due_date: '2 Avril 2024',  order: 1, listId: 'List2' },
    { id: '2', task_name: 'D20', task_description: 'Cest un d20', due_date: '24 Juin 2024',  order: 2, listId: 'List0' },
    { id: '1', task_name: 'Developpeur', task_description: 'Ca code pabien', due_date: '14 Mars 2023',  order: 0, listId: 'List1' }
    
];

const defaultListDisplayed = [
    { id: 'List0', list_name: 'Première liste', owner: 'toto', index: 0, tasks: [] },
    { id: 'List1', list_name: 'Deuxième liste', owner: 'toto', index: 1, tasks: [] },
    { id: 'List2', list_name: 'Troisième liste', owner: 'toto', index: 2, tasks: [] }
];

export default function Board() {
    const [tasks, setTasks] = React.useState(defaultTasks);
    const [lists, setLists] = React.useState(defaultListDisplayed);
    return (
        <div className="flex gap-5">

            {lists.map(list => (
                < List 
                key={list.id}
                {...list} 
                setTasks={setTasks}
                tasks={
                    tasks
                    .sort((a, b) => a.order - b.order)
                    .filter(c => c.listId === list.id)
                } />
            ))}
            {/* <NewListForm /> */}
            <div className='flex flex-grow  '>
                <NewListForm />
                <NewTaskForm />
            </div>
        </div>
    );
}