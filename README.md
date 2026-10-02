# Portfolio · Alae-eddine Naggaz

Mon portfolio de recherche d'alternance data (Analyst, Scientist, Engineer) : 9 projets, chacun raconté avec la méthode STAR et le chemin que suit la donnée.

🌐 https://naggaz-alae.github.io/Portfolio/

## Modifier le contenu

Tout le texte (présentation, projets, compétences, parcours) est dans [`src/data/profile.ts`](src/data/profile.ts).
Le design est dans [`src/styles/global.css`](src/styles/global.css).

Pour ajouter un projet : copie un bloc dans `projects`, change le `slug`, et mets `featured: true` si tu veux qu'il apparaisse dans « Trois projets dont je suis fier ».

## Construire le site

Aucune dépendance à installer, seulement Node 22 ou plus récent.

```bash
npm run build     # génère le site dans dist/
npm run preview   # http://localhost:4321
```

## Organisation

```
src/data/profile.ts      tout le contenu
src/styles/global.css    le design (thème clair et sombre automatiques)
build.mjs                le générateur (accueil, une page par projet, 404, sitemap)
public/                  photo, image de partage LinkedIn, captures, favicon
public/demos/takuzu/     le Takuzu en C compilé en WebAssembly, jouable en ligne
```

## Déploiement

Chaque push sur `main` lance `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages.
À faire une seule fois : **Settings → Pages → Source : GitHub Actions**.

Le guide complet (stratégie, domaine, DNS, SEO, checklist de lancement) est dans [`GUIDE.md`](GUIDE.md).
