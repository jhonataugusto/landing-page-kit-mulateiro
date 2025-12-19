import React from 'react';
import Section from '../components/Section';
import StepCard from '../components/StepCard';
import CTAButton from '../components/CTAButton';

export default function WhatIsKit() {
    return (
        <Section background="white">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">🌿 Apresentação do Produto</h2>
            <p className="text-center max-w-3xl mx-auto mb-md text-lg leading-relaxed">
                Direto da floresta amazônica, o <strong className="text-primary">Mulateiro</strong> é um dos ingredientes naturais mais potentes que existem. Usado há gerações pelas mulheres da floresta para clarear manchas, rejuvenescer a pele e restaurar a firmeza natural — sem agredir, sem prometer ilusão.
            </p>
            
            {/* Comparativo de Valor */}
            <div className="max-w-3xl mx-auto mb-xl p-lg bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary">
                <p className="text-base md:text-lg text-textLight mb-md leading-relaxed">
                    💥 <strong className="text-primary">Enquanto clínicas cobram R$500 por sessão...</strong>
                </p>
                <p className="text-base md:text-lg text-textLight mb-md leading-relaxed">
                    💥 <strong className="text-primary">E cremes de "marca" só irritam sua pele…</strong>
                </p>
                <p className="text-base md:text-lg text-primary font-semibold mb-0 leading-relaxed">
                    O Kit Mulateiro entrega clareamento real, hidratação profunda e ação anti-idade visível — em uma rotina simples e natural que cabe na sua casa.
                </p>
            </div>

            <p className="text-center max-w-3xl mx-auto mb-lg text-lg leading-relaxed">
                👉 É esse segredo que agora pode ser seu. O <strong className="text-primary">Kit Mulateiro</strong> é um ritual completo de tratamento facial e corporal. Feito com fórmulas 100% naturais, testadas, seguras e capazes de mostrar resultados visíveis <strong className="text-primary">em até 7 dias</strong>.
            </p>

            {/* CTA */}
            <div className="text-center mb-xl">
                <CTAButton href="/oferta">
                    QUERO RESULTADO EM 7 DIAS – GARANTIR MEU KIT AGORA
                </CTAButton>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mt-xl">
                <StepCard number="1" name="Esfoliante Facial" />
                <StepCard number="2" name="Máscara Facial" />
                <StepCard number="3" name="Creme Facial" />
                <StepCard number="4" name="Sabonete Facial" />
            </div>
        </Section>
    );
}
