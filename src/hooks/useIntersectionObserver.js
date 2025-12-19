import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    setHasIntersected(true);
                    // Desconectar após primeira interseção para economizar recursos
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px', // Começa a carregar 50px antes de entrar na viewport
                threshold: 0.1,
                ...options
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return [elementRef, isIntersecting, hasIntersected];
}

