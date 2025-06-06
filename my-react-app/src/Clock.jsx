import React, { useState, useEffect } from 'react';

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval
        return () => {
            clearInterval(timerId);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12; // Convert to 12-hour format

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
    }

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    } 

    return( <div className="clock-container">
                <div className = "clock">
                    <span>{formatTime()}</span>
                </div>
            </div>);
}

export default Clock
