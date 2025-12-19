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
    return typeof window !== 'undefined' && window.fbq;
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
    if (isPixelLoaded()) {
        window.fbq('track', 'ViewContent', {
            content_name: contentName,
            content_category: contentCategory
        });
    }
};

/**
 * Rastreia clique em botão CTA
 * @param {string} buttonName - Nome do botão clicado
 */
export const trackCTA = (buttonName) => {
    if (isPixelLoaded()) {
        window.fbq('track', 'Lead', {
            content_name: buttonName
        });
    }
};

/**
 * Rastreia início de checkout
 * @param {Object} params - Parâmetros do checkout
 * @param {number} params.value - Valor
 * @param {string} params.currency - Moeda (padrão: 'BRL')
 */
export const trackInitiateCheckout = ({ value, currency = 'BRL' }) => {
    if (isPixelLoaded()) {
        window.fbq('track', 'InitiateCheckout', {
            value: value,
            currency: currency
        });
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

