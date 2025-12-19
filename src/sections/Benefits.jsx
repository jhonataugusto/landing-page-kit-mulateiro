import React from 'react';
import Section from '../components/Section';
import BenefitItem from '../components/BenefitItem';

export default function Benefits() {
    return (
        <Section background="light">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">✨ O Que Você Vai Conquistar</h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-md">
                <BenefitItem>
                    ✅ Clareamento natural de manchas
                </BenefitItem>
                <BenefitItem>
                    ✅ Textura uniforme e toque aveludado
                </BenefitItem>
                <BenefitItem>
                    ✅ Elasticidade e firmeza restauradas
                </BenefitItem>
                <BenefitItem>
                    ✅ Ação anti-idade visível e progressiva
                </BenefitItem>
                <BenefitItem>
                    ✅ Hidratação profunda sem oleosidade
                </BenefitItem>
                <BenefitItem>
                    ✅ Perfume suave e sensação de frescor duradouro
                </BenefitItem>
                <BenefitItem>
                    ✅ Equilíbrio do pH da pele — sem ressecar
                </BenefitItem>
                <BenefitItem>
                    ✅ Ritual prazeroso de autocuidado, dia e noite
                </BenefitItem>
            </div>

            {/* IMAGEM 2: Before/After Transformation */}
            <div className="mt-2xl max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="w-full aspect-[21/9] bg-gradient-to-br from-light to-lighter flex items-center justify-center text-sm text-textLight font-semibold text-center p-md">
                    <img
                        src="/images/2.png"
                        alt="Antes e Depois - Transformação da pele em 30 dias"
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '📸 IMAGEM 2: Antes e Depois - Transformação em 30 dias';
                        }}
                    />
                </div>
            </div>
        </Section>
    );
}
