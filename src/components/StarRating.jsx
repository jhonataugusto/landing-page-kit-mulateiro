import React from 'react';
import { IconStar } from './icons';
import { SATISFIED_CUSTOMERS_LABEL } from '../data/socialProof';

export default function StarRating({ rating = 4.9, reviews = SATISFIED_CUSTOMERS_LABEL, className = '' }) {
    return (
        <div className={`star-rating ${className}`}>
            <div className="star-rating__stars" aria-label={`Avaliação ${rating} de 5`}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <IconStar key={star} className="w-4 h-4" />
                ))}
            </div>
            <span className="star-rating__score">{rating}/5.0</span>
            <span className="star-rating__divider" aria-hidden="true">•</span>
            <span className="star-rating__reviews">{reviews}</span>
        </div>
    );
}
