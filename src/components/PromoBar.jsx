import React from 'react';

function getTodayFormatted() {
    return new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

export default function PromoBar() {
    return (
        <div className="promo-bar" role="banner">
            <p className="promo-bar__text">
                <span className="promo-bar__dot" aria-hidden="true" />
                <strong>Promoção encerra hoje {getTodayFormatted()}</strong>
                <span className="promo-bar__sep" aria-hidden="true">—</span>
                Garanta seu kit com desconto
            </p>
        </div>
    );
}
