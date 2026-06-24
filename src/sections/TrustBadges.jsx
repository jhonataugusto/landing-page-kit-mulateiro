import React from 'react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { IconCheck } from '../components/icons';

const badges = [
    'Fórmulas veganas e naturais',
    'Testadas dermatologicamente',
    'Sem crueldade animal',
    'Sem corantes, parabenos ou sulfatos',
    'Texturas leves e absorção rápida',
];

export default function TrustBadges() {
    return (
        <Section background="white">
            <SectionHeader
                eyebrow="Compromisso com você"
                title="Um ritual que respeita sua pele e o planeta"
            />

            <div className="trust-badges-grid">
                {badges.map((label) => (
                    <div key={label} className="trust-badge-card">
                        <span className="trust-badge-card__icon" aria-hidden="true">
                            <IconCheck className="w-5 h-5" />
                        </span>
                        <h3 className="trust-badge-card__label">{label}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
}
