# Guide : du CV au portfolio en ligne (budget 0 €)

Profil ciblé : étudiant ingénieur Big Data & ML qui cherche une **alternance Data de 24 mois**.
Stack retenue : **générateur Node sans dépendance + GitHub Pages**, 100 % gratuit.
URL finale : `https://naggaz-alae.github.io/Portfolio/`

---

## 1. Stratégie & contenu

**Ton lecteur, c'est un recruteur ou un manager data qui a 30 secondes.** Il doit comprendre tout de suite :
1. Ce que tu cherches : alternance de 24 mois, Data Analyst / Scientist / Engineer, dès sept. 2026, rythme 1/1.
2. La preuve que tu sais le faire : tes projets.
3. Comment te contacter : un clic.

**Structure (une page d'accueil + une page par projet)**

| Section | Rôle |
|---|---|
| Accueil (hero) | Accroche, statut « Disponible », 2 boutons : Projets / Contact |
| Projets | 3 projets phares + la liste complète des 9 projets filtrable, chacun menant à une étude de cas **STAR** |
| Compétences | Regroupées par domaine, pas de barres de niveau (subjectives et peu crédibles) |
| Parcours | Expérience + formation en frise |
| À propos | Ton histoire, du DUT dev à la data, et ce que t'ont apporté tes jobs « non tech » |
| Contact | Email, GitHub, LinkedIn |

**Méthode STAR** (déjà appliquée dans `src/data/profile.ts`) :
- **S**ituation : le problème de départ.
- **T**âche : ton objectif.
- **A**ctions : ce que *tu* as fait (verbes d'action, technos).
- **R**ésultat : le résultat, **chiffré si possible**.

👉 **Ton action n°1** : ajoute des chiffres réels dans les champs `result` (précision du modèle, nombre d'images, R² / RMSE, durée de traitement, nombre de matchs analysés…). Un résultat chiffré vaut 10 adjectifs. Je n'ai rien inventé : les résultats actuels sont qualitatifs.

**Accroche retenue** : « Je transforme des données brutes en décisions. »
Alternatives : « Du pipeline au dashboard, je rends la donnée utile. » / « Data Engineer en devenir, Data Analyst dans l'âme. »

---

## 2. Identité & nom de domaine

Avec un budget de 0 € : **pas de nom de domaine payant**. Ton URL sera `naggaz-alae.github.io/Portfolio/`. C'est parfaitement acceptable pour une alternance, et même un signal positif (hébergé sur GitHub).

Quand tu auras ~10-15 €/an (par exemple à ton premier salaire d'alternant) :

| Extension | Pour qui | Prix indicatif/an |
|---|---|---|
| `.dev` | Profils tech, HTTPS obligatoire | 12-15 € |
| `.fr` | Marché français, sobre | 7-10 € |
| `.com` | Universel | 10-13 € |

| Registrar | + | − |
|---|---|---|
| **Cloudflare Registrar** | Prix coûtant, pas de marge au renouvellement | Il faut utiliser le DNS Cloudflare |
| **Porkbun** | Pas cher, WHOIS privé inclus | Interface en anglais |
| **OVHcloud** | Français, support FR | Prix de renouvellement plus élevés |

Bonnes pratiques : `prenom-nom.dev` (ex. `alae-naggaz.dev`), court, sans chiffres, facile à épeler au téléphone. Regarde toujours le **prix de renouvellement**, pas seulement celui de la 1ʳᵉ année.

> ⚠️ Évite les « domaines gratuits » (Freenom, etc.) : ils sont souvent bloqués ou récupérés.

---

## 3. Choix de la stack

| Option | Coût | Pour toi ? |
|---|---|---|
| Framer / Webflow | Gratuit avec sous-domaine imposé, payant pour un domaine perso | ❌ Pas crédible pour un profil tech qui a un DUT dev |
| Astro / Next.js | Gratuit | Très bien, mais une centaine de dépendances npm à maintenir pour 10 pages |
| **Générateur maison en Node, zéro dépendance** | Gratuit | ✅ **Retenu (v2)** : un fichier de contenu, un script de 300 lignes, rien à installer, rien qui casse dans un an |
| CMS (WordPress…) | Hébergement payant | ❌ |

La v1 était en Astro. La v2 utilise `build.mjs` : Node 22 lit directement `src/data/profile.ts` et écrit du HTML statique. Même résultat (HTML rapide, SEO), sans `npm install`.
C'est aussi un argument d'entretien : « j'ai écrit le générateur de mon portfolio ».

Pour une démo ML interactive, héberge-la à part, gratuitement, sur **Hugging Face Spaces** ou **Streamlit Community Cloud**, puis renseigne `demo: { label, href }` dans le projet. Le Takuzu, lui, tourne directement dans le site grâce à WebAssembly.

---

## 4. Conception & développement (déjà fait ✅)

- **Contenu** : un seul fichier, `src/data/profile.ts`. Tu ne touches pas au HTML pour mettre à jour ton portfolio.
- **Structure du code**
  ```
  src/data/profile.ts        ← TOUT ton contenu (9 projets, STAR, « ce que j'en retiens »)
  src/styles/global.css      ← design (thème clair/sombre automatique)
  build.mjs                  ← <head> SEO + OpenGraph, accueil, une page par projet, 404, sitemap
  public/                    ← photo, image de partage, captures, favicon, démo Takuzu, (cv.pdf)
  ```
- **Design** : papier bleu-gris, accent bordeaux, typo Schibsted Grotesk + Instrument Serif (pour tes notes personnelles). Élément signature : le « chemin de la donnée » de chaque projet.
- **Responsive** : testé à 390 px (mobile) et 1280 px (desktop), sans défilement horizontal.
- **Accessibilité** : `lang="fr"`, lien « Aller au contenu », titres hiérarchisés, focus clavier visible, contrastes AA, `prefers-reduced-motion` respecté, filtres et grille Takuzu utilisables au clavier.

**Travailler en local**
```bash
npm run build     # génère dist/
npm run preview   # http://localhost:4321
```

---

## 5. Hébergement & DNS

**Mise en ligne sur GitHub Pages (gratuit, HTTPS automatique)**
1. Fusionne cette branche dans `main`.
2. Sur GitHub : **Settings → Pages → Build and deployment → Source : « GitHub Actions »**.
3. Chaque `push` sur `main` redéploie automatiquement (workflow `.github/workflows/deploy.yml`).
4. Ton site : `https://naggaz-alae.github.io/Portfolio/`

> Astuce : si tu renommes le repo `naggaz-alae.github.io`, l'URL devient la racine `https://naggaz-alae.github.io/`. Dans ce cas, change `SITE_URL` en haut de `build.mjs`.

**SSL/HTTPS** : fourni automatiquement par GitHub Pages. Rien à faire.

**Plus tard, avec un domaine perso** (ex. `alae-naggaz.dev`) :
- Chez le registrar, crée 4 enregistrements **A** sur `@` : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Et un **CNAME** `www` → `naggaz-alae.github.io`
- Dans Settings → Pages → Custom domain, saisis le domaine puis coche **Enforce HTTPS**.
- En haut de `build.mjs` : `SITE_URL = 'https://alae-naggaz.dev/'`.

**Email pro à 0 €** : garde `naggaz.alaeeddine@gmail.com` (adresse sobre, c'est très bien). Avec un domaine sur Cloudflare, **Cloudflare Email Routing** (gratuit) redirige `contact@alae-naggaz.dev` vers ton Gmail, et Gmail peut envoyer « en tant que » cette adresse.

---

## 6. SEO, analytics & lancement

**Déjà en place ✅**
- `<title>` + `meta description` uniques par page
- Balises **OpenGraph** + image 1200×630 (`public/og-image.png`) pour un bel aperçu sur LinkedIn
- Données structurées **JSON-LD `Person`** (Google comprend qui tu es)
- `sitemap.xml` + `robots.txt`, URL canonique

**Analytics respectueux des données (gratuit, sans cookies, sans bannière RGPD)**
1. Crée un compte sur [goatcounter.com](https://www.goatcounter.com) (gratuit pour un usage non commercial).
2. Mets ton code dans `profile.goatcounter` (ex. `'alae-naggaz'`).

**Après la mise en ligne**
- [Google Search Console](https://search.google.com/search-console) : ajoute la propriété (préfixe d'URL) et soumets `sitemap.xml`.
- Teste l'aperçu LinkedIn avec le [Post Inspector](https://www.linkedin.com/post-inspector/).
- Lance Lighthouse (Chrome DevTools) : vise ≥ 95 partout.

### ✅ Checklist avant lancement
- [ ] URL LinkedIn renseignée (`profile.linkedin`)
- [x] Liens `repo:` pointant vers **chaque repo** (fait en v2)
- [ ] Renommer les repos `projet1`…`projet9` avec des noms parlants (`suis-je-couvert`, `football-analysis`, `veille-ruptures`…), puis mettre à jour les liens dans `profile.ts`. GitHub redirige les anciennes URL, mais un recruteur juge aussi la liste de tes repos.
- [ ] Ajouter une capture ou un GIF dans les README de Football Analysis et Suis-je couvert (ce sont tes projets phares, et ils n'ont pas encore d'image)
- [ ] Chaque repo a un README clair : objectif, captures, comment lancer, résultats
- [ ] Au moins un résultat **chiffré** par projet
- [ ] CV **sans numéro de téléphone** dans `public/cv.pdf` + `profile.cv: '/cv.pdf'`
- [ ] Cohérence école/ville : le site et le CV disent « Efrei **Bordeaux** ». Le README de ton profil GitHub dit encore « Efrei **Paris** » : remplace-le par `PROFILE_README.md` (dans ce repo).
- [ ] Relecture orthographe (fais relire par quelqu'un)
- [ ] Test sur ton téléphone + aperçu LinkedIn OK
- [ ] Lien du portfolio ajouté : CV, LinkedIn (section « Sélection » + infos de contact), bio GitHub, signature email
- [ ] Post LinkedIn de lancement : 3-4 lignes + lien + 1 projet mis en avant
