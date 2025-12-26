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
                    O segredo das mulheres indígenas que deixam QUALQUER PELE firme e macia em 7 dias (e que transformou a vida de mais de 100 mil mulheres)
                </h1>

                {/* Social Proof Badge */}
                <div className="inline-flex items-center gap-xs bg-white/95 text-primary px-lg py-sm rounded-full mb-lg font-semibold text-sm shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>✨ Mais de 200 mil mulheres já confiam na Beleza da Floresta</span>
                </div>

                <div className="max-w-3xl mx-auto mb-lg p-lg bg-white/10 rounded-lg backdrop-blur-md text-left">
                    <p className="text-base md:text-lg text-white/95 mb-md leading-relaxed">
                        Todos os dias você levanta, se olha no espelho, olha pra sua pele e se sente infeliz, porque sabe que será mais um dia onde você não vai estar "bonita" como antes.
                    </p>
                    <p className="text-base md:text-lg text-white/95 mb-md leading-relaxed">
                        Você já tentou usar de tudo: várias receitas incomuns (onde grande parte é industrializada) que aparecem por aí na internet, e NUNCA funcionou. Muito pelo contrário: a situação da sua pele só piorou.
                    </p>
                    <p className="text-base md:text-lg text-white/95 mb-md leading-relaxed">
                        Nós sabemos, isso é frustrante. Mas antes de te mostrar uma coisa, queremos deixar algo bem claro:
                    </p>
                    <p className="text-base md:text-lg text-white/95 mb-md leading-relaxed font-semibold text-xl">
                        O problema NÃO É VOCÊ.
                    </p>
                    <p className="text-base md:text-lg text-white/95 mb-md leading-relaxed">
                        Grande parte desses produtos que aparecem pra você nas redes sociais são industrializados. Eles só servem para "disfarçar" ou "esconder" problemas de pele. Ou até, em casos piores, muitos deles nem mesmo são confiáveis e podem DESTRUIR ou PIORAR a situação.
                    </p>
                    <p className="text-base md:text-lg text-white/95 mb-md leading-relaxed">
                        Sabendo disso, queremos te apresentar outra alternativa a esses produtos industrializados ou até mesmo da "moda do momento": uma alternativa que há décadas as mulheres indígenas da região Norte do Brasil usam pra manter suas peles firmes, macias e jovens. E o melhor: TOTALMENTE ARTESANAL, com ingredientes direto da floresta amazônica, onde o real segredo da juventude está escondido.
                    </p>
                    <p className="text-base md:text-lg text-white/95 mb-0 leading-relaxed font-semibold">
                        E você achou ele nessa página. Nós apresentamos o MULATEIRO.
                    </p>
                </div>

                <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-lighter mb-lg max-w-3xl mx-auto leading-relaxed font-bold bg-red-500/20 border-2 border-red-500/40 px-lg py-md rounded-lg">
                    ⚠️ ESTOQUE LIMITADO!! Descubra esse segredo antes que o estoque acabe, pode ser sua última chance.
                </p>

                <CTAButton href="/oferta" variant="inverted">
                    ADQUIRA SEU KIT AGORA
                </CTAButton>

                {/* VÍDEO: Hero Product Video */}
                <div className="hero-image-shell">
                    <div className="hero-image-frame text-sm text-white/60 font-semibold text-center">
                        <div 
                            className="relative w-full pb-[56.25%] h-0 overflow-hidden cursor-pointer rounded-lg"
                            onClick={loadVideo}
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
