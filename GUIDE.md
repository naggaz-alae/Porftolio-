# Guide : du CV au portfolio en ligne (budget 0 €)

Profil ciblé : étudiant ingénieur Big Data & ML qui cherche une **alternance Data de 24 mois**.
Stack retenue : **Astro + GitHub Pages**, 100 % gratuit.
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
| Projets | 4 cartes, chacune menant à une étude de cas au format **STAR** |
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
| **Astro** | Gratuit | ✅ **Retenu** : HTML statique ultra-rapide, SEO excellent, facile à modifier |
| Next.js | Gratuit | Seulement si tu veux des démos interactives lourdes (API ML) |
| CMS (WordPress…) | Hébergement payant | ❌ |

Pour une démo ML interactive plus tard, garde Astro et héberge la démo à part, gratuitement, sur **Hugging Face Spaces** ou **Streamlit Community Cloud**. Il suffit ensuite de renseigner `demo:` dans le projet.

---

## 4. Conception & développement (déjà fait ✅)

- **Maquette** : un seul fichier de contenu, `src/data/profile.ts`. Tu ne touches pas au HTML pour mettre à jour ton portfolio.
- **Structure du code**
  ```
  src/data/profile.ts        ← TOUT ton contenu
  src/layouts/Base.astro     ← <head> SEO, OpenGraph, menu, footer
  src/pages/index.astro      ← page d'accueil
  src/pages/projets/[slug].astro ← étude de cas STAR (1 page par projet)
  src/styles/global.css      ← design (thème clair/sombre automatique)
  public/                    ← favicon, image de partage, robots.txt, (cv.pdf)
  ```
- **Responsive** : grilles fluides, testé à 390 px (mobile), 768 px (tablette) et 1280 px (desktop), sans défilement horizontal.
- **Accessibilité** : `lang="fr"`, lien « Aller au contenu », titres hiérarchisés, focus clavier visible, contrastes AA, respect de `prefers-reduced-motion`, emojis masqués aux lecteurs d'écran.

**Travailler en local**
```bash
npm install
npm run dev      # http://localhost:4321/Portfolio/
npm run build    # vérifie que tout compile
```

---

## 5. Hébergement & DNS

**Mise en ligne sur GitHub Pages (gratuit, HTTPS automatique)**
1. Fusionne cette branche dans `main`.
2. Sur GitHub : **Settings → Pages → Build and deployment → Source : « GitHub Actions »**.
3. Chaque `push` sur `main` redéploie automatiquement (workflow `.github/workflows/deploy.yml`).
4. Ton site : `https://naggaz-alae.github.io/Portfolio/`

> Astuce : si tu renommes le repo `naggaz-alae.github.io`, l'URL devient la racine `https://naggaz-alae.github.io/`. Dans ce cas, supprime `base: '/Portfolio'` dans `astro.config.mjs` et mets à jour `public/robots.txt`.

**SSL/HTTPS** : fourni automatiquement par GitHub Pages. Rien à faire.

**Plus tard, avec un domaine perso** (ex. `alae-naggaz.dev`) :
- Chez le registrar, crée 4 enregistrements **A** sur `@` : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Et un **CNAME** `www` → `naggaz-alae.github.io`
- Dans Settings → Pages → Custom domain, saisis le domaine puis coche **Enforce HTTPS**.
- Dans `astro.config.mjs` : `site: 'https://alae-naggaz.dev'` et supprime `base`.

**Email pro à 0 €** : garde `naggaz.alaeeddine@gmail.com` (adresse sobre, c'est très bien). Avec un domaine sur Cloudflare, **Cloudflare Email Routing** (gratuit) redirige `contact@alae-naggaz.dev` vers ton Gmail, et Gmail peut envoyer « en tant que » cette adresse.

---

## 6. SEO, analytics & lancement

**Déjà en place ✅**
- `<title>` + `meta description` uniques par page
- Balises **OpenGraph** + image 1200×630 (`public/og-image.png`) pour un bel aperçu sur LinkedIn
- Données structurées **JSON-LD `Person`** (Google comprend qui tu es)
- `sitemap-index.xml` + `robots.txt`, URL canonique

**Analytics respectueux des données (gratuit, sans cookies, sans bannière RGPD)**
1. Crée un compte sur [goatcounter.com](https://www.goatcounter.com) (gratuit pour un usage non commercial).
2. Mets ton code dans `profile.goatcounter` (ex. `'alae-naggaz'`).

**Après la mise en ligne**
- [Google Search Console](https://search.google.com/search-console) : ajoute la propriété (préfixe d'URL) et soumets `sitemap-index.xml`.
- Teste l'aperçu LinkedIn avec le [Post Inspector](https://www.linkedin.com/post-inspector/).
- Lance Lighthouse (Chrome DevTools) : vise ≥ 95 partout.

### ✅ Checklist avant lancement
- [ ] URL LinkedIn renseignée (`profile.linkedin`)
- [ ] Liens `repo:` pointant vers **chaque repo** (et non ton profil GitHub)
- [ ] Chaque repo a un README clair : objectif, captures, comment lancer, résultats
- [ ] Au moins un résultat **chiffré** par projet
- [ ] CV **sans numéro de téléphone** dans `public/cv.pdf` + `profile.cv: '/cv.pdf'`
- [ ] Cohérence école/ville : le CV dit « Efrei **Bordeaux** », ton README GitHub dit « Efrei **Paris** / Île-de-France ». Choisis une version et aligne CV, GitHub, LinkedIn et le site.
- [ ] Relecture orthographe (fais relire par quelqu'un)
- [ ] Test sur ton téléphone + aperçu LinkedIn OK
- [ ] Lien du portfolio ajouté : CV, LinkedIn (section « Sélection » + infos de contact), bio GitHub, signature email
- [ ] Post LinkedIn de lancement : 3-4 lignes + lien + 1 projet mis en avant
