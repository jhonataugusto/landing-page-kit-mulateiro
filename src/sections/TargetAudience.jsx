import React from 'react';
import Section from '../components/Section';
import BenefitItem from '../components/BenefitItem';
import CTAButton from '../components/CTAButton';

export default function TargetAudience() {
    return (
        <Section background="white">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">"Esse kit foi feito pra mim?"</h2>
            <p className="text-center max-w-2xl mx-auto mb-xl text-lg text-textLight">
                Você deve estar se perguntando isso nesse exato momento, então vamos fazer um checklist...
            </p>

            <div className="max-w-3xl mx-auto grid gap-md">
                <BenefitItem>
                    Já gastou em tratamentos caríssimos e ficou frustrada sem ver resultados REAIS?
                </BenefitItem>
                <BenefitItem>
                    Já se cansou de tratamentos super agressivos que ACABAM com sua PELE?
                </BenefitItem>
                <BenefitItem>
                    Quer ver resultados em menos de 7 dias, não em 7 meses?
                </BenefitItem>
                <BenefitItem>
                    Se sente insegura ou infeliz com o melasma ou manchas no rosto/corpo?
                </BenefitItem>
                <BenefitItem>
                    Quer algo 100% natural para sua pele?
                </BenefitItem>
                <BenefitItem>
                    Quer restaurar sua confiança e sua autoestima e está disposta a ver uma transformação INCRIVEL?
                </BenefitItem>
            </div>

            {/* CTA */}
            <div className="mt-2xl text-center">
                <CTAButton href="/oferta">
                    SIM! EU QUERO ME VER NO ESPELHO COM ORGULHO
                </CTAButton>
            </div>
        </Section>
    );
}
