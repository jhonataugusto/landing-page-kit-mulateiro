/**
 * Facebook Pixel Utility
 * 
 * Para usar:
 * 1. Substitua 'YOUR_PIXEL_ID' no index.html pelo seu ID do Facebook Pixel
 * 2. Importe e use as funções onde necessário
 * 
 * Exemplo:
 * import { trackPurchase, trackViewContent } from './utils/pixel';
 * trackPurchase({ value: 441.60, currency: 'BRL' });
 */

// Verifica se o Facebook Pixel está carregado
const isPixelLoaded = () => {
    if (typeof window === 'undefined') return false;
    
    // Aguarda um pouco para garantir que o pixel foi carregado
    if (!window.fbq) {
        // Tenta novamente após 100ms
        setTimeout(() => {
            if (window.fbq) {
                return true;
            }
        }, 100);
        return false;
    }
    
    return true;
};

/**
 * Rastreia uma compra/conversão
 * @param {Object} params - Parâmetros da compra
 * @param {number} params.value - Valor da compra
 * @param {string} params.currency - Moeda (padrão: 'BRL')
 * @param {string} params.contentName - Nome do produto (opcional)
 */
export const trackPurchase = ({ value, currency = 'BRL', contentName = 'Kit de Mulateiro' }) => {
    if (isPixelLoaded()) {
        window.fbq('track', 'Purchase', {
            value: value,
            currency: currency,
            content_name: contentName
        });
    }
};

/**
 * Rastreia visualização de conteúdo
 * @param {Object} params - Parâmetros do conteúdo
 * @param {string} params.contentName - Nome do conteúdo
 * @param {string} params.contentCategory - Categoria (opcional)
 */
export const trackViewContent = ({ contentName, contentCategory = 'Kit de Mulateiro' }) => {
    // Aguarda o pixel carregar antes de disparar
    const tryTrack = () => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: contentName,
                content_category: contentCategory
            });
            console.log('✅ Facebook Pixel: ViewContent disparado', { contentName, contentCategory });
            return true;
        }
        return false;
    };

    // Tenta imediatamente
    if (!tryTrack()) {
        // Se não funcionou, tenta novamente após 500ms
        setTimeout(() => {
            tryTrack();
        }, 500);
    }
};

/**
 * Rastreia clique em botão CTA
 * @param {string} buttonName - Nome do botão clicado
 */
export const trackCTA = (buttonName) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
            content_name: buttonName
        });
        console.log('✅ Facebook Pixel: Lead disparado', { buttonName });
    }
};

/**
 * Rastreia início de checkout
 * @param {Object} params - Parâmetros do checkout
 * @param {number} params.value - Valor
 * @param {string} params.currency - Moeda (padrão: 'BRL')
 */
export const trackInitiateCheckout = ({ value, currency = 'BRL' }) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
            value: value,
            currency: currency
        });
        console.log('✅ Facebook Pixel: InitiateCheckout disparado', { value, currency });
    } else {
        console.warn('⚠️ Facebook Pixel não está carregado');
    }
};

/**
 * Rastreia adicionar ao carrinho
 * @param {Object} params - Parâmetros do produto
 * @param {string} params.contentName - Nome do produto
 * @param {number} params.value - Valor
 * @param {string} params.currency - Moeda (padrão: 'BRL')
 */
export const trackAddToCart = ({ contentName, value, currency = 'BRL' }) => {
    if (isPixelLoaded()) {
        window.fbq('track', 'AddToCart', {
            content_name: contentName,
            value: value,
            currency: currency
        });
    }
};

