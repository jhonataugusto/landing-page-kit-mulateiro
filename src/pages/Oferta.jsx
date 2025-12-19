import React from 'react';
import FinalCTA from '../sections/FinalCTA';
import FloatingCTA from '../components/FloatingCTA';

export default function Oferta() {
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

