'use client';

import React from 'react';

export type TaskType = {
    id: number | string;
    task_name: string;
    task_description: string;
    due_date: string;
    order: number;
    listId: string | number;
}

export default function Task() {
    return (
        <div>
            <h1>Task</h1>
        </div>
    );
}