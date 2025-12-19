import React from 'react';

export default function Button({ children, variant = 'primary', onClick, icon, ...props }) {
    const variantClasses = {
        primary: 'bg-gradient-to-br from-primary to-accent text-white hover:shadow-lg',
        secondary: 'bg-secondary text-primary hover:bg-secondary/80',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
    };

    return (
        <button
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-base ${variantClasses[variant] || variantClasses.primary}`}
            onClick={onClick}
            {...props}
        >
            {icon && <span>{icon}</span>}
            {children}
        </button>
    );
}
