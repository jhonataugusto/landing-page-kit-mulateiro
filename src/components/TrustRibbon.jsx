import React from 'react';
import { IconCheck, IconHeart, IconShield } from './icons';

const badges = [
    { Icon: IconShield, label: 'Aprovado ANVISA' },
    { Icon: IconHeart, label: 'Cruelty Free' },
    { Icon: IconCheck, label: 'Garantia 30 dias' },
];

export default function TrustRibbon({ variant = 'default', className = '' }) {
    const isDark = variant === 'dark';

    return (
        <div className={`trust-ribbon ${isDark ? 'trust-ribbon--dark' : ''} ${className}`} role="list" aria-label="Selos de confiança">
            {badges.map(({ Icon, label }) => (
                <div key={label} className="trust-ribbon__item" role="listitem">
                    <span className="trust-ribbon__icon" aria-hidden="true">
                        <Icon className="w-4 h-4" />
                    </span>
                    <span className="trust-ribbon__label">{label}</span>
                </div>
            ))}
        </div>
    );
}
