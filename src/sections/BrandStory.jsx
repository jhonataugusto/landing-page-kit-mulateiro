import React, { useState, useCallback, memo } from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

const BrandStory = memo(function BrandStory() {
    const [loadedVideos, setLoadedVideos] = useState(new Set());
    
    const getYouTubeThumbnail = useCallback((videoId, quality = 'hqdefault') => {
        return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    }, []);
    
    const loadVideo = useCallback((videoId) => {
        const loadIframe = () => {
            setLoadedVideos(prev => {
                if (prev.has(videoId)) return prev;
                return new Set([...prev, videoId]);
            });
        };
        
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(loadIframe, { timeout: 100 });
        } else {
            setTimeout(loadIframe, 0);
        }
    }, []);
    
    return (
        <Section background="gradient-secondary">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-md">
                    🌿 Mais de 20 anos de história com o Mulateiro.
                </h2>

                <div className="text-base md:text-lg text-textLight leading-relaxed mb-xl text-left max-w-2xl mx-auto p-lg bg-white/50 rounded-lg">
                    <p className="mb-md">
                        Mais de 20 anos de história com o Mulateiro.
                    </p>
                    
                    <p className="mb-md">
                        A Beleza da Floresta nasceu com o intuito de oferecer o que tem de melhor da região Amazônica diretamente para o ramo de cosméticos do Brasil.
                    </p>
                    
                    <p className="mb-md">
                        Ao longo desses 20 anos, nós desenvolvemos centenas de produtos com extratos da floresta (sem desmatamento), sempre extraindo o melhor que ela pode oferecer.
                    </p>
                    
                    <p className="mb-md">
                        Mas foi quando descobrimos o Mulateiro que realmente encontramos algo especial.
                    </p>
                    
                    <p className="mb-md">
                        Foi tão especial que se transformou no PRINCIPAL tratamento que oferecemos até hoje, com a aprovação de centenas de milhares de mulheres do Brasil.
                    </p>
                    <p className="mb-0 text-sm text-textLight italic">
                        Aqui abaixo mostramos uma reportagem sobre o mulateiro, onde fizemos uma feira de exposição dos kits.
                    </p>
                </div>

                {/* Vídeos da Beleza da Floresta */}
                <div className="brand-videos-container">
                    {/* Vídeo 16:9 - Principal (Desktop) */}
                    <div className="desktop-video rounded-lg overflow-hidden shadow-lg bg-white">
                        <div 
                            className="relative w-full pb-[56.25%] h-0 overflow-hidden cursor-pointer"
                            onClick={() => loadVideo('JJBvTtAttDQ')}
                        >
                            {loadedVideos.has('JJBvTtAttDQ') ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube-nocookie.com/embed/JJBvTtAttDQ?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                    title="Beleza da Floresta - Nossa História"
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
                                        src={getYouTubeThumbnail('JJBvTtAttDQ')}
                                        alt="Beleza da Floresta - Nossa História"
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

                    {/* Vídeo 9:16 - Mobile/Vertical */}
                    <div className="mobile-video rounded-lg overflow-hidden shadow-lg bg-white">
                        <div 
                            className="relative w-full pb-[177.78%] h-0 overflow-hidden cursor-pointer"
                            onClick={() => loadVideo('iLl4cxqdb-0')}
                        >
                            {loadedVideos.has('iLl4cxqdb-0') ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube-nocookie.com/embed/iLl4cxqdb-0?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                    title="Beleza da Floresta - Depoimento"
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
                                        src={getYouTubeThumbnail('iLl4cxqdb-0')}
                                        alt="Beleza da Floresta - Depoimento"
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div 
                                        className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-base hover:bg-black/50"
                                        onMouseEnter={(e) => e.currentTarget.classList.add('bg-black/50')}
                                        onMouseLeave={(e) => e.currentTarget.classList.remove('bg-black/50')}
                                    >
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary ml-1">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <CTAButton href="/oferta">
                        COMECE SUA TRANSFORMAÇÃO HOJE
                    </CTAButton>
                </div>
            </div>
        </Section>
    );
});

export default BrandStory;
