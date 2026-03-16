# OdontoCenter — Clínica Odontológica

Um site moderno e responsivo para clínica odontológica, construído com **React**, **Tailwind CSS** e **Vite**.

## 🚀 Tecnologias

- **React 18** — Framework UI
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling e responsividade
- **Vite** — Build tool rápido
- **PostCSS** — Processamento de CSS

## 📋 Funcionalidades

- ✅ Design elegante e sofisticado
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Animações suaves com fade-up ao scroll
- ✅ Componentes reutilizáveis e otimizados
- ✅ Cores e tipografia premium
- ✅ Botão WhatsApp flutuante
- ✅ Navbar fixa com scroll detection
- ✅ Seções: Hero, Features, About, Treatments, Testimonials, Footer

## 🏃 Como Executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Preview (produção local)

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── App.tsx              # Componente principal com todas as seções
├── components/
│   └── Button.tsx       # Componente Button reutilizável
├── index.css            # Estilos globais e Tailwind directives
└── main.tsx             # Ponto de entrada React
```

## 🎨 Customização

### Cores

As cores estão definidas em `tailwind.config.ts`:
- Black: `#1A1A1A`
- Silver: `#B3B3B3`
- Mid: `#5A5A5A`
- Marble: `#F8F8F8`

### Fontes

- Display: Cormorant Garamond
- UI: Tenor Sans
- Body: Jost

As fontes são carregadas automaticamente do Google Fonts via `index.css`.

## 📱 Responsividade

O projeto usa Tailwind's breakpoints:
- `md:` (768px) — Tablet e superiores
- `lg:` (1024px) — Desktop
- Layout fluid com grid e flexbox

## ⚡ Performance

- Componentes leves e otimizados
- Sem dependências externas desnecessárias
- CSS gerado apenas para classes usadas (Tailwind purge)
- Animações GPU-accelerated

## 🔗 Links Importantes

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

---

Desenvolvido com excelência para OdontoCenter Clínica Odontológica.
