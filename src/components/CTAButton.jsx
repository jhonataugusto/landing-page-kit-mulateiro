import React, { memo, useCallback } from 'react';
import { trackCTA } from '../utils/pixel';

const CTAButton = memo(function CTAButton({
    children,
    onClick,
    href,
    trackEvent = true,
    variant = 'default',
    size = 'default',
    fullWidth = false,
    style,
}) {
    const Component = href ? 'a' : 'button';

    const handleClick = useCallback((e) => {
        if (trackEvent && typeof window !== 'undefined' && window.fbq) {
            trackCTA(children?.toString() || 'CTA Button');
        }
        if (onClick) onClick(e);
    }, [onClick, children, trackEvent]);

    const sizeClass = size === 'large' ? 'cta-btn--large' : '';
    const variantStyle = variant === 'inverted'
        ? {
            background: '#ffffff',
            backgroundColor: '#ffffff',
            color: '#0d3d38',
            borderColor: 'rgba(255, 255, 255, 0.65)',
        }
        : undefined;

    return (
        <Component
            className={`cta-btn cta-btn--${variant} ${sizeClass} ${fullWidth ? 'cta-btn--full' : ''}`}
            onClick={handleClick}
            href={href}
            style={{ ...variantStyle, ...style }}
        >
            <span className="cta-btn__label">{children}</span>
        </Component>
    );
});

export default CTAButton;
