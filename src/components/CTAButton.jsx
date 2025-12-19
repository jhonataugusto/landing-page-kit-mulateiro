import React, { memo, useCallback } from 'react';

const CTAButton = memo(function CTAButton({ children, onClick, href }) {
    const Component = href ? 'a' : 'button';

    const handleClick = useCallback((e) => {
        if (onClick) {
            onClick(e);
        }
    }, [onClick]);

    return (
        <Component
            className="inline-flex items-center justify-center px-8 md:px-12 py-6 min-h-[56px] text-lg font-bold text-white bg-gradient-to-br from-primary to-accent rounded-full border-none cursor-pointer shadow-lg transition-all duration-base hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,49,46,0.3)] uppercase tracking-wide no-underline"
            onClick={handleClick}
            href={href}
        >
            {children}
        </Component>
    );
});

export default CTAButton;
