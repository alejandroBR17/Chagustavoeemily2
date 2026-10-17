
# 🏡 PROJECT MASTERPLAN: Emily & Gustavo - Chá de Casa Nova

Este documento é a **ÚNICA** fonte de verdade para regras de design, comportamento e progresso do projeto.

---

## 🧠 Filosofia do Sistema (Diretrizes Supremas)

1.  **Humanização Radical:** O sistema nunca deve falar como uma máquina. Ele deve falar como o casal ("Ops, algo deu errado", "Que alegria!").
2.  **Zero Alertas Nativos:** PROIBIDO usar `alert()`. Use Modais/Toasts customizados.
3.  **Dualidade (Mobile vs Desktop):**
    *   **Mobile:** App Nativo (Bottom Sheets, Toque fácil).
    *   **Desktop:** Editorial/Software (Hover, Tooltips, Grid expandido).
4.  **Sensibilidade Temporal:** O site deve "sentir" o tempo. Antes é ansiedade, durante é celebração, depois é gratidão.

---

## 📅 Roteiro de Evolução

### 🏁 Fase 1: Fundação & Core (CONCLUÍDA)
*O alicerce da casa está pronto. As paredes estão pintadas e os móveis no lugar.*

- [x] **Setup:** React, TypeScript, Tailwind, Google Fonts.
- [x] **UX:** Onboarding, Contagem Regressiva, Carrinho Adaptativo (Sheet/Widget).
- [x] **Core:** Lista de Presentes, Filtros por Categoria, Integração Google Sheets.
- [x] **Feedback:** Sistema de Confetes e Mensagens Humanizadas.

### ✨ Fase 2: Encantamento & Facilidade (CONCLUÍDA)
*Agora vamos decorar, colocar flores nos vasos e facilitar a vida das visitas.*

- [x] **Facilitador de Encontros (Busca):** Barra de busca instantânea humanizada.
- [x] **Clareza na Ação de Presentear:** Fluxos distintos: "Comprar na Shopee", "Presentear por Fora" e "Apenas ver".
- [x] **Limpeza do Backend:** Script atualizado com a lista REAL de presentes.
- [x] **Admin de Luxo (Painel da Noiva):** Redesign completo e geração de imagem para Stories.
- [x] **Cartão de Visita Digital:** SEO & Open Graph configurados.
- [x] **Refinamento Textual:** Alertas reescritos para tom acolhedor.

### 💖 Fase 3: Revitalização Pós-Evento (EM ANDAMENTO)
*A festa passou! O site se transforma em um portal vivo de memórias e agradecimento do casal.*

- [x] **Passo 1/5: Hero de Agradecimento & Estatísticas Reais** (CONCLUÍDO)
    *   Aprimoramento do topo (`Header`, `Countdown`) e métricas afetuosas com dados reais (`FunStats`).
- [x] **Passo 2/5: Aprimoramento do Mural de Carinho (`PresenceList`)** (CONCLUÍDO)
    *   Destaque para quem presenteou, contador de mimos por amigo e campo de busca por nomes (sem popups artificiais).
- [x] **Passo 3/5: Adaptação da Lista de Presentes para Mimos Tardios (`GiftList`)** (CONCLUÍDO)
    *   Etiqueta "Ganhamos de [Nome]" / "Presente Conquistado" nos itens recebidos, aviso carinhoso de Mimos Tardios e botões ajustados para entregas ou compras online.
- [x] **Passo 4/5: Ajuste na Trilha Sonora e Sons da Casa (`MusicPlayer`)** (CONCLUÍDO)
    *   Sincronização de todas as faixas com links MP3 diretos e testados ("Nossa Casa Nova", "Aconchego do Lar", "Sorrisos & Gratidão"), combinando títulos e artistas que combinam com a história do casal.
- [x] **Passo 5/5: Resumo e Painel do Casal (`AdminPanel`)** (CONCLUÍDO)
    *   Visão consolidada dos presentes ganhos para conferência de Emily & Gustavo, além de Card de Agradecimento exclusivo para redes sociais.

---

## 🚫 Restrições Técnicas & Estilo

*   **Cores:** Sempre usar as variáveis CSS (`--sage`, `--terracotta`, etc). Nada de hexcodes soltos se possível.
*   **Imagens:** Sempre usar `GiftImage` com lazy loading e skeleton.
*   **Texto:** Títulos em *Dancing Script* ou *Cormorant*. Corpo em *Montserrat*.
*   **Mapa:** Opacidade em 80% para manter a leveza visual.

---

## 🎨 Guia de Estilo Rápido

*   **Cor Principal:** `#354F52` (Dark Sage)
*   **Cor de Destaque:** `#B07D62` (Terracotta)
*   **Fundo:** `#F8F7F2` (Sand)

---
**Status Atual:** Fase 3 ativa. O sistema opera agora em modo "Pós-Evento" com visual de agradecimento.
