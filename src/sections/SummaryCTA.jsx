import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function SummaryCTA() {
    return (
        <Section background="gradient-primary">
            <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-lg text-white flex flex-wrap items-center justify-center gap-sm">
                    <span>🔥</span>
                    <span>Nós te apresentamos a solução. Agora você tem duas escolhas:</span>
                </h2>

                <div className="mb-xl text-center max-w-2xl mx-auto">
                    <div className="bg-red-500/20 border-2 border-red-500/40 p-lg rounded-lg mb-md backdrop-blur-md text-left">
                        <p className="text-lg md:text-xl text-white mb-0 leading-relaxed">
                            Fechar a página e continuar se sentindo mal, frustrada e com tratamentos sem sucesso.
                        </p>
                    </div>
                    <div className="bg-green-500/20 border-2 border-green-500/40 p-lg rounded-lg mb-lg backdrop-blur-md text-left">
                        <p className="text-lg md:text-xl text-white mb-0 leading-relaxed">
                            Decidir usar o poder do mulateiro ao seu favor e adquirir seu kit.
                        </p>
                    </div>
                    <p className="text-xl md:text-2xl text-white font-bold mb-lg leading-relaxed">
                        A decisão é apenas sua. Mas a sua pele não vai te esperar — o tempo passa, e vai ficando cada vez mais difícil cuidar da pele.
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

                <CTAButton href="/oferta" variant="inverted">
                    QUERO RESULTADO EM 7 DIAS – GARANTIR MEU KIT AGORA
                </CTAButton>
            </div>
        </Section>
    );
}
