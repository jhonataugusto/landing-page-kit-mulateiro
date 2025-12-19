import React, { useState, useCallback } from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function Hero() {
    const [loadedVideo, setLoadedVideo] = useState(false);
    
    const getYouTubeThumbnail = useCallback((videoId, quality = 'hqdefault') => {
        return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    }, []);
    
    const loadVideo = useCallback(() => {
        const loadIframe = () => {
            setLoadedVideo(true);
        };
        
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(loadIframe, { timeout: 100 });
        } else {
            setTimeout(loadIframe, 0);
        }
    }, []);

    const videoId = 'JBK-OW3E7ps';

    return (
        <Section background="gradient-primary" className="fade-in">
            <div className="text-center text-white py-xl">
                <h1 className="text-white mb-md text-[clamp(1.75rem,5vw,2.5rem)] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                    🌿 Pele Nova, Corpo Renovado: O Poder do Mulateiro Que Está Transformando a Rotina de Beleza de Milhares de Mulheres
                </h1>

                <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-lighter mb-md max-w-3xl mx-auto leading-relaxed">
                    O ritual que clareia manchas, suaviza linhas, rejuvenesce a pele e perfuma seu corpo — usando o ingrediente mais precioso da floresta amazônica: o Mulateiro.
                </p>

                {/* Social Proof Badge */}
                <div className="inline-flex items-center gap-xs bg-white/95 text-primary px-lg py-sm rounded-full mb-lg font-semibold text-sm shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>✨ Mais de 193 mil mulheres já confiam na Beleza da Floresta</span>
                </div>

                <div className="flex flex-col gap-md items-center mb-xl">
                    <div className="bg-white/10 px-md py-sm rounded-md backdrop-blur-md">
                        🌿 Ingredientes 100% Naturais
                    </div>
                    <div className="bg-white/10 px-md py-sm rounded-md backdrop-blur-md">
                        🌸 Pele firme, radiante e sem manchas
                    </div>
                    <div className="bg-white/10 px-md py-sm rounded-md backdrop-blur-md">
                        ⏳ Resultados visíveis em até 30 dias
                    </div>
                    <div className="bg-white/10 px-md py-sm rounded-md backdrop-blur-md">
                        💚 10% de desconto na sua primeira compra
                    </div>
                </div>

                <CTAButton href="/oferta">
                    👉 Escolha seu Kit e sinta a transformação
                </CTAButton>

                {/* VÍDEO: Hero Product Video */}
                <div className="hero-image-shell">
                    <div className="hero-image-frame text-sm text-white/60 font-semibold text-center">
                        <div 
                            className="relative w-full pb-[56.25%] h-0 overflow-hidden cursor-pointer rounded-lg shadow-2xl"
                            onClick={loadVideo}
                        >
                            {loadedVideo ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                    title="Kit de Mulateiro - Beleza da Floresta"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                                    style={{
                                        willChange: 'transform',
                                        transform: 'translateZ(0)'
                                    }}
                                ></iframe>
                            ) : (
                                <>
                                    <img
                                        src={getYouTubeThumbnail(videoId)}
                                        alt="Kit de Mulateiro - Beleza da Floresta"
                                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                    <div 
                                        className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-base hover:bg-black/50 rounded-lg"
                                        onMouseEnter={(e) => e.currentTarget.classList.add('bg-black/50')}
                                        onMouseLeave={(e) => e.currentTarget.classList.remove('bg-black/50')}
                                    >
                                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary ml-1.5">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="hero-image-caption">
                        O Ritual Completo com o Poder do Mulateiro
                    </div>
                </div>
            </div>
        </Section>
    );
}
