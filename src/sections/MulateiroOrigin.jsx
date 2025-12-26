import React, { useState, useCallback, memo } from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

const MulateiroOrigin = memo(function MulateiroOrigin() {
    const [loadedVideo1, setLoadedVideo1] = useState(false);
    const [loadedVideo2, setLoadedVideo2] = useState(false);
    
    const getYouTubeThumbnail = useCallback((videoId, quality = 'hqdefault') => {
        return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    }, []);
    
    const loadVideo1 = useCallback(() => {
        const loadIframe = () => {
            setLoadedVideo1(true);
        };
        
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(loadIframe, { timeout: 100 });
        } else {
            setTimeout(loadIframe, 0);
        }
    }, []);

    const loadVideo2 = useCallback(() => {
        const loadIframe = () => {
            setLoadedVideo2(true);
        };
        
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(loadIframe, { timeout: 100 });
        } else {
            setTimeout(loadIframe, 0);
        }
    }, []);

    const videoId1 = 'ZKFHzkTFp4U';
    const videoId2 = 'Ohb1t50khHg';
    
    return (
        <Section background="white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-md">
                    Tudo o que você precisa saber sobre o kit de mulateiro
                </h2>

                <p className="text-base md:text-lg text-textLight leading-relaxed mb-xl max-w-2xl mx-auto">
                    Nestes vídeos estão a maioria das respostas para suas dúvidas, como usar, como funciona, é apenas uma versão mais detalhada sobre o Mulateiro.
                </p>

                {/* Vídeo 1 - Árvore do Mulateiro */}
                <div className="rounded-lg overflow-hidden shadow-lg bg-white max-w-3xl mx-auto mb-xl">
                    <div 
                        className="relative w-full pb-[56.25%] h-0 overflow-hidden cursor-pointer"
                        onClick={loadVideo1}
                    >
                        {loadedVideo1 ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube-nocookie.com/embed/${videoId1}?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                title="Árvore do Mulateiro - Beleza da Floresta"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                className="absolute top-0 left-0 w-full h-full"
                                style={{
                                    willChange: 'transform',
                                    transform: 'translateZ(0)'
                                }}
                            ></iframe>
                        ) : (
                            <>
                                <img
                                    src={getYouTubeThumbnail(videoId1)}
                                    alt="Árvore do Mulateiro - Beleza da Floresta"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div 
                                    className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-base hover:bg-black/50"
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

                {/* Vídeo 2 - Segundo vídeo */}
                <div className="rounded-lg overflow-hidden shadow-lg bg-white max-w-3xl mx-auto">
                    <div 
                        className="relative w-full pb-[56.25%] h-0 overflow-hidden cursor-pointer"
                        onClick={loadVideo2}
                    >
                        {loadedVideo2 ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube-nocookie.com/embed/${videoId2}?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                title="Beleza da Floresta - Série Documental"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                className="absolute top-0 left-0 w-full h-full"
                                style={{
                                    willChange: 'transform',
                                    transform: 'translateZ(0)'
                                }}
                            ></iframe>
                        ) : (
                            <>
                                <img
                                    src={getYouTubeThumbnail(videoId2)}
                                    alt="Beleza da Floresta - Série Documental"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div 
                                    className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-base hover:bg-black/50"
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

                {/* CTA */}
                <div className="text-center">
                    <CTAButton href="/oferta">
                        QUERO RESULTADO EM 7 DIAS – GARANTIR MEU KIT AGORA
                    </CTAButton>
                </div>
            </div>
        </Section>
    );
});

export default MulateiroOrigin;

