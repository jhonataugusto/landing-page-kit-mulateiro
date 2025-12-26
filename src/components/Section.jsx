import React from 'react';

export default function Section({ children, className = '', background = 'white', id }) {
    const bgClasses = {
        'white': 'bg-white/90 backdrop-blur-md',
        'light': 'bg-light/85 backdrop-blur-md',
        'gradient-primary': 'bg-gradient-to-br from-primary to-accent',
        'gradient-secondary': 'bg-gradient-to-br from-secondary to-highlight',
    };

    return (
        <section
            id={id}
            className={`py-xl ${bgClasses[background] || 'bg-white'} ${className}`}
        >
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}
