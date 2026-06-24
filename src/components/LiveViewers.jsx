import React, { useState, useEffect } from 'react';

export default function LiveViewers({ base = 1167 }) {
    const [viewers, setViewers] = useState(base);

    useEffect(() => {
        const interval = setInterval(() => {
            setViewers((prev) => {
                const delta = Math.floor(Math.random() * 7) - 3;
                const next = prev + delta;
                return Math.max(base - 80, Math.min(base + 120, next));
            });
        }, 8000);

        return () => clearInterval(interval);
    }, [base]);

    return (
        <div className="live-viewers">
            <span className="live-viewers__dot" aria-hidden="true" />
            <span>{viewers.toLocaleString('pt-BR')} assistindo agora</span>
        </div>
    );
}
