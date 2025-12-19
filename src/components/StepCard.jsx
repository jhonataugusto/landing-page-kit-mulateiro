import React from 'react';

export default function StepCard({ number, name }) {
    return (
        <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-highlight to-secondary text-primary flex items-center justify-center font-extrabold text-xl mx-auto mb-md">
                {number}
            </div>
            <h3 className="text-lg mb-0">{name}</h3>
        </div>
    );
}
