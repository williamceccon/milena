# Guia do Morador — Edifício Milena

Landing page pública com os canais oficiais, as orientações básicas de convivência e os contatos de emergência do condomínio.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Validação:

```bash
npm test
npm run build
```

O build estático é gravado em `out/`. Para publicar, copie o conteúdo gerado para `docs/` e envie a branch `main`. No GitHub Pages, a origem deve ser configurada como **Deploy from a branch**, usando `main` e `/docs`.

```bash
npm test
npm run build
rm -rf docs
cp -R out docs
touch docs/.nojekyll
```

## Atualização de conteúdo

Os telefones, links e textos ficam em `app/content.ts`. A página pública não deve receber contatos internos de conselheiros ou fornecedores.
