import React from 'react';

export default function FloatingCTA({
    href = '/oferta',
    preText = '🔥 Oferta especial',
    ctaText = 'Garanta seu Kit com 10% OFF',
}) {
    return (
        <div className="fixed left-0 right-0 bottom-0 px-md pb-[calc(1.5rem+env(safe-area-inset-bottom))] z-[999] pointer-events-none">
            <a 
                className="pointer-events-auto flex flex-col gap-[0.35rem] w-full no-underline py-[0.9rem] px-4 min-h-[44px] rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_12px_40px_rgba(0,49,46,0.28)] border border-white/22 text-white text-center transition-all duration-base hover:shadow-[0_16px_48px_rgba(0,49,46,0.35)]"
                href={href}
                aria-label={`${preText} - ${ctaText}`}
            >
                <span className="text-xs font-semibold opacity-90">{preText}</span>
                <span className="text-sm md:text-base font-bold">→ {ctaText}</span>
            </a>
        </div>
    );
}
