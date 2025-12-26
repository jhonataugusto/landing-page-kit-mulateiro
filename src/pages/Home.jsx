import React, { lazy, Suspense, useEffect } from 'react';
import Hero from '../sections/Hero';
import WhatIsKit from '../sections/WhatIsKit';
import MiniCTA from '../components/MiniCTA';
import FloatingCTA from '../components/FloatingCTA';
import { LazySection } from '../components/LazySection';
import { trackViewContent } from '../utils/pixel';

// Lazy load de componentes abaixo da dobra para reduzir JavaScript inicial
const WhyItWorks = lazy(() => import('../sections/WhyItWorks'));
const MulateiroOrigin = lazy(() => import('../sections/MulateiroOrigin'));
const BrandStory = lazy(() => import('../sections/BrandStory'));
const TargetAudience = lazy(() => import('../sections/TargetAudience'));
const Objections = lazy(() => import('../sections/Objections'));
const SocialProof = lazy(() => import('../sections/SocialProof'));
const SummaryCTA = lazy(() => import('../sections/SummaryCTA'));
// FinalCTA removido da Home - agora só existe na página /oferta
const Disclaimer = lazy(() => import('../sections/Disclaimer'));

export default function Home() {
    // Dispara evento ViewContent quando a página carrega
    useEffect(() => {
        trackViewContent({
            contentName: 'Kit de Mulateiro - Landing Page',
            contentCategory: 'Skincare Natural'
        });
    }, []);

    return (
        <div className="App">
            <main>
            <Hero />
            <WhatIsKit />
            <LazySection>
                <WhyItWorks />
            </LazySection>
            <LazySection>
                <MulateiroOrigin />
            </LazySection>
            <LazySection>
                <BrandStory />
            </LazySection>
            <LazySection>
                <TargetAudience />
            </LazySection>
            <LazySection>
                <Objections />
            </LazySection>
            <LazySection>
                <SocialProof />
            </LazySection>
            <LazySection>
                <SummaryCTA />
            </LazySection>
            {/* FinalCTA removido - agora só existe na página /oferta */}
            <LazySection>
                <Disclaimer />
            </LazySection>
            </main>
            <FloatingCTA href="/oferta" />
        </div>
    );
}

