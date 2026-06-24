import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';
import StarRating from '../components/StarRating';
import CountdownTimer from '../components/CountdownTimer';
import StockUrgency from '../components/StockUrgency';
import GuaranteeBadges from '../components/GuaranteeBadges';
import TrustRibbon from '../components/TrustRibbon';
import TestimonialCard from '../components/TestimonialCard';
import { trackInitiateCheckout } from '../utils/pixel';
import { featuredTestimonials, testimonials } from '../data/testimonials';
import { SATISFIED_CUSTOMERS_LABEL } from '../data/socialProof';

const faqItems = [
    {
        q: 'O Kit de Mulateiro funciona mesmo?',
        a: 'Sim! Mais de 500 mil clientes satisfeitas já comprovaram resultados visíveis desde o primeiro uso. Veja os depoimentos em vídeo e as avaliações nesta página.',
    },
    {
        q: 'É seguro para todos os tipos de pele?',
        a: 'Sim. Fórmulas 100% naturais, testadas dermatologicamente e seguras até para peles sensíveis.',
    },
    {
        q: 'Em quanto tempo vejo resultados?',
        a: 'Muitas clientes notam diferença já na primeira aplicação. Em 7 dias de uso consistente, os resultados ficam ainda mais visíveis.',
    },
    {
        q: 'Posso usar no rosto e no corpo?',
        a: 'Sim! Temos o Kit Facial para rosto e o Kit Corporal para áreas como virilhas, joelhos, cotovelos e melasma.',
    },
    {
        q: 'Qual a forma de pagamento?',
        a: 'Cartão de crédito (até 12x sem juros), Pix com desconto extra, e boleto bancário.',
    },
    {
        q: 'Qual o prazo de entrega?',
        a: 'De 3 a 7 dias úteis para todo o Brasil, com código de rastreamento.',
    },
];

const benefits = [
    'Clareamento visível desde o 1º uso',
    'Ação calmante para a pele',
    'Ajuda na aparência de manchas e melasma',
    'Auxilia na melhora visual de olheiras e acne',
    'Pele com aspecto mais iluminado e uniforme',
    'Sensação de pele cuidada, limpa e valorizada',
];

export default function FinalCTA() {
    return (
        <>
            <Section background="gradient-primary" className="oferta-hero">
                <div className="oferta-hero__grid">
                    <div className="oferta-hero__content">
                        <span className="hero-eyebrow">Oferta por tempo limitado</span>
                        <h1 className="oferta-hero__title">Escolha seu Kit e sinta a transformação</h1>
                        <p className="oferta-hero__subtitle">
                            Mais do que cuidar da pele. É voltar a se olhar com carinho.
                        </p>
                        <StarRating className="oferta-hero__rating" />
                        <TrustRibbon variant="dark" className="oferta-hero__trust" />
                        <div className="oferta-hero__cta">
                            <CTAButton href="#comprar" variant="inverted" size="large">
                                Ver ofertas disponíveis
                            </CTAButton>
                        </div>
                    </div>

                    <div className="oferta-hero__media">
                        <img
                            src="/images/kit-mulateiro.png"
                            alt="Kit de produtos Floralla 100% Mulateiro — creme anti-idade, clareador de manchas e loção"
                            className="oferta-hero__image"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </Section>

            <Section background="white" id="comprar">
                <div className="oferta-page">
                    <div className="oferta-benefits">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="oferta-benefits__item">
                                <span aria-hidden="true">✓</span>
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className="oferta-cards">
                        <article className="offer-card offer-card--featured">
                            <div className="offer-card__badge">⭐ MAIS POPULAR</div>
                            <h2 className="offer-card__title">Kit Facial de Mulateiro</h2>
                            <p className="offer-card__desc">Ritual completo para rosto — resultados visíveis em 7 dias</p>

                            <ul className="offer-card__includes">
                                <li>Esfoliante Facial 100% Rosa Mosqueta</li>
                                <li>Máscara Facial 100% Mulateiro</li>
                                <li>Sabonete Facial Equilibrante</li>
                                <li>Creme Facial Anti-idade com Colágeno e Mulateiro</li>
                            </ul>

                            <div className="offer-card__pricing">
                                <span className="offer-card__old">De R$ 631,00</span>
                                <span className="offer-card__price">R$ 449,90</span>
                                <span className="offer-card__pix">no Pix com desconto extra</span>
                                <span className="offer-card__installments">ou 3x de R$ 149,97 sem juros</span>
                                <span className="offer-card__savings">💰 Economia de R$ 181,10</span>
                            </div>

                            <CTAButton
                                href="https://belezadafloresta.com.br/checkout/?montarCarrinho=20:1"
                                onClick={() => trackInitiateCheckout({ value: 449.90, currency: 'BRL' })}
                                variant="inverted"
                            >
                                QUERO MEU KIT FACIAL
                            </CTAButton>
                        </article>

                        <article className="offer-card">
                            <h2 className="offer-card__title">Kit Corporal de Mulateiro</h2>
                            <p className="offer-card__desc">Clareamento natural para virilhas, joelhos, cotovelos e melasma</p>

                            <ul className="offer-card__includes">
                                <li>Esfoliante Corporal 800g</li>
                                <li>Creme Hidratante Nutritivo Clareador de Manchas 250g</li>
                            </ul>

                            <div className="offer-card__pricing">
                                <span className="offer-card__old">De R$ 310,00</span>
                                <span className="offer-card__price">R$ 279,90</span>
                                <span className="offer-card__pix">no Pix com desconto extra</span>
                                <span className="offer-card__installments">ou 3x de R$ 93,30 sem juros</span>
                                <span className="offer-card__savings">💰 Economia de R$ 30,10</span>
                            </div>

                            <CTAButton
                                href="https://belezadafloresta.com.br/checkout/?montarCarrinho=15:1"
                                onClick={() => trackInitiateCheckout({ value: 279.90, currency: 'BRL' })}
                            >
                                QUERO MEU KIT CORPORAL
                            </CTAButton>
                        </article>
                    </div>

                    <div className="oferta-testimonials-highlight">
                        <p className="oferta-testimonials-highlight__label">Avaliação 4.9/5 — {SATISFIED_CUSTOMERS_LABEL}</p>
                        <div className="oferta-testimonials-highlight__grid">
                            {featuredTestimonials.map((item) => (
                                <TestimonialCard key={item.id} {...item} compact />
                            ))}
                        </div>
                    </div>

                    <CountdownTimer />

                    <StockUrgency />

                    <div className="oferta-tip">
                        <p className="oferta-tip__label">💡 Dica da nossa especialista</p>
                        <p className="oferta-tip__text">
                            Para resultados completos, combine o Kit Facial com o Kit Corporal.
                            Muitas clientes começam com um e depois adicionam o outro para uma transformação total.
                        </p>
                    </div>

                    <div className="oferta-guarantee">
                        <h3>✅ Compra segura e suporte de uso</h3>
                        <p>
                            Após a compra, você recebe orientação para usar seu kit da forma correta
                            e aproveitar melhor o ritual de cuidado com o Mulateiro.
                        </p>
                    </div>

                    <GuaranteeBadges />

                    <div className="oferta-testimonials-full">
                        <h2>Mais depoimentos de quem já transformou a pele</h2>
                        <div className="text-testimonials__grid">
                            {testimonials.map((item) => (
                                <TestimonialCard key={item.id} {...item} />
                            ))}
                        </div>
                    </div>

                    <div className="oferta-faq">
                        <h2>Perguntas Frequentes</h2>
                        <p className="oferta-faq__subtitle">Tire suas dúvidas</p>
                        <div className="oferta-faq__list">
                            {faqItems.map((item) => (
                                <details key={item.q} className="faq-item">
                                    <summary>{item.q}</summary>
                                    <p>{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>

                    <div className="oferta-closing">
                        <h2>Sua pele mais clara. Sua expressão mais leve. Sua autoestima mais viva.</h2>
                        <p>
                            O Kit de Mulateiro foi feito para mulheres que querem olhar para si mesmas
                            e enxergar mais beleza, mais cuidado e mais confiança.
                        </p>
                        <CTAButton href="#comprar" variant="inverted">
                            QUERO MEU KIT AGORA
                        </CTAButton>
                    </div>
                </div>
            </Section>
        </>
    );
}
