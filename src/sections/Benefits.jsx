import React, { useState } from 'react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import BenefitItem from '../components/BenefitItem';
import CTAButton from '../components/CTAButton';

const proofImages = [
    {
        src: '/images/prova1.jpg',
        alt: 'Prova real de resultado do Kit de Mulateiro 1',
    },
    {
        src: '/images/prova2.jpg',
        alt: 'Prova real de resultado do Kit de Mulateiro 2',
    },
    {
        src: '/images/prova3.jpg',
        alt: 'Prova real de resultado do Kit de Mulateiro 3',
    },
    {
        src: '/images/prova4.jpg',
        alt: 'Prova real de resultado do Kit de Mulateiro 4',
    },
];

const benefits = [
    'Pele mais macia e hidratada sem oleosidade',
    'Textura uniforme e toque aveludado',
    'Início do clareamento de manchas',
    'Brilho natural e viço visível',
    'Redução do aspecto cansado e linhas finas',
    'Sensação de frescor e limpeza real',
];

export default function Benefits() {
    const [currentProof, setCurrentProof] = useState(0);
    const activeImage = proofImages[currentProof];

    const goToPreviousProof = () => {
        setCurrentProof((current) =>
            current === 0 ? proofImages.length - 1 : current - 1
        );
    };

    const goToNextProof = () => {
        setCurrentProof((current) =>
            current === proofImages.length - 1 ? 0 : current + 1
        );
    };

    return (
        <Section background="cream" className="benefits-section">
            <SectionHeader
                eyebrow="Resultados em 7 dias"
                title="O que você pode sentir na sua pele"
                subtitle="Direto da floresta amazônica, o Mulateiro é usado há gerações para clarear manchas, rejuvenescer a pele e restaurar a firmeza natural."
                align="center"
            />

            <div className="benefits-grid">
                {benefits.map((benefit) => (
                    <BenefitItem key={benefit}>{benefit}</BenefitItem>
                ))}
            </div>

            <div className="proof-carousel" aria-label="Carrossel de provas reais">
                <button
                    type="button"
                    className="proof-carousel__button proof-carousel__button--prev"
                    onClick={goToPreviousProof}
                    aria-label="Ver prova anterior"
                >
                    <span aria-hidden="true">‹</span>
                </button>

                <figure className="proof-carousel__card">
                    <img
                        src={activeImage.src}
                        alt={activeImage.alt}
                        loading="lazy"
                        className="proof-carousel__img"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </figure>

                <button
                    type="button"
                    className="proof-carousel__button proof-carousel__button--next"
                    onClick={goToNextProof}
                    aria-label="Ver próxima prova"
                >
                    <span aria-hidden="true">›</span>
                </button>
            </div>

            <div className="proof-carousel__dots" aria-label="Selecionar prova">
                {proofImages.map((image, index) => (
                    <button
                        key={image.src}
                        type="button"
                        className={`proof-carousel__dot ${currentProof === index ? 'proof-carousel__dot--active' : ''}`}
                        onClick={() => setCurrentProof(index)}
                        aria-label={`Ver prova ${index + 1}`}
                    />
                ))}
            </div>

            <div className="proof-carousel__thumbs" aria-hidden="true">
                {proofImages.map((image, index) => (
                    <button
                        key={image.src}
                        type="button"
                        className={`proof-carousel__thumb ${currentProof === index ? 'proof-carousel__thumb--active' : ''}`}
                        onClick={() => setCurrentProof(index)}
                        tabIndex={-1}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="proof-carousel__thumb-img"
                            onError={(e) => {
                                e.currentTarget.closest('.proof-carousel__thumb').style.display = 'none';
                            }}
                        />
                    </button>
                ))}
            </div>

            <div className="section-cta">
                <CTAButton href="/oferta">
                    Quero me ver no espelho com orgulho
                </CTAButton>
            </div>
        </Section>
    );
}
