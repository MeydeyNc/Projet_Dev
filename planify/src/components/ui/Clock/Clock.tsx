'use client'

import React, { useState, useEffect } from 'react';

import './Clock.css';

interface ClockProps {
    title: string;
    datediff: number;
}

export default function Clock({ title, datediff }: ClockProps): JSX.Element {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            date.setHours(date.getHours() + datediff);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);

        return () => clearInterval(interval);
    }, [datediff]);

    return (
        <div className={"clock"}>
            <h3>{title}</h3>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={{ transform: `rotate(${seconds * 6}deg)` }}/>
                <div className={"dial minutes"} style={{ transform: `rotate(${minutes * 6}deg)` }}/>
                <div className={"dial hours"} style={{ transform: `rotate(${hours * 30}deg)` }}/>
            </div>
            <div className={"digital-clock"}>
                {hours}:{minutes}:{seconds}
            </div>
        </div>
    );
};

