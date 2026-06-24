import React, { lazy, Suspense, useEffect } from 'react';
import PromoBar from '../components/PromoBar';
import TrustRibbon from '../components/TrustRibbon';
import Hero from '../sections/Hero';
import PainStory from '../sections/PainStory';
import WhatIsKit from '../sections/WhatIsKit';
import TrustBadges from '../sections/TrustBadges';
import Benefits from '../sections/Benefits';
import FloatingCTA from '../components/FloatingCTA';
import { LazySection } from '../components/LazySection';
import { trackViewContent } from '../utils/pixel';

const WhyItWorks = lazy(() => import('../sections/WhyItWorks'));
const MulateiroOrigin = lazy(() => import('../sections/MulateiroOrigin'));
const BrandStory = lazy(() => import('../sections/BrandStory'));
const TargetAudience = lazy(() => import('../sections/TargetAudience'));
const Objections = lazy(() => import('../sections/Objections'));
const TextTestimonials = lazy(() => import('../sections/TextTestimonials'));
const SocialProof = lazy(() => import('../sections/SocialProof'));
const SummaryCTA = lazy(() => import('../sections/SummaryCTA'));
const Disclaimer = lazy(() => import('../sections/Disclaimer'));

export default function Home() {
    useEffect(() => {
        trackViewContent({
            contentName: 'Kit de Mulateiro - Landing Page',
            contentCategory: 'Skincare Natural'
        });
    }, []);

    return (
        <div className="App">
            <PromoBar />
            <main>
                <Hero />
                <TrustRibbon />
                <PainStory />
                <WhatIsKit />
                <Benefits />
                <TrustBadges />
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
                    <TextTestimonials />
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
                <LazySection>
                    <Disclaimer />
                </LazySection>
            </main>
            <FloatingCTA href="/oferta" />
        </div>
    );
}
