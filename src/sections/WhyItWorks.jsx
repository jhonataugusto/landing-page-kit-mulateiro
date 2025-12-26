import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function WhyItWorks() {
    return (
        <Section background="white">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">Por Que o Mulateiro Funciona?</h2>
            <p className="text-center max-w-2xl mx-auto mb-xl text-lg text-textLight">
                O Mulateiro é um dos MELHORES produtos pra clarear manchas e revitalizar a pele. Ele também é um ótimo anti-envelhecimento natural, por que ele combate diretamente as linhas de expressão da sua face, além de ser um ótimo estimulante do colágeno.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mt-xl">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1">
                    <div className="text-5xl mb-md">🌿</div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Ação Clareadora e Rejuvenescedora</h3>
                    <p className="text-base text-textLight leading-relaxed m-0">
                        Rico em antioxidantes naturais que regeneram as camadas da pele.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1">
                    <div className="text-5xl mb-md">💧</div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Hidratação Inteligente</h3>
                    <p className="text-base text-textLight leading-relaxed m-0">
                        Nutre profundamente sem deixar resíduos.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1">
                    <div className="text-5xl mb-md">🔬</div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Ativo Anti-idade Natural</h3>
                    <p className="text-base text-textLight leading-relaxed m-0">
                        Estimula colágeno e combate linhas de expressão.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1">
                    <div className="text-5xl mb-md">🍃</div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Sem químicos agressivos</h3>
                    <p className="text-base text-textLight leading-relaxed m-0">
                        Zero parabenos, sulfatos ou petrolatos.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-2xl">
                <CTAButton href="/oferta">
                    COMECE SUA TRANSFORMAÇÃO HOJE
                </CTAButton>
            </div>
        </Section>
    );
}
