import React from 'react';

export default function BenefitItem({ children }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1">
            <p className="text-base text-textLight leading-relaxed m-0">{children}</p>
        </div>
    );
}
