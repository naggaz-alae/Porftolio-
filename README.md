# Mon portfolio

Salut, moi c'est Alae. Je suis en cycle ingénieur à l'Efrei Bordeaux (Big Data & Machine Learning) et je cherche une alternance en data à partir de septembre 2026.

Ce dépôt, c'est le code de mon site : https://naggaz-alae.github.io/Porftolio-/

J'y présente 9 projets, du RAG sur des contrats d'assurance à un Takuzu en C qu'on peut jouer directement dans le navigateur. Pour chaque projet j'explique d'où je suis parti, ce que j'ai fait et ce que j'en ai retenu.

## Comment c'est fait

Pas de framework. J'ai écrit un petit script (`build.mjs`) qui lit mes infos dans `src/data/profile.ts` et génère des pages HTML toutes simples. Le style est dans `src/styles/global.css`.

Pour le lancer chez soi, il faut juste Node 22 :

```bash
npm run build
npm run preview
```

Ensuite le site est sur http://localhost:4321.

À chaque push sur `main`, une GitHub Action reconstruit le site et le met en ligne sur GitHub Pages.

## Me contacter

naggaz.alaeeddine@gmail.com, ou via mon [GitHub](https://github.com/naggaz-alae).
