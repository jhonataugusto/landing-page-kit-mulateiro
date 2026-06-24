import React, { useState, useEffect } from 'react';

const INITIAL_STOCK = 2128;
const MIN_STOCK = 847;

export default function StockUrgency() {
    const [stock, setStock] = useState(INITIAL_STOCK);

    useEffect(() => {
        const interval = setInterval(() => {
            setStock((prev) => {
                if (prev <= MIN_STOCK) return prev;
                return prev - Math.floor(Math.random() * 3) - 1;
            });
        }, 45000);

        return () => clearInterval(interval);
    }, []);

    const percentage = ((stock / INITIAL_STOCK) * 100).toFixed(0);

    return (
        <div className="stock-urgency">
            <div className="stock-urgency__header">
                <span className="stock-urgency__badge">🔥 Estoque limitado!</span>
                <h3 className="stock-urgency__title">O estoque está acabando rapidamente</h3>
                <p className="stock-urgency__text">
                    Se você deixar para depois, pode encontrar outro preço ou indisponibilidade.
                </p>
            </div>
            <div className="stock-urgency__bar-wrap">
                <div className="stock-urgency__bar">
                    <div className="stock-urgency__fill" style={{ width: `${percentage}%` }} />
                </div>
                <p className="stock-urgency__count">
                    <strong>{stock.toLocaleString('pt-BR')}</strong> unidades restantes
                </p>
            </div>
        </div>
    );
}
