# 📊 Configuração do Facebook Pixel

Este projeto está configurado para rastrear conversões e otimizar campanhas no Facebook/Instagram.

## 🚀 Como Configurar

### 1. Obter o ID do Facebook Pixel

1. Acesse o [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Crie um novo Pixel ou use um existente
3. Copie o **Pixel ID** (exemplo: `123456789012345`)

### 2. Configurar no Projeto

Abra o arquivo `index.html` e substitua `YOUR_PIXEL_ID` pelo seu ID real:

```html
fbq('init', 'SEU_PIXEL_ID_AQUI'); // Substitua pelo seu Pixel ID
```

E também no noscript:
```html
src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
```

### 3. Eventos Rastreados Automaticamente

O projeto já está configurado para rastrear:

- ✅ **PageView** - Visualização de página (automático no index.html)
- ✅ **ViewContent** - Visualização de conteúdo (disparado automaticamente ao carregar a página)
- ✅ **Lead** - Cliques em botões CTA (automático em todos os botões)
- ✅ **InitiateCheckout** - Cliques nos botões de compra dos kits (com valor e moeda)

### 4. Eventos Disponíveis (Opcional)

Você pode usar as funções em `src/utils/pixel.js` para rastrear eventos customizados:

```javascript
import { trackPurchase, trackAddToCart } from './utils/pixel';

// Rastrear compra finalizada
trackPurchase({ 
    value: 441.60, 
    currency: 'BRL',
    contentName: 'Kit Completo de Mulateiro'
});

// Rastrear adicionar ao carrinho
trackAddToCart({
    contentName: 'Kit Completo de Mulateiro',
    value: 441.60,
    currency: 'BRL'
});
```

## 📈 Eventos Configurados

### Páginas
- **Home (/)**: Dispara `ViewContent` automaticamente ao carregar
- **Oferta (/oferta)**: Dispara `ViewContent` automaticamente ao carregar

### Botões de Compra (FinalCTA)
- **Kit Completo**: Rastreia `InitiateCheckout` com valor R$ 441,60
- **Kit Corporal**: Rastreia `InitiateCheckout` com valor R$ 280,00

### Botões CTA Gerais
- Todos os botões CTA rastreiam automaticamente o evento `Lead`

## 🔍 Eventos que o Facebook Verá

Após configurar, você verá no Facebook Events Manager:

1. **PageView** - Toda vez que alguém acessa a página
2. **ViewContent** - Quando a página carrega (indica visualização do produto)
3. **Lead** - Quando alguém clica em qualquer botão CTA
4. **InitiateCheckout** - Quando alguém clica nos botões de compra

**Importante**: O evento `Purchase` (compra finalizada) precisa ser configurado na sua loja (Nuvemshop) quando a compra for concluída.

## 🔍 Verificar se Está Funcionando

1. Instale a extensão [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) no Chrome
2. Acesse sua página
3. A extensão mostrará se o pixel está funcionando corretamente

## 📝 Notas Importantes

- O pixel só funciona em produção (quando o site estiver no ar)
- Certifique-se de que o domínio está verificado no Facebook Events Manager
- Para rastrear conversões reais, você precisará configurar eventos no site de checkout (loja)

## 🛠️ Troubleshooting

Se o pixel não estiver funcionando:

1. Verifique se o ID está correto no `index.html`
2. Verifique o console do navegador para erros
3. Use o Facebook Pixel Helper para diagnosticar
4. Certifique-se de que não há bloqueadores de anúncios ativos

