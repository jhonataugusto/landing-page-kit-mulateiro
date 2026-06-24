import React, { useEffect } from 'react';
import PromoBar from '../components/PromoBar';
import TrustRibbon from '../components/TrustRibbon';
import FinalCTA from '../sections/FinalCTA';
import FloatingCTA from '../components/FloatingCTA';
import { trackViewContent } from '../utils/pixel';

export default function Oferta() {
    useEffect(() => {
        trackViewContent({
            contentName: 'Kit de Mulateiro - Página de Oferta',
            contentCategory: 'Oferta Especial'
        });
    }, []);

    return (
        <div className="App">
            <PromoBar />
            <main>
                <FinalCTA />
            </main>
            <TrustRibbon variant="dark" />
            <FloatingCTA
                href="#comprar"
                preText="Oferta termina hoje"
                ctaText="Garantir meu Kit Agora"
            />
        </div>
    );
}
