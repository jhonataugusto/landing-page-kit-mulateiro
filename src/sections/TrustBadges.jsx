import React from 'react';
import Section from '../components/Section';

export default function TrustBadges() {
    return (
        <Section background="light">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">💚 Um Ritual Que Respeita Sua Pele e o Planeta</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md mt-xl max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="text-5xl mb-sm">✔</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Fórmulas veganas e naturais</h3>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="text-5xl mb-sm">✔</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Testadas dermatologicamente</h3>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="text-5xl mb-sm">✔</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Sem crueldade animal</h3>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="text-5xl mb-sm">✔</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Sem corantes, sem parabenos, sem sulfatos</h3>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="text-5xl mb-sm">✔</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Texturas leves, absorção rápida e aromas suaves</h3>
                </div>
            </div>
        </Section>
    );
}
