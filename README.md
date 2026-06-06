# Carla Matos — Personal Trainer

Site institucional one-page reconstruído com **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**.

## Recursos

- Design profissional e elegante com foco em UX/UI
- Hero impactante com foto em destaque e estatísticas
- Seções: Início, Sobre, Serviços, Resultados e Contato
- Modo claro/escuro com persistência (localStorage)
- Animações de scroll (IntersectionObserver)
- Formulário de contato integrado ao WhatsApp
- Botão flutuante do WhatsApp
- Totalmente responsivo e otimizado (next/image, next/font)

## Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
app/            # layout, página e estilos globais
components/     # Header, Hero, About, Services, Results, Contact, Footer...
lib/            # constantes (WhatsApp, navegação)
public/img/     # imagens (mesmas do site original)
```

> Número de WhatsApp configurável em `lib/site.ts`.
