import React, { useState, useCallback } from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function CompleteRitual() {
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

    const videoId = '3rTank75VTE';
    return (
        <Section background="gradient-secondary">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-md">
                Qual Kit é Ideal Para Você?
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl mt-xl">
                {/* KIT FACIAL */}
                <div className="bg-white rounded-2xl p-xl shadow-lg border-2 border-primary">
                    <div className="text-center mb-lg">
                        <div className="text-5xl mb-md">💆‍♀️</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-md">
                            KIT FACIAL DE MULATEIRO
                        </h3>
                    </div>

                    <div className="mb-lg text-center">
                        <div className="text-3xl md:text-4xl font-extrabold text-primary mb-sm">
                            R$ 441,60
                        </div>
                        <div className="text-base text-textLight">
                            ou 3x de R$ 147,20 sem juros
                        </div>
                        <div className="mt-sm text-sm font-semibold text-accent">
                            → Ganhe 10% OFF na 1ª compra
                        </div>
                    </div>

                    <div className="bg-primary/5 p-lg rounded-xl mb-lg">
                        <div className="font-semibold text-primary mb-md text-center">
                            Inclui:
                        </div>
                        <div className="text-left text-base leading-loose space-y-sm">
                            <div>• Esfoliante Facial 100% Rosa Mosqueta</div>
                            <div>• Máscara Facial 100% Mulateiro</div>
                            <div>• Sabonete Facial Equilibrante</div>
                            <div>• Creme Facial Anti-idade com Colágeno e Mulateiro</div>
                        </div>
                    </div>

                    <div className="bg-light p-lg rounded-xl mb-lg">
                        <div className="font-semibold text-primary mb-sm flex items-center gap-sm">
                            <span>🌿</span>
                            <span>Ideal para você que quer:</span>
                        </div>
                        <div className="text-left text-sm leading-relaxed space-y-xs">
                            <div>→ Clarear manchas</div>
                            <div>→ Rejuvenescer a pele do rosto</div>
                            <div>→ Reduzir linhas finas</div>
                            <div>→ Voltar a sentir sua pele viva, firme e radiante</div>
                        </div>
                    </div>

                    <CTAButton href="/oferta">
                        Escolher Kit Facial
                    </CTAButton>
                </div>

                {/* KIT CORPORAL */}
                <div className="bg-white rounded-2xl p-xl shadow-lg border-2 border-secondary">
                    <div className="text-center mb-lg">
                        <div className="text-5xl mb-md">🛁</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-md">
                            KIT CORPORAL DE MULATEIRO
                        </h3>
                    </div>

                    <div className="mb-lg text-center">
                        <div className="text-3xl md:text-4xl font-extrabold text-primary mb-sm">
                            R$ 280,00
                        </div>
                        <div className="text-base text-textLight">
                            ou 3x de R$ 93,33 sem juros
                        </div>
                        <div className="mt-sm text-sm font-semibold text-accent">
                            → Ganhe 10% OFF na 1ª compra
                        </div>
                    </div>

                    <div className="bg-primary/5 p-lg rounded-xl mb-lg">
                        <div className="font-semibold text-primary mb-md text-center">
                            Inclui:
                        </div>
                        <div className="text-left text-base leading-loose space-y-sm">
                            <div>• Esfoliante Corporal 800g</div>
                            <div>• Creme Hidratante Nutritivo Clareador de Manchas 250g</div>
                        </div>
                    </div>

                    <div className="bg-light p-lg rounded-xl mb-lg">
                        <div className="font-semibold text-primary mb-sm flex items-center gap-sm">
                            <span>🌿</span>
                            <span>Ideal para você que quer:</span>
                        </div>
                        <div className="text-left text-sm leading-relaxed space-y-xs">
                            <div>→ Hidratar profundamente</div>
                            <div>→ Clarear manchas no corpo (axilas, virilha, braços, costas)</div>
                            <div>→ Sentir a pele renovada, perfumada e protegida</div>
                            <div>→ Um ritual corporal 100% natural e prazeroso</div>
                        </div>
                    </div>

                    <CTAButton href="/oferta">
                        Escolher Kit Corporal
                    </CTAButton>
                </div>
            </div>

            {/* Vídeo Como Usar */}
            <div className="max-w-4xl mx-auto mt-2xl">
                <h3 className="text-center text-xl md:text-2xl font-bold text-primary mb-md">
                    📹 Como Usar o Kit de Mulateiro
                </h3>
                <p className="text-center text-base md:text-lg text-textLight mb-xl max-w-2xl mx-auto">
                    Aprenda o passo a passo completo para usar seu kit e obter os melhores resultados
                </p>
                
                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                    <div 
                        className="relative w-full pb-[56.25%] h-0 overflow-hidden cursor-pointer"
                        onClick={loadVideo}
                    >
                        {loadedVideo ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                title="Como Usar o Kit de Mulateiro - Beleza da Floresta"
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
                                    alt="Como Usar o Kit de Mulateiro - Beleza da Floresta"
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
            </div>
        </Section>
    );
}
