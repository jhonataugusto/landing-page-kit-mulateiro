import React from 'react';
import { IconCheck } from './icons';

export default function BenefitItem({ children }) {
    return (
        <div className="benefit-item">
            <span className="benefit-item__icon" aria-hidden="true">
                <IconCheck className="w-4 h-4" />
            </span>
            <p className="benefit-item__text">{children}</p>
        </div>
    );
}
