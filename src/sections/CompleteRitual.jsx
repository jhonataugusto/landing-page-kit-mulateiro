import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function CompleteRitual() {
    return (
        <Section background="gradient-secondary">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-md">
                Qual Kit é Ideal Para Você?
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl mt-xl">
                {/* KIT FACIAL */}
                <div className="bg-white rounded-2xl p-xl shadow-lg border-2 border-primary">
                    <div className="text-center mb-lg">
                        <div className="text-5xl mb-md">💆‍♀️</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-md">
                            KIT FACIAL DE MULATEIRO
                        </h3>
                    </div>

                    <div className="mb-lg text-center">
                        <div className="text-3xl md:text-4xl font-extrabold text-primary mb-sm">
                            R$ 441,60
                        </div>
                        <div className="text-base text-textLight">
                            ou 3x de R$ 147,20 sem juros
                        </div>
                        <div className="mt-sm text-sm font-semibold text-accent">
                            → Ganhe 10% OFF na 1ª compra
                        </div>
                    </div>

                    <div className="bg-primary/5 p-lg rounded-xl mb-lg">
                        <div className="font-semibold text-primary mb-md text-center">
                            Inclui:
                        </div>
                        <div className="text-left text-base leading-loose space-y-sm">
                            <div>• Esfoliante Facial 100% Rosa Mosqueta</div>
                            <div>• Máscara Facial 100% Mulateiro</div>
                            <div>• Sabonete Facial Equilibrante</div>
                            <div>• Creme Facial Anti-idade com Colágeno e Mulateiro</div>
                        </div>
                    </div>

                    <div className="bg-light p-lg rounded-xl mb-lg">
                        <div className="font-semibold text-primary mb-sm flex items-center gap-sm">
                            <span>🌿</span>
                            <span>Ideal para você que quer:</span>
                        </div>
                        <div className="text-left text-sm leading-relaxed space-y-xs">
                            <div>→ Clarear manchas</div>
                            <div>→ Rejuvenescer a pele do rosto</div>
                            <div>→ Reduzir linhas finas</div>
                            <div>→ Voltar a sentir sua pele viva, firme e radiante</div>
                        </div>
                    </div>

                    <CTAButton href="/oferta">
                        Escolher Kit Facial
                    </CTAButton>
                </div>

                {/* KIT CORPORAL */}
                <div className="bg-white rounded-2xl p-xl shadow-lg border-2 border-secondary">
                    <div className="text-center mb-lg">
                        <div className="text-5xl mb-md">🛁</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-md">
                            KIT CORPORAL DE MULATEIRO
                        </h3>
                    </div>

                    <div className="mb-lg text-center">
                        <div className="text-3xl md:text-4xl font-extrabold text-primary mb-sm">
                            R$ 280,00
                        </div>
                        <div className="text-base text-textLight">
                            ou 3x de R$ 93,33 sem juros
                        </div>
                        <div className="mt-sm text-sm font-semibold text-accent">
                            → Ganhe 10% OFF na 1ª compra
                        </div>
                    </div>

                    <div className="bg-primary/5 p-lg rounded-xl mb-lg">
                        <div className="font-semibold text-primary mb-md text-center">
                            Inclui:
                        </div>
                        <div className="text-left text-base leading-loose space-y-sm">
                            <div>• Esfoliante Corporal 800g</div>
                            <div>• Creme Hidratante Nutritivo Clareador de Manchas 250g</div>
                        </div>
                    </div>

                    <div className="bg-light p-lg rounded-xl mb-lg">
                        <div className="font-semibold text-primary mb-sm flex items-center gap-sm">
                            <span>🌿</span>
                            <span>Ideal para você que quer:</span>
                        </div>
                        <div className="text-left text-sm leading-relaxed space-y-xs">
                            <div>→ Hidratar profundamente</div>
                            <div>→ Clarear manchas no corpo (axilas, virilha, braços, costas)</div>
                            <div>→ Sentir a pele renovada, perfumada e protegida</div>
                            <div>→ Um ritual corporal 100% natural e prazeroso</div>
                        </div>
                    </div>

                    <CTAButton href="/oferta">
                        Escolher Kit Corporal
                    </CTAButton>
                </div>
            </div>
        </Section>
    );
}
