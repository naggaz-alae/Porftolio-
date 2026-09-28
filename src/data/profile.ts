// ─────────────────────────────────────────────────────────────
//  TOUT le contenu du portfolio est ici. Modifie ce fichier,
//  le site se met à jour automatiquement.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Alae-eddine Naggaz',
  firstName: 'Alae-eddine',
  role: 'Futur ingénieur Big Data & Machine Learning',
  pitch:
    "Élève-ingénieur en Big Data & Machine Learning à l'Efrei, je conçois des pipelines de données, des modèles prédictifs et des tableaux de bord qui répondent à de vraies questions métier.",
  availability: 'Alternance 24 mois · Data Analyst / Scientist / Engineer · dès septembre 2026',
  rhythm: '1 semaine école / 1 semaine entreprise',
  location: 'Bordeaux · mobile Île-de-France',
  email: 'naggaz.alaeeddine@gmail.com',
  github: 'https://github.com/naggaz-alae',
  // À compléter : l'URL de ton profil LinkedIn (laisse '' pour masquer le lien)
  linkedin: '',
  // Dépose un CV SANS ton numéro de téléphone dans public/cv.pdf, puis mets '/cv.pdf'
  cv: '',
  // Statistiques d'audience gratuites et sans cookies : crée un compte sur goatcounter.com
  // et indique ici ton code (ex. 'alae-naggaz'). Laisse '' pour désactiver.
  goatcounter: '',
};

export const about = [
  "Mon parcours a commencé par le développement : un DUT en développement d'applications à Oujda, puis un stage où j'ai construit une application web de gestion de base de données pour automatiser les demandes de congés du personnel.",
  "La Licence Informatique à l'Université de Bordeaux m'a ensuite orienté vers la donnée, avec la statistique, le machine learning et les bases de données. Je poursuis à l'Efrei en majeure Big Data & Machine Learning.",
  "En parallèle, j'ai travaillé comme gestionnaire de sinistres pour GMF, Generali et Allianz et j'ai animé des ventes et des dégustations. Ces expériences m'ont appris à écouter un client, à suivre des procédures strictes et à expliquer simplement des sujets complexes. Je m'en sers aujourd'hui pour présenter des résultats data.",
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Langages', items: ['Python', 'SQL', 'R', 'Java', 'C', 'C++'] },
  {
    group: 'Data Science & IA',
    items: ['Pandas', 'NumPy', 'SciPy', 'scikit-learn', 'TensorFlow', 'Computer Vision', 'LLM (prompting, embeddings)'],
  },
  { group: 'Data Engineering', items: ['Pipelines ETL', 'Spark', 'Hadoop', 'AWS · GCP · Azure (notions)'] },
  { group: 'Data Visualisation', items: ['Power BI', 'Tableau', 'Qlik Sense', 'Matplotlib', 'Seaborn', 'Excel avancé'] },
  { group: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { group: 'Outils', items: ['Git', 'GitHub', 'Jupyter', 'Spring Boot', 'Vue.js'] },
];

export type Project = {
  slug: string;
  emoji: string;
  title: string;
  kind: 'Projet personnel' | 'Projet académique';
  summary: string;
  stack: string[];
  // Lien du repo GitHub. Remplace par l'URL exacte du repo, ex. 'https://github.com/naggaz-alae/football-analytics'
  repo: string;
  demo?: string;
  // Méthode STAR : Situation, Tâche, Action, Résultat
  star: { situation: string; task: string; action: string[]; result: string };
};

export const projects: Project[] = [
  {
    slug: 'football-match-analytics',
    emoji: '⚽',
    title: 'Football Match Analytics',
    kind: 'Projet personnel',
    summary:
      "Pipeline de vision par ordinateur qui détecte et suit les joueurs sur une vidéo de match, puis calcule leur vitesse, la distance parcourue et la possession de balle.",
    stack: ['Python', 'Computer Vision', 'Pandas', 'NumPy'],
    repo: 'https://github.com/naggaz-alae',
    star: {
      situation:
        "Les statistiques de performance d'un match (distance, vitesse, possession) viennent de systèmes de tracking coûteux, réservés aux clubs professionnels.",
      task: "Produire ces indicateurs automatiquement à partir d'une simple vidéo de match.",
      action: [
        "Détection et suivi (tracking) des joueurs et du ballon image par image.",
        "Conversion des positions en coordonnées terrain, puis calcul de la vitesse et de la distance par joueur.",
        "Attribution de la possession et structuration des données en tables exploitables avec Pandas.",
        'Documentation de chaque indicateur (définition, formule, limites).',
      ],
      result:
        "Un pipeline complet, de la vidéo aux indicateurs de performance, réutilisable sur d'autres matchs et documenté pour qu'un analyste puisse l'exploiter.",
    },
  },
  {
    slug: 'ai-image-gallery',
    emoji: '🖼️',
    title: 'AI Image Gallery',
    kind: 'Projet personnel',
    summary:
      "Application web de galerie photo qui classe automatiquement les images grâce à un modèle de deep learning, de l'entraînement jusqu'à l'intégration dans l'application.",
    stack: ['TensorFlow', 'Spring Boot', 'Vue.js', 'TypeScript'],
    repo: 'https://github.com/naggaz-alae',
    star: {
      situation: 'Trier et retrouver des photos à la main devient vite fastidieux quand la bibliothèque grandit.',
      task: "Intégrer un modèle d'IA de classification dans une application réellement utilisable.",
      action: [
        "Expérimentation et entraînement d'un modèle de classification d'images avec TensorFlow.",
        'Exposition du modèle via une API back-end Spring Boot.',
        'Développement du front-end en Vue.js / TypeScript : upload, galerie et filtres par catégorie.',
      ],
      result:
        "Une application fonctionnelle de bout en bout, de l'expérimentation au déploiement, où chaque image importée est catégorisée automatiquement.",
    },
  },
  {
    slug: 'ml-regression',
    emoji: '📈',
    title: 'Modélisation par régression',
    kind: 'Projet académique',
    summary:
      'Modèles de régression supervisée pour prédire des valeurs continues, avec des tests de validation statistique pour fiabiliser les résultats.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'SciPy'],
    repo: 'https://github.com/naggaz-alae',
    star: {
      situation: "Un modèle prédictif n'est utile que si l'on peut prouver qu'il est fiable.",
      task: 'Construire et comparer des modèles de régression, puis valider statistiquement leurs performances.',
      action: [
        'Préparation et exploration des données (nettoyage, variables, corrélations).',
        'Entraînement de plusieurs modèles de régression supervisée avec scikit-learn.',
        'Validation croisée et tests statistiques sur les résidus et les hypothèses du modèle.',
      ],
      result: 'Un modèle retenu sur des critères objectifs, avec une méthodologie reproductible et des résultats justifiés.',
    },
  },
  {
    slug: 'gestion-rh',
    emoji: '🗂️',
    title: 'Gestion RH',
    kind: 'Projet personnel',
    summary:
      "Conception d'une base de données relationnelle pour centraliser les informations RH et faciliter leur pilotage.",
    stack: ['SQL', 'PostgreSQL', 'Modélisation relationnelle'],
    repo: 'https://github.com/naggaz-alae',
    star: {
      situation: 'Les informations RH (salariés, postes, absences) sont souvent dispersées dans plusieurs fichiers.',
      task: 'Structurer ces données pour un accès rapide et fiable.',
      action: [
        'Modélisation conceptuelle puis relationnelle (entités, relations, contraintes).',
        "Création du schéma SQL et des requêtes de pilotage (effectifs, absences, historique).",
      ],
      result: 'Une base normalisée, cohérente et interrogeable, qui sert de socle à des tableaux de bord RH.',
    },
  },
];

export const experience = [
  {
    title: 'Gestionnaire de sinistres',
    org: 'GMF, Generali et Allianz',
    period: 'Mai – sept. 2025 · mai – sept. 2026',
    points: [
      "Gestion de dossiers de sinistres d'assurance pour plusieurs compagnies et traitement des demandes clients par téléphone.",
      'Suivi rigoureux des dossiers dans le respect des procédures internes.',
    ],
  },
  {
    title: 'Animateur dégustation',
    org: 'Château Lafite Rothschild, Pauillac',
    period: 'Avril – mai 2026',
    points: ['Animation de dégustations et conseil auprès d’une clientèle exigeante.'],
  },
  {
    title: 'Animateur commercial',
    org: 'Plantes pour tous',
    period: 'Depuis décembre 2023',
    points: ['Animation de ventes sur des événements nationaux et conseil client.'],
  },
  {
    title: 'Stagiaire développeur web & bases de données',
    org: "Direction provinciale de l'équipement, Bouarfa (Maroc)",
    period: 'Avril – juillet 2021',
    points: [
      "Développement d'une application web de gestion de base de données.",
      'Automatisation des demandes de congés du personnel.',
    ],
  },
];

export const education = [
  { title: 'Cycle ingénieur : majeure Big Data & Machine Learning', org: 'Efrei', period: 'Dès septembre 2026' },
  { title: 'Licence Informatique', org: 'Université de Bordeaux', period: '2022 – 2026' },
  {
    title: "DUT Développement d'applications informatiques",
    org: 'École supérieure de technologie, Oujda (Maroc)',
    period: '2019 – 2021',
  },
];

export const languages = ['Arabe : langue maternelle', 'Français : courant', 'Anglais : courant'];
