'use client';

import React from "react";

export default function NewListForm() {
    function handleNewList(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const newListName = form.querySelector("input")?.value;
        if (newListName) {
            console.log(newListName);
            alert(`New list created: ${newListName}`);
        }
    }


    return (
        <form name="form" onSubmit={handleNewList} className="max-w-sm">
            <div className="flex flex-col items-center">
                <label className="mb-2">
                    <span className="title">List name :</span>
                    <input name="field" type="text" placeholder="new list name" className="" />
                </label>
                <button type="submit" className="mr-auto">Create new list</button>
            </div>
        </form>
    )
}   