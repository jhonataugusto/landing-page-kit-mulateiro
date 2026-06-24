import React, { useState, useEffect } from 'react';

function getTimeLeft() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const diff = endOfDay - now;

    if (diff <= 0) {
        return { minutes: 0, seconds: 0 };
    }

    return {
        minutes: Math.floor(diff / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
    };
}

export default function CountdownTimer({ label = 'Oferta expira em:' }) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const pad = (n) => String(n).padStart(2, '0');

    return (
        <div className="countdown-timer">
            <p className="countdown-timer__label">⏰ {label}</p>
            <div className="countdown-timer__digits">
                <div className="countdown-timer__block">
                    <span className="countdown-timer__value">{pad(timeLeft.minutes)}</span>
                    <span className="countdown-timer__unit">Min</span>
                </div>
                <span className="countdown-timer__sep">:</span>
                <div className="countdown-timer__block">
                    <span className="countdown-timer__value">{pad(timeLeft.seconds)}</span>
                    <span className="countdown-timer__unit">Seg</span>
                </div>
            </div>
        </div>
    );
}
