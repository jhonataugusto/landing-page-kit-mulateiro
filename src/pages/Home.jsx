import React, { lazy, Suspense } from 'react';
import Hero from '../sections/Hero';
import WhatIsKit from '../sections/WhatIsKit';
import Benefits from '../sections/Benefits';
import MiniCTA from '../components/MiniCTA';
import FloatingCTA from '../components/FloatingCTA';
import { LazySection } from '../components/LazySection';

// Lazy load de componentes abaixo da dobra para reduzir JavaScript inicial
const WhyItWorks = lazy(() => import('../sections/WhyItWorks'));
const MulateiroOrigin = lazy(() => import('../sections/MulateiroOrigin'));
const BrandStory = lazy(() => import('../sections/BrandStory'));
const CompleteRitual = lazy(() => import('../sections/CompleteRitual'));
const TargetAudience = lazy(() => import('../sections/TargetAudience'));
const Objections = lazy(() => import('../sections/Objections'));
const TrustBadges = lazy(() => import('../sections/TrustBadges'));
const SocialProof = lazy(() => import('../sections/SocialProof'));
const SummaryCTA = lazy(() => import('../sections/SummaryCTA'));
// FinalCTA removido da Home - agora só existe na página /oferta
const Disclaimer = lazy(() => import('../sections/Disclaimer'));

export default function Home() {
    return (
        <div className="App">
            <main>
            <Hero />
            <WhatIsKit />
            <Benefits />
            <LazySection>
                <WhyItWorks />
            </LazySection>
            <LazySection>
                <MulateiroOrigin />
            </LazySection>
            <MiniCTA 
                text="Está pronta para entender por que o Mulateiro mudou a vida de milhares de mulheres?"
                emoji="👉"
            />
            <LazySection>
                <BrandStory />
            </LazySection>
            <LazySection>
                <CompleteRitual />
            </LazySection>
            <MiniCTA 
                text="Agora que você viu os kits disponíveis, descubra qual é perfeito para você"
                emoji="💚"
            />
            <LazySection>
                <TargetAudience />
            </LazySection>
            <LazySection>
                <Objections />
            </LazySection>
            <LazySection>
                <TrustBadges />
            </LazySection>
            <MiniCTA 
                text="Veja depoimentos reais de quem já transformou a pele com o Kit de Mulateiro"
                emoji="✨"
            />
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

