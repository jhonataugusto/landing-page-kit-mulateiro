import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Section from '../components/Section';

const SocialProof = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(new Set());
    const [playingVideos, setPlayingVideos] = useState(new Set());

    const getYouTubeId = useCallback((url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }, []);

    const videos = useMemo(() => [
        {
            id: 1,
            youtubeUrl: "https://youtu.be/W19-d8OBPQU",
            youtubeId: "W19-d8OBPQU",
            title: "Depoimento Real - Kit de Mulateiro",
            description: "Cliente compartilha resultados impressionantes"
        },
        {
            id: 2,
            youtubeUrl: "https://youtu.be/DzIezL8RLVg",
            youtubeId: "DzIezL8RLVg",
            title: "Antes e Depois - Resultados Visíveis",
            description: "Veja a transformação real da pele"
        },
        {
            id: 3,
            youtubeUrl: "https://youtu.be/KFff_AzZS4w",
            youtubeId: "KFff_AzZS4w",
            title: "Depoimento - Rotina Completa",
            description: "Como usar o kit no dia a dia"
        },
        {
            id: 4,
            youtubeUrl: "https://youtu.be/ONbJrzkpjbQ",
            youtubeId: "ONbJrzkpjbQ",
            title: "Resultados Incríveis - Testemunho",
            description: "Cliente satisfeita compartilha experiência"
        },
        {
            id: 5,
            youtubeUrl: "https://youtu.be/Ezp3TzoI7Xo",
            youtubeId: "Ezp3TzoI7Xo",
            title: "Transformação Real - Depoimento",
            description: "Veja os resultados em primeira pessoa"
        },
        {
            id: 6,
            youtubeUrl: "https://youtu.be/S993LICf0uk",
            youtubeId: "S993LICf0uk",
            title: "Antes e Depois - Pele Radiante",
            description: "Comparação impressionante de resultados"
        },
        {
            id: 7,
            youtubeUrl: "https://youtu.be/-X6WykZ5zag",
            youtubeId: "-X6WykZ5zag",
            title: "Depoimento - Kit de Mulateiro",
            description: "Experiência completa com o produto"
        },
        {
            id: 8,
            youtubeUrl: "https://youtu.be/hfaIKXBGPis",
            youtubeId: "hfaIKXBGPis",
            title: "Resultados em 30 Dias - Testemunho",
            description: "Transformação visível em pouco tempo"
        },
        {
            id: 9,
            youtubeUrl: "https://youtu.be/GNUEeRxOWGI",
            youtubeId: "GNUEeRxOWGI",
            title: "Depoimento Real - Cliente Satisfeita",
            description: "Veja o que nossas clientes estão dizendo"
        },
        {
            id: 10,
            youtubeUrl: "https://youtu.be/aITTVa1JgMk",
            youtubeId: "aITTVa1JgMk",
            title: "Depoimento - Transformação em 30 dias",
            description: "Cliente compartilha resultados impressionantes"
        },
        {
            id: 11,
            youtubeUrl: "https://youtu.be/WCg5dY1Ugxw",
            youtubeId: "WCg5dY1Ugxw",
            title: "Antes e Depois - Resultados Visíveis",
            description: "Veja a transformação real da pele"
        },
        {
            id: 12,
            youtubeUrl: "https://youtu.be/d5wU9w1X2Gw",
            youtubeId: "d5wU9w1X2Gw",
            title: "Depoimento - Rotina Completa",
            description: "Como usar o kit no dia a dia"
        },
        {
            id: 13,
            youtubeUrl: "https://youtu.be/n8iPqe2OeRA",
            youtubeId: "n8iPqe2OeRA",
            title: "Resultados Incríveis - Testemunho",
            description: "Cliente satisfeita compartilha experiência"
        },
        {
            id: 14,
            youtubeUrl: "https://youtu.be/Eo1yb7kEsDg",
            youtubeId: "Eo1yb7kEsDg",
            title: "Transformação Real - Depoimento",
            description: "Veja os resultados em primeira pessoa"
        },
        {
            id: 15,
            youtubeUrl: "https://youtu.be/_Agq2RoXNTQ",
            youtubeId: "_Agq2RoXNTQ",
            title: "Antes e Depois - Pele Radiante",
            description: "Comparação impressionante de resultados"
        },
        {
            id: 16,
            youtubeUrl: "https://youtu.be/jjv_FopnkFM",
            youtubeId: "jjv_FopnkFM",
            title: "Depoimento - Kit de Mulateiro",
            description: "Experiência completa com o produto"
        },
        {
            id: 17,
            youtubeUrl: "https://youtu.be/Hs6fDeqX7y4",
            youtubeId: "Hs6fDeqX7y4",
            title: "Resultados em 30 Dias - Testemunho",
            description: "Transformação visível em pouco tempo"
        },
        {
            id: 18,
            youtubeUrl: "https://youtu.be/Ll8fbzx_ApI",
            youtubeId: "Ll8fbzx_ApI",
            title: "Depoimento Real - Cliente Satisfeita",
            description: "Veja o que nossas clientes estão dizendo"
        }
    ], []);

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
        
        if ('requestIdleCallback' in window) {
            requestIdleCallback(loadIframe, { timeout: 100 });
        } else {
            setTimeout(loadIframe, 0);
        }
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === videos.length - 1 ? 0 : prevIndex + 1
            );
        }, 15000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, videos.length]);

    // Descarregar vídeos que não estão mais visíveis
    useEffect(() => {
        const visibleVideoIds = new Set();
        const totalVideos = videos.length;

        // Adicionar os IDs dos vídeos visíveis (prev, current, next)
        for (let i = -1; i <= 1; i++) {
            let index = currentIndex + i;
            if (index < 0) index = totalVideos + index;
            if (index >= totalVideos) index = index - totalVideos;
            visibleVideoIds.add(videos[index].youtubeId);
        }

        // Remover vídeos que não estão mais visíveis
        setLoadedVideos(prev => {
            const newSet = new Set();
            prev.forEach(videoId => {
                if (visibleVideoIds.has(videoId)) {
                    newSet.add(videoId);
                }
            });
            return newSet;
        });
    }, [currentIndex, videos]);

    const goToSlide = useCallback((index) => {
        requestAnimationFrame(() => {
            setCurrentIndex(index);
            setIsAutoPlaying(false);
        });
    }, []);

    const nextSlide = useCallback(() => {
        requestAnimationFrame(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === videos.length - 1 ? 0 : prevIndex + 1
            );
            setIsAutoPlaying(false);
        });
    }, [videos.length]);

    const prevSlide = useCallback(() => {
        requestAnimationFrame(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? videos.length - 1 : prevIndex - 1
            );
            setIsAutoPlaying(false);
        });
    }, [videos.length]);

    const handleVideoInteraction = useCallback(() => {
        setIsAutoPlaying(false);
    }, []);

    const visibleVideos = useMemo(() => {
        const visible = [];
        const totalVideos = videos.length;

        for (let i = -1; i <= 1; i++) {
            let index = currentIndex + i;
            if (index < 0) index = totalVideos + index;
            if (index >= totalVideos) index = index - totalVideos;
            visible.push({ ...videos[index], position: i });
        }

        return visible;
    }, [currentIndex, videos]);

    return (
        <section className="social-proof">
            <div className="container mx-auto px-4 md:px-6">
                <div className="social-proof-header">
                    <span className="social-proof-badge">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        Provas Sociais
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-sm">
                        O Que As Mulheres Estão Dizendo
                    </h2>
                    <p className="text-base md:text-lg text-textLight max-w-2xl mx-auto">
                        Veja vídeos reais de clientes compartilhando seus resultados com o Kit de Mulateiro.
                        Transformações autênticas, sem filtros, sem edição — apenas resultados verdadeiros.
                    </p>
                    <a
                        href="https://www.instagram.com/belezadaflorestaoficiall/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-sm mt-md px-lg py-sm bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white rounded-full font-semibold text-sm shadow-md cursor-pointer transition-all duration-base hover:-translate-y-0.5 no-underline"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span>Siga @belezadaflorestaoficiall — 193 mil+ pessoas já seguem</span>
                    </a>
                </div>

                {/* Instagram Highlights */}
                <div className="mt-xl mb-2xl max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] p-6 md:p-8 rounded-2xl shadow-lg text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-0">
                                ✨ Dúvida? Vai nos Stories e vê com seus próprios olhos
                            </h3>
                        </div>
                        <p className="text-white/90 mb-4 text-base md:text-lg leading-relaxed">
                            Tem mais de <strong className="text-white">60 provas reais</strong>, vídeos, depoimentos e bastidores do Kit Mulateiro nos nossos stories.
                        </p>
                        <p className="text-white/90 mb-6 text-base md:text-lg leading-relaxed font-semibold">
                            A pele dessas mulheres falou por elas.<br/>
                            Agora é sua vez.
                        </p>
                        <a
                            href="https://www.instagram.com/stories/highlights/18049855721425478/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#bc1888] rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-base hover:-translate-y-1 no-underline"
                        >
                            <span>▶️ Ver Highlights no Instagram</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="carousel-container">
                    <button
                        className="carousel-btn carousel-btn-prev"
                        onClick={prevSlide}
                        aria-label="Vídeo anterior"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div 
                        className="carousel-track"
                        onMouseEnter={handleVideoInteraction}
                    >
                        {visibleVideos.map((video, idx) => {
                            return (
                                <div
                                    key={`${video.youtubeId}-${idx}`}
                                    className={`carousel-item ${video.position === 0 ? 'active' : ''} ${video.position < 0 ? 'prev' : ''} ${video.position > 0 ? 'next' : ''}`}
                                    onMouseEnter={handleVideoInteraction}
                                >
                                    <div className="reel-card">
                                        <div 
                                            className="reel-thumbnail relative pb-[177.78%] h-0 overflow-hidden rounded-md cursor-pointer"
                                            onClick={() => {
                                                setPlayingVideos(prev => new Set([...prev, video.youtubeId]));
                                                loadVideo(video.youtubeId);
                                            }}
                                        >
                                            {loadedVideos.has(video.youtubeId) ? (
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                                    title={video.title}
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
                                                        src={getYouTubeThumbnail(video.youtubeId)}
                                                        alt={video.title}
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
                                        <div className="reel-info">
                                            <h3>{video.title}</h3>
                                            <p>{video.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button
                        className="carousel-btn carousel-btn-next"
                        onClick={nextSlide}
                        aria-label="Próximo vídeo"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="carousel-dots">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir para vídeo ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="social-stats">
                    <div className="stat-item">
                        <div className="stat-number">193k+</div>
                        <div className="stat-label">Seguidores no Instagram</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">20+ anos</div>
                        <div className="stat-label">De Tradição e Qualidade</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Ingredientes Naturais</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
