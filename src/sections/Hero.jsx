import React, { useState, useCallback } from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';
import StarRating from '../components/StarRating';
import TrustRibbon from '../components/TrustRibbon';

export default function Hero() {
    const [loadedVideo, setLoadedVideo] = useState(false);

    const getYouTubeThumbnail = useCallback((videoId, quality = 'hqdefault') => {
        return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    }, []);

    const loadVideo = useCallback(() => {
        const loadIframe = () => setLoadedVideo(true);
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(loadIframe, { timeout: 100 });
        } else {
            setTimeout(loadIframe, 0);
        }
    }, []);

    const videoId = 'JBK-OW3E7ps';

    return (
        <Section background="gradient-primary" className="fade-in hero-section">
            <div className="hero-grid">
                <div className="hero-grid__content">
                    <span className="hero-eyebrow">100% Natural · Cruelty Free</span>

                    <h1 className="hero-title">
                        Clareamento visível com o poder natural do Mulateiro
                    </h1>

                    <p className="hero-subtitle">
                        O ritual amazônico que clareia manchas, rejuvenesce a pele e devolve sua confiança — resultados desde o 1º uso.
                    </p>

                    <StarRating className="hero-rating" />

                    <div className="hero-cta">
                        <CTAButton href="/oferta" variant="inverted" size="large">
                            Quero clarear minha pele agora
                        </CTAButton>
                    </div>

                    <TrustRibbon variant="dark" className="hero-trust" />

                    <p className="hero-urgency">
                        Estoque limitado — garanta seu kit antes que acabe
                    </p>
                </div>

                <div className="hero-grid__media">
                    <div className="hero-image-shell">
                        <div className="hero-image-frame">
                            <div
                                className="hero-video-trigger"
                                onClick={loadVideo}
                                onKeyDown={(e) => e.key === 'Enter' && loadVideo()}
                                role="button"
                                tabIndex={0}
                                aria-label="Assistir vídeo do Kit de Mulateiro"
                            >
                                {loadedVideo ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=0&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                        title="Kit de Mulateiro - Beleza da Floresta"
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                        className="hero-video-iframe"
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={getYouTubeThumbnail(videoId)}
                                            alt="Kit de Mulateiro - Beleza da Floresta"
                                            className="hero-video-thumb"
                                            loading="eager"
                                            fetchPriority="high"
                                        />
                                        <div className="hero-video-overlay">
                                            <div className="hero-video-play">
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <p className="hero-image-caption">
                            O Ritual Completo com o Poder do Mulateiro
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
