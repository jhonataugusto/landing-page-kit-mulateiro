import React from 'react';
import Section from '../components/Section';
import BenefitItem from '../components/BenefitItem';
import CTAButton from '../components/CTAButton';

export default function Benefits() {
    return (
        <Section background="light">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">✨ Resultados em 7 Dias</h2>
            <p className="text-center max-w-2xl mx-auto mb-xl text-lg text-textLight">
                Direto da floresta amazônica, o Mulateiro é usado há gerações pelas mulheres da floresta para clarear manchas, rejuvenescer a pele e restaurar a firmeza natural — sem agredir, sem prometer ilusão.
            </p>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-md">
                <BenefitItem>
                    ✅ Pele mais macia e hidratada sem oleosidade
                </BenefitItem>
                <BenefitItem>
                    ✅ Textura uniforme e toque aveludado
                </BenefitItem>
                <BenefitItem>
                    ✅ Início do clareamento de manchas
                </BenefitItem>
                <BenefitItem>
                    ✅ Brilho natural e viço visível
                </BenefitItem>
                <BenefitItem>
                    ✅ Redução do aspecto cansado e linhas finas
                </BenefitItem>
                <BenefitItem>
                    ✅ Sensação de frescor e limpeza real
                </BenefitItem>
            </div>

            {/* IMAGEM 2: Before/After Transformation */}
            <div className="mt-2xl max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white mb-xl">
                <div className="w-full aspect-[21/9] bg-gradient-to-br from-light to-lighter flex items-center justify-center text-sm text-textLight font-semibold text-center p-md">
                    <img
                        src="/images/2.png"
                        alt="Antes e Depois - Transformação da pele em 7 dias"
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '📸 IMAGEM 2: Antes e Depois - Transformação em 7 dias';
                        }}
                    />
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <CTAButton href="/oferta">
                    SIM! EU QUERO ME VER NO ESPELHO COM ORGULHO
                </CTAButton>
            </div>
        </Section>
    );
}
