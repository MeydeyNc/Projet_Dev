'use client';

import React from 'react';
import NewColumnForm from '../FormBoard/NewColumnForm';
import Popup from 'reactjs-popup';
import './CreateBoard.css';

export default function CreateBoard() {
    return (
        <Popup className="CreateBoardButton" trigger={<button> Create new Board </button>}
            position="right center">
            <NewColumnForm />
        </Popup>
    );
}