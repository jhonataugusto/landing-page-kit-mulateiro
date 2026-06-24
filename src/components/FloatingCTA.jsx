import React from 'react';

export default function FloatingCTA({
    href = '/oferta',
    preText = 'Oferta especial',
    ctaText = 'Adquira seu Kit Agora',
}) {
    return (
        <div className="floating-cta">
            <a className="floating-cta__btn" href={href} aria-label={`${preText} - ${ctaText}`}>
                <span className="floating-cta__pre">{preText}</span>
                <span className="floating-cta__cta">{ctaText}</span>
            </a>
        </div>
    );
}
