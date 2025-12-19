import React, { memo } from 'react';

const MiniCTA = memo(function MiniCTA({ text, emoji = '👉' }) {
    return (
        <div className="py-xl px-md text-center bg-gradient-to-b from-transparent via-primary/3 to-transparent">
            <div className="max-w-3xl mx-auto p-lg bg-white/60 rounded-lg border border-secondary shadow-sm">
                <p className="text-base md:text-lg text-primary font-semibold leading-relaxed m-0 flex flex-wrap items-center justify-center gap-sm">
                    <span>{emoji}</span>
                    <span>{text}</span>
                </p>
            </div>
        </div>
    );
});

export default MiniCTA;
