# Portfolio · Alae-eddine Naggaz

Portfolio de recherche d'alternance Data (Analyst / Scientist / Engineer), construit avec [Astro](https://astro.build) et hébergé gratuitement sur GitHub Pages.

🌐 https://naggaz-alae.github.io/Portfolio/

## Modifier le contenu

Tout le texte (profil, projets STAR, compétences, parcours) se trouve dans [`src/data/profile.ts`](src/data/profile.ts).

## Commandes

```bash
npm install
npm run dev      # http://localhost:4321/Portfolio/
npm run build    # génère dist/
npm run preview
```

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`.
À faire une seule fois : **Settings → Pages → Source : GitHub Actions**.

Le guide complet (stratégie, domaine, DNS, SEO, checklist de lancement) est dans [`GUIDE.md`](GUIDE.md).
