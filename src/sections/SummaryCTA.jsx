import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function SummaryCTA() {
    return (
        <Section background="gradient-primary">
            <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-lg text-white flex flex-wrap items-center justify-center gap-sm">
                    <span>🔥</span>
                    <span>VOCÊ TEM DUAS ESCOLHAS AGORA:</span>
                </h2>

                <div className="mb-xl text-center max-w-2xl mx-auto">
                    <div className="bg-red-500/20 border-2 border-red-500/40 p-lg rounded-lg mb-md backdrop-blur-md text-left">
                        <p className="text-lg md:text-xl text-white mb-md leading-relaxed">
                            <strong>❌</strong> Fechar essa página, continuar se sentindo mal, se escondendo, testando mais um produto que não vai funcionar…
                        </p>
                    </div>
                    <div className="bg-green-500/20 border-2 border-green-500/40 p-lg rounded-lg mb-lg backdrop-blur-md text-left">
                        <p className="text-lg md:text-xl text-white mb-0 leading-relaxed">
                            <strong>✅</strong> Clicar no botão, garantir seu Kit com frete grátis e ver resultado em 7 dias.
                        </p>
                    </div>
                    <p className="text-xl md:text-2xl text-white font-bold mb-lg leading-relaxed">
                        ⚠️ A decisão é sua. Mas o tempo da sua pele não espera.
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

                <div className="mb-xl p-lg bg-white/15 rounded-lg backdrop-blur-md max-w-2xl mx-auto">
                    <p className="text-base md:text-lg text-white mb-md leading-relaxed">
                        <strong>🔒 Garantia:</strong> Se você usar por 30 dias e não sentir sua pele diferente — mais firme, mais clara, mais viva — você ganha <strong>50% de desconto no próximo pedido</strong> + acompanhamento com nossos especialistas em cuidados naturais.
                    </p>
                </div>

                <div className="mb-xl p-lg bg-white/10 rounded-lg backdrop-blur-md max-w-2xl mx-auto border-2 border-white/20">
                    <p className="text-xl md:text-2xl text-white font-bold mb-4 leading-relaxed">
                        Essa é a sua pele. Essa é a sua história. E esse é o momento de mudar as duas.
                    </p>
                    <p className="text-lg md:text-xl text-white/95 mb-0 leading-relaxed">
                        O Kit Mulateiro já transformou a pele de milhares de mulheres. Agora é a sua vez.
                    </p>
                </div>

                <CTAButton href="/oferta">
                    QUERO RESULTADO EM 7 DIAS – GARANTIR MEU KIT AGORA
                </CTAButton>

                <p className="mt-lg text-base md:text-lg text-white/90 italic max-w-2xl mx-auto">
                    Essa é sua chance de dizer <strong>"basta"</strong>. Basta de cremes genéricos. Basta de promessas falsas. Basta de se sentir invisível. O Kit Mulateiro é o ritual que devolveu a autoestima de mais de 193 mil mulheres. Agora é a sua vez.
                </p>
            </div>
        </Section>
    );
}
