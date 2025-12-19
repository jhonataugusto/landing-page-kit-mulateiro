import React, { useEffect } from 'react';
import FinalCTA from '../sections/FinalCTA';
import FloatingCTA from '../components/FloatingCTA';
import { trackViewContent } from '../utils/pixel';

export default function Oferta() {
    // Dispara evento ViewContent quando a página de oferta carrega
    useEffect(() => {
        trackViewContent({
            contentName: 'Kit de Mulateiro - Página de Oferta',
            contentCategory: 'Oferta Especial'
        });
    }, []);

    return (
        <div className="App">
            <main>
                {/* Página de ofertas - apenas a seção FinalCTA */}
                <FinalCTA />
            </main>
            <FloatingCTA href="/oferta" />
        </div>
    );
}

