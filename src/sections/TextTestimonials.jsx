import React from 'react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import CTAButton from '../components/CTAButton';
import { testimonials } from '../data/testimonials';

export default function TextTestimonials({ showCta = true, limit }) {
    const items = limit ? testimonials.slice(0, limit) : testimonials;

    return (
        <Section background="sand">
            <div className="text-testimonials">
                <SectionHeader
                    eyebrow="Resultados reais"
                    title="Veja o que nossas clientes estão dizendo"
                    subtitle="Depoimentos de mulheres que usaram o Kit de Mulateiro no dia a dia"
                />

                <div className="text-testimonials__grid">
                    {items.map((item) => (
                        <TestimonialCard key={item.id} {...item} />
                    ))}
                </div>

                {showCta && (
                    <div className="text-testimonials__cta">
                        <CTAButton href="/oferta">
                            Quero resultados como essas clientes
                        </CTAButton>
                    </div>
                )}
            </div>
        </Section>
    );
}
