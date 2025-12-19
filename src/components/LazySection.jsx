import React, { Suspense } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function LazySection({ children, fallback = null, ...props }) {
    const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
        rootMargin: '100px' // Carrega 100px antes de entrar na viewport
    });

    return (
        <div ref={ref} {...props}>
            {hasIntersected ? (
                <Suspense fallback={fallback}>
                    {children}
                </Suspense>
            ) : (
                fallback
            )}
        </div>
    );
}

