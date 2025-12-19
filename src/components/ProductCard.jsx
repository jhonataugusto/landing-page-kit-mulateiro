import React, { memo } from 'react';

const ProductCard = memo(function ProductCard({ number, name, emoji, benefits, usage, composition }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1 h-full">
            <div className="flex items-center gap-sm mb-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {number}
                </div>
                <div>
                    <h3 className="mb-1 text-lg font-semibold text-primary">
                        {emoji} {name}
                    </h3>
                </div>
            </div>

            <div className="mb-md">
                <h4 className="text-sm font-semibold text-accent mb-xs">
                    Benefícios:
                </h4>
                <p className="text-xs text-textLight leading-relaxed">{benefits}</p>
            </div>

            <div className="mb-md">
                <h4 className="text-sm font-semibold text-accent mb-xs">
                    Como usar:
                </h4>
                <p className="text-xs text-textLight leading-relaxed">{usage}</p>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-accent mb-xs">
                    Composição:
                </h4>
                <p className="text-xs text-textLight leading-relaxed">
                    {composition}
                </p>
            </div>
        </div>
    );
});

export default ProductCard;
