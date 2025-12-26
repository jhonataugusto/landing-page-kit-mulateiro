import React, { memo, useCallback } from 'react';
import { trackCTA } from '../utils/pixel';

const CTAButton = memo(function CTAButton({ children, onClick, href, trackEvent = true, variant = 'default' }) {
    const Component = href ? 'a' : 'button';

    const handleClick = useCallback((e) => {
        // Rastreia clique no CTA
        if (trackEvent && typeof window !== 'undefined' && window.fbq) {
            trackCTA(children?.toString() || 'CTA Button');
        }
        
        if (onClick) {
            onClick(e);
        }
    }, [onClick, children, trackEvent]);

    const baseClasses = "inline-flex items-center justify-center px-8 md:px-12 py-6 min-h-[56px] text-lg font-bold rounded-full border-none cursor-pointer shadow-lg transition-all duration-base hover:-translate-y-1 hover:scale-105 uppercase tracking-wide no-underline";
    
    const variantClasses = variant === 'inverted' 
        ? "text-primary bg-white hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] border-2 border-primary/20"
        : "text-white bg-gradient-to-br from-primary to-accent hover:shadow-[0_12px_40px_rgba(0,49,46,0.3)]";

    return (
        <Component
            className={`${baseClasses} ${variantClasses}`}
            onClick={handleClick}
            href={href}
        >
            {children}
        </Component>
    );
});

export default CTAButton;
