import React from 'react';
import { IconStar } from './icons';

function getInitials(name) {
    return name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

export default function TestimonialCard({ name, city, kit, text, compact = false }) {
    return (
        <article className={`testimonial-card ${compact ? 'testimonial-card--compact' : ''}`}>
            <header className="testimonial-card__header">
                <div className="testimonial-card__avatar" aria-hidden="true">
                    {getInitials(name)}
                </div>
                <div className="testimonial-card__meta">
                    <strong className="testimonial-card__name">{name}</strong>
                    <span className="testimonial-card__city">{city}</span>
                    {kit && <span className="testimonial-card__kit">{kit}</span>}
                </div>
            </header>
            <div className="testimonial-card__stars" aria-label="5 estrelas">
                {[1, 2, 3, 4, 5].map((s) => (
                    <IconStar key={s} className="w-3.5 h-3.5" />
                ))}
            </div>
            <blockquote className="testimonial-card__text">"{text}"</blockquote>
        </article>
    );
}
