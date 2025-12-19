import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function Objections() {
    return (
        <Section background="light">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">
                    Você Pode Estar Pensando...
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
                            Mais de <strong>193 mil mulheres</strong> já comprovaram os resultados. Veja os depoimentos reais acima com fotos de antes e depois. Além disso, oferecemos <strong>Garantia de Satisfação com Continuidade Exclusiva</strong>: se após 30 dias de uso você não sentir melhora, oferecemos 50% de desconto no próximo pedido com orientação personalizada dos nossos especialistas.
                        </p>
                    </div>

                    {/* Objeção 2 */}
                    <div className="bg-white p-lg rounded-lg shadow-md border-l-4 border-primary">
                        <h3 className="text-primary mb-sm text-lg font-semibold">
                            "É muito caro para mim"
                        </h3>
                        <p className="text-textLight leading-relaxed m-0">
                            Você pode começar com o <strong>Kit Corporal por R$ 280,00</strong> (3x de R$ 93,33) ou escolher o <strong>Kit Facial por R$ 441,60</strong> (3x de R$ 147,20). Ambos com 10% de desconto na primeira compra. Compare com tratamentos estéticos que custam R$ 500-1000 por sessão. Menos que um café por dia para transformar sua pele.
                        </p>
                    </div>

                    {/* Objeção 3 */}
                    <div className="bg-white p-lg rounded-lg shadow-md border-l-4 border-primary">
                        <h3 className="text-primary mb-sm text-lg font-semibold">
                            "E se não funcionar?"
                        </h3>
                        <p className="text-textLight leading-relaxed m-0">
                            <strong>Garantia de Satisfação com Continuidade Exclusiva.</strong> Se após 30 dias de uso consistente você não sentir uma melhora clara na sua pele — em brilho, textura ou equilíbrio — queremos te ajudar ainda mais. Damos a você <strong>50% de desconto no seu próximo pedido personalizado</strong>, com orientação direta do nosso time de especialistas em cuidados naturais. Basta ter usado o produto conforme o ritual e enviar seu feedback no nosso canal exclusivo de acompanhamento.
                        </p>
                    </div>

                    {/* Objeção 4 */}
                    <div className="bg-white p-lg rounded-lg shadow-md border-l-4 border-primary">
                        <h3 className="text-primary mb-sm text-lg font-semibold">
                            "Quanto tempo para ver resultados?"
                        </h3>
                        <p className="text-textLight leading-relaxed m-0">
                            <strong>Resultados visíveis em apenas 7 dias:</strong> pele mais macia, textura melhorada, brilho natural, início do clareamento de manchas. <strong>Transformação completa em 30 dias:</strong> manchas clareadas, linhas reduzidas, pele firme e radiante. E você tem nossa <strong>Garantia de Satisfação com Continuidade Exclusiva</strong> — se após 30 dias não sentir melhora, oferecemos 50% de desconto no próximo pedido com orientação personalizada.
                        </p>
                    </div>

                    {/* Objeção 5 */}
                    <div className="bg-white p-lg rounded-lg shadow-md border-l-4 border-primary">
                        <h3 className="text-primary mb-sm text-lg font-semibold">
                            "Já tentei muitos produtos sem sucesso"
                        </h3>
                        <p className="text-textLight leading-relaxed m-0">
                            Entendemos sua frustração. Por isso oferecemos <strong>Garantia de Satisfação com Continuidade Exclusiva</strong> — se após 30 dias você não sentir melhora, oferecemos 50% de desconto no próximo pedido com orientação personalizada dos nossos especialistas. A diferença aqui é que usamos <strong>ingredientes naturais da floresta</strong>, sem químicos agressivos que podem irritar. Mais de 193 mil mulheres já comprovaram que funciona.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-2xl text-center">
                    <CTAButton href="/oferta">
                        COMECE SUA TRANSFORMAÇÃO HOJE COM 10% OFF
                    </CTAButton>
                </div>
            </div>
        </Section>
    );
}
