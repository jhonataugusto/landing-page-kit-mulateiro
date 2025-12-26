import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function Objections() {
    return (
        <Section background="light">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">
                    Dúvidas Comuns
                </h2>
                <p className="text-center max-w-2xl mx-auto mb-xl text-lg text-textLight">
                    Respostas honestas para as dúvidas mais comuns
                </p>

                <div className="grid gap-lg mt-xl text-left">
                    {/* Objeção 1 */}
                    <div className="bg-white p-lg rounded-lg shadow-md border-l-4 border-primary">
                        <h3 className="text-primary mb-sm text-lg font-semibold">
                            "Será que funciona mesmo?"
                        </h3>
                        <p className="text-textLight leading-relaxed m-0">
                            Essa dúvida é bem comum, mas podemos garantir pra você: quem usou, gostou, recomendou e continua recomendando pra outras mulheres! Veja nossas provas sociais — temos mais de 50 vídeos em nosso Instagram e no nosso canal do YouTube, com histórias inspiradoras de mulheres que conseguiram restaurar sua autoestima e sua pele com a ajuda do mulateiro!!
                        </p>
                    </div>

                    {/* Objeção 2 */}
                    <div className="bg-white p-lg rounded-lg shadow-md border-l-4 border-primary">
                        <h3 className="text-primary mb-sm text-lg font-semibold">
                            "É muito caro pra mim…"
                        </h3>
                        <p className="text-textLight leading-relaxed m-0">
                            Pense nas sessões caras que você faria ou terá que fazer caso perca essa oportunidade. 500–700 reais por sessão fica muito difícil para o bolso das mulheres brasileiras.
                        </p>
                        <p className="text-textLight leading-relaxed mt-md mb-0">
                            Nós temos duas ofertas pra você. A primeira é do KIT COMPLETO FACIAL, onde você vai cuidar do seu rosto de forma completa usando o poder do mulateiro. Você irá investir apenas 3x de R$ 147,20 sem juros!!
                        </p>
                        <p className="text-textLight leading-relaxed mt-md mb-0">
                            Temos uma opção mais acessível, se você quiser apenas testar, e é recomendada para o CORPO. Você investirá apenas 3x de R$ 93,33 sem juros!! (vamos ser sinceros, isso sai bem mais em conta do que aquelas sessões)
                        </p>
                    </div>

                    {/* Objeção 3 */}
                    <div className="bg-white p-lg rounded-lg shadow-md border-l-4 border-primary">
                        <h3 className="text-primary mb-sm text-lg font-semibold">
                            "Quanto tempo eu começo a ver os resultados?"
                        </h3>
                        <p className="text-textLight leading-relaxed m-0">
                            Usando o kit completo, você já nota uma melhora no primeiro uso, mas em 7 dias você irá notar uma diferença absurda na sua pele.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-2xl text-center">
                    <CTAButton href="/oferta">
                        COMECE SUA TRANSFORMAÇÃO HOJE
                    </CTAButton>
                </div>
            </div>
        </Section>
    );
}
