import React from 'react';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }) {
    return (
        <header className={`section-header section-header--${align} ${light ? 'section-header--light' : ''}`}>
            {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-header__title">{title}</h2>}
            {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
        </header>
    );
}
