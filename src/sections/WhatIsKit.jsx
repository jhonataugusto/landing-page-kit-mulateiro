import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function WhatIsKit() {
    return (
        <Section background="white">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">🌿 Conheça o MULATEIRO</h2>
            
            <div className="max-w-3xl mx-auto mb-lg">
                <p className="text-center max-w-3xl mx-auto mb-md text-lg leading-relaxed text-textLight">
                    O Mulateiro é um dos ingredientes mais usados pelas mulheres indígenas pra clarear manchas, deixar a pele mais jovem e restaurar a firmeza que já havia sido perdida. E isso tudo sem agredir a pele, com zero alergias e com MUITOS nutrientes.
                </p>
                
                <div className="max-w-3xl mx-auto mb-lg p-lg bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary">
                    <p className="text-base md:text-lg text-textLight mb-md leading-relaxed">
                        Nós sabemos o quão frustrante é ter que pagar 500 REAIS por cada sessão em uma clínica pra ter um resultado aceitável. Ou até mesmo se arriscar em usar cremes de "marca" que só vão irritar ou acabar com a sua pele.
                    </p>
                    <p className="text-base md:text-lg text-textLight mb-0 leading-relaxed">
                        E pra deixar tudo mais fácil, nós disponibilizamos TODO esse poder do mulateiro e seus benefícios na forma que você já conhece: CREMES, ESFOLIANTES, MÁSCARAS, SABONETES.
                    </p>
                </div>

                <p className="text-center max-w-3xl mx-auto mb-md text-lg leading-relaxed text-textLight">
                    Todos eles contêm os nutrientes do mulateiro e, a cada produto que você passar, vai fazer um bem ENORME pra sua pele.
                </p>

                <div className="max-w-3xl mx-auto mb-lg p-lg bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <p className="text-base md:text-lg text-primary font-semibold mb-md leading-relaxed text-center">
                        O passo a passo pra usar o tratamento completo é simples:
                    </p>
                    <div className="bg-white p-md rounded-lg mb-md">
                        <p className="text-xl md:text-2xl text-primary font-bold mb-sm leading-relaxed text-center">
                            SABONETE &gt; ESFOLIANTE &gt; MÁSCARA &gt; CREME
                        </p>
                        <p className="text-base md:text-lg text-textLight mb-0 leading-relaxed text-center">
                            O sabonete vai limpar seu rosto, o esfoliante vai remover células mortas, a máscara vai acalmar sua pele e, por fim, o creme irá hidratar sua pele — reforçando: usando a potência total do MULATEIRO.
                        </p>
                    </div>
                </div>

                <p className="text-center max-w-3xl mx-auto mb-lg text-lg leading-relaxed text-textLight">
                    O Mulateiro é um dos MELHORES produtos pra clarear manchas e revitalizar a pele, mas isso você já sabe.
                </p>
                <p className="text-center max-w-3xl mx-auto mb-xl text-lg leading-relaxed text-textLight">
                    O que você não sabe é que ele também é um ótimo anti-envelhecimento natural, porque ele combate diretamente as linhas de expressão da sua face, além de ser um ótimo estimulante do colágeno.
                </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-xl">
                <CTAButton href="/oferta">
                    QUERO RESULTADO EM 7 DIAS – GARANTIR MEU KIT AGORA
                </CTAButton>
            </div>
        </Section>
    );
}
