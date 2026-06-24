import React from 'react';

export default function Section({ children, className = '', background = 'white', id, narrow = false }) {
    const bgClasses = {
        white: 'section--white',
        cream: 'section--cream',
        light: 'section--light',
        sand: 'section--sand',
        'gradient-primary': 'section--gradient',
        'gradient-secondary': 'section--gradient-secondary',
    };

    return (
        <section
            id={id}
            className={`section ${bgClasses[background] || 'section--white'} ${className}`}
        >
            <div className={`section__inner ${narrow ? 'section__inner--narrow' : ''}`}>
                {children}
            </div>
        </section>
    );
}
