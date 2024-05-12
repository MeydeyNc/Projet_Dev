import React from "react";
import {Liveblocks} from "@liveblocks/node";


export const liveblocksClient = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY || '',
});

export function getliveblocksClient() {
    return new Liveblocks({
        secret: process.env.LIVEBLOCK_SECRET_KEY || '',
    });
}