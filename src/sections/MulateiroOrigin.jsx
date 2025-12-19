import React, { useState, useCallback, memo } from 'react';
import Section from '../components/Section';

const MulateiroOrigin = memo(function MulateiroOrigin() {
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

    const videoId = 'QpdfT3fRYjw';
    
    return (
        <Section background="white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-xs px-md py-xs bg-primary text-white rounded-full text-xs font-semibold uppercase tracking-wide mb-md">
                    <span>🌿</span>
                    Nossas Raízes
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-md">
                    Conheça o Mulateiro: De Onde Vem o Poder da Floresta
                </h2>

                <p className="text-base md:text-lg text-textLight leading-relaxed mb-xl max-w-2xl mx-auto">
                    Queremos te apresentar nossas raízes! Preparamos uma série documental onde cada episódio contará um pouco da nossa origem, cultura e inspiração para nossos produtos. 
                    Hoje te apresentamos o episódio de número 4: <strong className="text-primary">Árvore do Mulateiro</strong>!
                </p>

                {/* Vídeo do Mulateiro */}
                <div className="rounded-lg overflow-hidden shadow-lg bg-white max-w-3xl mx-auto">
                    <div 
                        className="relative w-full pb-[56.25%] h-0 overflow-hidden cursor-pointer"
                        onClick={loadVideo}
                    >
                        {loadedVideo ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
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
                                    src={getYouTubeThumbnail(videoId)}
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

                <div className="mt-xl p-lg bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary text-left max-w-2xl mx-auto">
                    <p className="text-base md:text-lg text-textLight leading-relaxed m-0">
                        Descubra a origem do ingrediente mais precioso da floresta amazônica. 
                        Neste episódio, você vai conhecer de perto a <strong className="text-primary">Árvore do Mulateiro</strong>, 
                        entender como ela é cultivada e colhida, e descobrir por que esse ingrediente natural 
                        é tão poderoso para transformar sua pele.
                    </p>
                </div>
            </div>
        </Section>
    );
});

export default MulateiroOrigin;

