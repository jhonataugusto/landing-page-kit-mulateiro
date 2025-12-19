import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function SummaryCTA() {
    return (
        <Section background="gradient-primary">
            <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-lg text-white flex flex-wrap items-center justify-center gap-sm">
                    <span>👇</span>
                    <span>Pronta para Transformar Sua Pele?</span>
                </h2>

                <div className="mb-xl text-center max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-white mb-lg leading-relaxed">
                        Garanta agora seu Kit de Mulateiro com <strong>10% de DESCONTO</strong> na primeira compra
                    </p>
                    <p className="text-base md:text-lg text-white/90 mb-lg leading-relaxed">
                        Comece hoje seu ritual de beleza natural e veja a diferença ainda neste mês!
                    </p>
                </div>

                <div className="grid gap-md mb-xl text-left max-w-2xl mx-auto">
                    <div className="flex items-start gap-md p-md bg-white/10 rounded-md backdrop-blur-md">
                        <span className="text-2xl flex-shrink-0">🛒</span>
                        <p className="text-base md:text-lg m-0 leading-relaxed text-white">
                            Escolha seu Kit e compre com segurança agora mesmo
                        </p>
                    </div>

                    <div className="flex items-start gap-md p-md bg-white/10 rounded-md backdrop-blur-md">
                        <span className="text-2xl flex-shrink-0">🔒</span>
                        <p className="text-base md:text-lg m-0 leading-relaxed text-white">
                            Pagamento 100% seguro
                        </p>
                    </div>

                    <div className="flex items-start gap-md p-md bg-white/10 rounded-md backdrop-blur-md">
                        <span className="text-2xl flex-shrink-0">📦</span>
                        <p className="text-base md:text-lg m-0 leading-relaxed text-white">
                            Entrega rápida em até 7 dias úteis
                        </p>
                    </div>

                    <div className="flex items-start gap-md p-md bg-white/10 rounded-md backdrop-blur-md">
                        <span className="text-2xl flex-shrink-0">🌱</span>
                        <p className="text-base md:text-lg m-0 leading-relaxed text-white">
                            Produto 100% natural e sustentável
                        </p>
                    </div>
                </div>

                <CTAButton href="/oferta">
                    QUERO MINHA PELE RENOVADA COM O PODER DO MULATEIRO
                </CTAButton>
            </div>
        </Section>
    );
}
