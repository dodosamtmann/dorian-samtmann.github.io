# dorian-samtmann.github.io

Portfolio SOC Analyst / Blue Team de Dorian Samtmann — site statique, une seule page.

## Stack

- [Astro](https://astro.build) (static output, TypeScript strict)
- [Tailwind CSS](https://tailwindcss.com)
- Zéro JavaScript côté client — animations en CSS pur

## Développement

```bash
npm install
npm run dev      # serveur local
npm run check    # vérification TypeScript
npm run build    # build de production → dist/
npm run preview  # prévisualiser le build
```

## Déploiement

Déployé automatiquement sur GitHub Pages via `.github/workflows/deploy.yml` à chaque push sur `main`. Domaine personnalisé : [dorian.s-t-m.fr](https://dorian.s-t-m.fr) (voir `public/CNAME`).
