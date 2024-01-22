import React, { useState, useEffect } from 'react';

const Timer = ({ endDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = endDate - now;

        if (difference <= 0) {
            return { hours: 0, minutes: 0, seconds: 0 };
        }

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [endDate]);

    const formatTime = (time) => {
        return `${time.hours}:${time.minutes < 10 ? `0${time.minutes}` : time.minutes}:${time.seconds < 10 ? `0${time.seconds}` : time.seconds}`;
    };

    return (
        <div>
            {formatTime(timeLeft)}
        </div>
    );
};

export default Timer;
