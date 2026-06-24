import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function PainStory({ showCta = true }) {
    return (
        <Section background="cream" className="pain-story-section">
            <div className="pain-story">
                <p className="pain-story__lead">
                    Todos os dias você levanta, se olha no espelho, olha pra sua pele e se sente infeliz,
                    porque sabe que será mais um dia onde você não vai estar "bonita" como antes.
                </p>

                <p>
                    Você já tentou usar de tudo: várias receitas incomuns (onde grande parte é industrializada)
                    que aparecem por aí na internet, e <strong>NUNCA</strong> funcionou. Muito pelo contrário:
                    a situação da sua pele só piorou.
                </p>

                <p>
                    Nós sabemos, isso é frustrante. Mas antes de te mostrar uma coisa, queremos deixar algo bem claro:
                </p>

                <p className="pain-story__highlight">O problema NÃO É VOCÊ.</p>

                <p>
                    Grande parte desses produtos que aparecem pra você nas redes sociais são industrializados.
                    Eles só servem para "disfarçar" ou "esconder" problemas de pele. Ou até, em casos piores,
                    muitos deles nem mesmo são confiáveis e podem <strong>DESTRUIR</strong> ou <strong>PIORAR</strong> a situação.
                </p>

                <p>
                    Sabendo disso, queremos te apresentar outra alternativa a esses produtos industrializados
                    ou até mesmo da "moda do momento": uma alternativa que há décadas as mulheres indígenas
                    da região Norte do Brasil usam pra manter suas peles firmes, macias e jovens. E o melhor:
                    <strong> TOTALMENTE ARTESANAL</strong>, com ingredientes direto da floresta amazônica,
                    onde o real segredo da juventude está escondido.
                </p>

                <p className="pain-story__closing">
                    E você achou ele nessa página. Nós apresentamos o <strong>MULATEIRO</strong>.
                </p>

                {showCta && (
                    <div className="pain-story__cta">
                        <CTAButton href="/oferta">
                            Quero conhecer o Kit de Mulateiro
                        </CTAButton>
                    </div>
                )}
            </div>
        </Section>
    );
}
