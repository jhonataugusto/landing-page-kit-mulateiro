import React, { useState, useCallback, memo } from 'react';
import Section from '../components/Section';

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
                <div className="inline-flex items-center gap-xs px-md py-xs bg-primary text-white rounded-full text-xs font-semibold uppercase tracking-wide mb-md">
                    <span>🌿</span>
                    Nossa História
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-md">
                    Mais de 20 Anos de História, Uma Nova Descoberta
                </h2>

                <div className="text-base md:text-lg text-textLight leading-relaxed mb-xl text-left max-w-2xl mx-auto p-lg bg-white/50 rounded-lg">
                    <p className="mb-md">
                        Há mais de <strong className="text-primary">20 anos</strong>, a <strong className="text-primary">Beleza da Floresta</strong> nasceu de uma paixão profunda pela natureza e pelo cuidado genuíno com a pele. Desde o início, nossa missão foi combinar tradição, ciência e ingredientes naturais para criar produtos que realmente transformam.
                    </p>
                    
                    <p className="mb-md">
                        Ao longo dessas duas décadas, desenvolvemos dezenas de produtos com extratos da floresta, sempre buscando o melhor que a natureza pode oferecer. Mas foi quando descobrimos <strong className="text-primary">o Mulateiro</strong> — um ingrediente precioso da floresta amazônica, usado há gerações pelas mulheres da floresta — que encontramos algo verdadeiramente especial.
                    </p>
                    
                    <p className="mb-md">
                        O Mulateiro se tornou o coração do nosso <strong className="text-primary">Kit Completo</strong>, combinando toda a experiência de 20 anos em skincare natural com o poder transformador deste ingrediente único. Não é apenas mais um produto — é o resultado de duas décadas de pesquisa, dedicação e amor pela beleza que vem da floresta.
                    </p>
                    
                    <p className="mb-md">
                        Hoje, mais de <strong className="text-primary">193 mil mulheres</strong> fazem parte dessa jornada. Mulheres que descobriram que cuidar da pele não precisa ser complicado — só precisa ser natural, eficaz e verdadeiro. Mulheres que confiam na tradição de 20 anos da Beleza da Floresta.
                    </p>
                    
                    <p className="mt-lg font-semibold text-primary text-center italic">
                        E você? Está pronta para fazer parte dessa transformação?
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mt-2xl">
                    <div className="bg-white rounded-xl p-xl text-left shadow-md hover:shadow-lg transition-shadow duration-base">
                        <div className="text-4xl mb-md">🌱</div>
                        <h3 className="text-lg font-semibold text-primary mb-sm">
                            Ingredientes da Floresta
                        </h3>
                        <p className="text-sm text-textLight leading-relaxed m-0">
                            Cada fórmula é desenvolvida com extratos naturais cuidadosamente selecionados,
                            sem parabenos, sulfatos ou químicos agressivos. Apenas o melhor que a natureza pode oferecer.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-xl text-left shadow-md hover:shadow-lg transition-shadow duration-base">
                        <div className="text-4xl mb-md">🔬</div>
                        <h3 className="text-lg font-semibold text-primary mb-sm">
                            Ciência e Tradição
                        </h3>
                        <p className="text-sm text-textLight leading-relaxed m-0">
                            Unimos conhecimentos ancestrais sobre plantas medicinais com pesquisas científicas modernas,
                            garantindo produtos eficazes, seguros e testados dermatologicamente.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-xl text-left shadow-md hover:shadow-lg transition-shadow duration-base">
                        <div className="text-4xl mb-md">💚</div>
                        <h3 className="text-lg font-semibold text-primary mb-sm">
                            Compromisso com Você
                        </h3>
                        <p className="text-sm text-textLight leading-relaxed m-0">
                            Nossa comunidade de mais de 193 mil seguidores no Instagram é prova do nosso compromisso
                            com transparência, educação e resultados reais. Cada cliente é parte da nossa história.
                        </p>
                    </div>
                </div>

                <div className="mt-2xl p-xl bg-primary/5 rounded-lg border-l-4 border-primary">
                    <p className="text-base md:text-lg italic text-primary font-medium leading-relaxed m-0">
                        "Cada produto reflete nossa história de amor pela beleza que vem da floresta.
                        Acreditamos que cuidar da pele é um ato de amor próprio, e estamos aqui para
                        acompanhar você nessa jornada de transformação."
                    </p>
                    <p className="mt-md text-sm text-textLight font-semibold">
                        — Equipe Beleza da Floresta
                    </p>
                </div>
            </div>
        </Section>
    );
});

export default BrandStory;
