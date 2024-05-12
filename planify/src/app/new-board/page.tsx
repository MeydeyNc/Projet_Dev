'use client';

import React from 'react';
import { createBoard } from '../actions/boardActions';
import { redirect } from 'next/navigation';
import { liveblocksClient } from '@/lib/liveblocksClient';

export default function NewBoardPage() {
    async function handleNewBoardSubmit(formData: FormData) {
        const boardName = formData.get('name')?.toString() || '';
        const {id} = await createBoard(boardName);
        redirect(`/boards/${id}`);
    }

    return (
        <div>
            <form action={handleNewBoardSubmit} className='max-w-xs block'>
                <h1 className='text-2xl'>Create new Board</h1>
                <input type='text' name='name' placeholder='board name'/>
                <button type='submit' className='mt-2'>Create board</button>
            </form>
        </div>
    )
}

export async function addEmailToBoard(boardId: string, email: string) {
    const room = await liveblocksClient.getRoom(boardId);
    const usersAccesses = room.usersAccesses;
    usersAccesses[email] = ['room:write'];
    await liveblocksClient.updateRoom(boardId, {usersAccesses});
    return true;
}