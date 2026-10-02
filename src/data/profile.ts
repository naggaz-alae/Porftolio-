// ─────────────────────────────────────────────────────────────
//  TOUT le contenu du portfolio est ici. Modifie ce fichier,
//  le site se met à jour automatiquement.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Alae-eddine Naggaz',
  firstName: 'Alae',
  role: 'Élève-ingénieur Big Data & Machine Learning',
  school: 'Efrei Bordeaux',
  hello: 'Salut, moi c’est Alae.',
  pitch:
    "J’aime les problèmes concrets : un contrat d’assurance que personne ne lit, des médicaments en rupture dont on ne garde aucun historique, un match de foot qu’on voudrait mesurer. Je construis les outils data qui y répondent, de la collecte jusqu’à la réponse qu’on peut montrer.",
  seeking: 'Je cherche une alternance de 24 mois en data, à partir de septembre 2026.',
  roles: ['Data Analyst', 'Data Scientist', 'Data Engineer'],
  rhythm: '1 semaine à l’école, 1 semaine en entreprise',
  location: 'Basé à Bordeaux, mobile en Île-de-France',
  now: 'En ce moment, je construis NovaWatt : l’ingestion des données RTE et météo est faite, je passe au générateur de clients.',
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
  "J’ai commencé par le code. En 2021, pendant mon DUT à Oujda, j’ai fait mon stage dans une administration où les présences et les congés se suivaient encore sur papier. J’ai écrit ma première vraie application pour remplacer ce papier, et j’ai compris ce jour-là que le plus intéressant n’était pas le code, mais les règles qu’il fallait comprendre avant de l’écrire.",
  "Je suis ensuite arrivé à Bordeaux pour la Licence Informatique. C’est là que la donnée m’a attrapé : les statistiques, le machine learning, et ce moment où un modèle trouve quelque chose qu’on n’avait pas vu. Je continue aujourd’hui en cycle ingénieur à l’Efrei, majeure Big Data & Machine Learning.",
  "À côté des études, je travaille : gestionnaire de sinistres pour GMF, Generali et Allianz, animateur de ventes, et des dégustations au Château Lafite Rothschild. Ce ne sont pas des jobs data, mais c’est là que j’ai appris à écouter un client, à suivre une procédure à la lettre et à expliquer simplement une chose compliquée.",
];

export const outside = 'Hors écran : road trips, sport, bénévolat associatif, et beaucoup de veille sur ce qui sort en IA.';

export const skills: { group: string; items: string[] }[] = [
  { group: 'Langages', items: ['Python', 'SQL', 'R', 'Java', 'C', 'C++', 'PHP', 'TypeScript'] },
  {
    group: 'Data science et IA',
    items: ['Pandas', 'NumPy', 'scikit-learn', 'TensorFlow / Keras', 'YOLOv8', 'OpenCV', 'RAG', 'Embeddings'],
  },
  { group: 'Data engineering', items: ['Pipelines ETL', 'dbt', 'DuckDB', 'Spark', 'Hadoop', 'Docker', 'GitHub Actions'] },
  { group: 'Bases de données', items: ['PostgreSQL', 'pgvector', 'MySQL', 'SQLite', 'MongoDB'] },
  { group: 'Visualisation', items: ['Power BI', 'Tableau', 'Qlik Sense', 'Streamlit', 'Matplotlib', 'Excel avancé'] },
  { group: 'Web et API', items: ['FastAPI', 'Spring Boot', 'Vue 3', 'Node.js', 'pytest'] },
];

export type Domain = 'data' | 'ia' | 'logiciel';

export const domains: { id: Domain; label: string }[] = [
  { id: 'ia', label: 'IA et machine learning' },
  { id: 'data', label: 'Data engineering' },
  { id: 'logiciel', label: 'Développement logiciel' },
];

export type Project = {
  slug: string;
  title: string;
  /** La phrase qui donne envie de cliquer : le problème, en mots simples. */
  hook: string;
  kind: 'Projet perso' | 'Projet d’études' | 'Stage';
  year: string;
  domain: Domain;
  status: { label: string; done: boolean };
  team?: string;
  summary: string;
  stack: string[];
  repo: string;
  demo?: { label: string; href: string };
  /** Chemin d'une image dans public/ (sans slash de début) */
  image?: { src: string; alt: string };
  /** Le chemin que suit la donnée, étape par étape */
  flow: string[];
  featured?: boolean;
  // Méthode STAR : Situation, Tâche, Action, Résultat
  star: { situation: string; task: string; action: string[]; result: string };
  learned: string;
  next?: string[];
};

const gh = (repo: string) => `https://github.com/naggaz-alae/${repo}`;

export const projects: Project[] = [
  {
    slug: 'suis-je-couvert',
    title: 'Suis-je couvert ?',
    hook: 'Personne ne lit les 80 pages de son contrat d’assurance. Cet assistant le fait pour vous, et montre la page exacte.',
    kind: 'Projet perso',
    year: '2026',
    domain: 'ia',
    status: { label: 'Fonctionnel, en amélioration', done: true },
    summary:
      'Un assistant RAG qui répond à « est-ce que mon assurance habitation me couvre pour ça ? » à partir des conditions générales de la MAIF, la Macif, la MAAF et la Matmut, avec la citation exacte du contrat.',
    stack: ['Python', 'Mistral', 'PostgreSQL + pgvector', 'FastAPI', 'Streamlit', 'Docker', 'GitHub Actions'],
    repo: gh('projet3'),
    flow: ['PDF des contrats', 'Découpage article par article', 'Recherche hybride (sens + mots-clés)', 'Réponse Mistral en JSON', 'Vérification des citations'],
    featured: true,
    star: {
      situation:
        "Les conditions générales d’assurance habitation font 60 à 100 pages et presque personne ne les lit. Le sujet me parle : j’ai géré des sinistres pour plusieurs assureurs.",
      task: 'Construire un assistant qui répond à une question en langage courant, avec un verdict clair et la preuve dans le contrat.',
      action: [
        'Découpage des PDF article par article, pour qu’une exclusion ne soit jamais séparée de la garantie qu’elle concerne.',
        'Recherche hybride dans PostgreSQL : vecteurs (pgvector + embeddings Mistral) et recherche plein texte, puis fusion des deux classements.',
        'Réponse imposée en JSON, puis contrôle que chaque citation existe vraiment dans le contrat. Sans citation valable, la réponse devient « information absente ».',
        'Garde-fous (questions hors sujet refusées sans appeler le modèle, cache des embeddings), API FastAPI, interface Streamlit, le tout lancé avec Docker.',
      ],
      result:
        'Un assistant qui compare quatre assureurs sur la même question. Il est évalué sur 40 questions vérifiées à la main dans les PDF, dont des questions pièges (franchises, exclusions, défaut d’entretien). Les tests tournent à chaque push.',
    },
    learned:
      'Je préfère un assistant qui dit « je ne sais pas » à un assistant qui invente. La vérification des citations m’a pris plus de temps que l’appel au modèle, et c’est la partie dont je suis le plus fier.',
    next: [
      'Lire les tableaux des PDF (plafonds, franchises) correctement',
      'Ajouter les conditions particulières, qui changent souvent la réponse',
      'Mettre l’application en ligne',
    ],
  },
  {
    slug: 'football-analysis',
    title: 'Football Analysis',
    hook: 'Une vidéo de match en entrée, la vitesse et la distance de chaque joueur en sortie.',
    kind: 'Projet perso',
    year: '2026',
    domain: 'ia',
    status: { label: 'Fonctionnel', done: true },
    summary:
      'Un pipeline de computer vision qui suit chaque joueur sur une vidéo de match, sépare les équipes, mesure la possession et calcule vitesse (km/h) et distance (m), exportées en CSV.',
    stack: ['Python', 'YOLOv8', 'ByteTrack', 'OpenCV', 'K-Means', 'Pandas', 'pytest'],
    repo: gh('Projet7'),
    flow: ['Vidéo du match', 'Détection YOLOv8', 'Suivi ByteTrack', 'Équipes par couleur de maillot', 'Pixels → mètres', 'Vitesse, distance, possession'],
    featured: true,
    star: {
      situation:
        'Les statistiques physiques d’un match (distance, vitesse, possession) viennent de systèmes de tracking coûteux, réservés aux clubs professionnels.',
      task: 'Obtenir ces indicateurs à partir d’une simple vidéo prise par une caméra TV.',
      action: [
        'Détection des joueurs, arbitres et ballon avec YOLOv8, puis suivi d’une image à l’autre avec ByteTrack pour que chaque joueur garde son numéro.',
        'Séparation des équipes par K-Means sur la couleur des maillots, avec une équipe figée après 10 observations pour résister aux occlusions.',
        'Compensation du mouvement de la caméra par flux optique, puis homographie pour passer des pixels aux mètres du terrain.',
        'Interpolation de la position du ballon quand YOLO le perd, attribution de la possession, export des stats par joueur en CSV.',
      ],
      result:
        'Une vidéo annotée (joueurs suivis, équipes, possession en direct) et un fichier de statistiques par joueur. Les détections sont mises en cache pour relancer l’analyse en quelques secondes.',
    },
    learned:
      'Une position en pixels ne veut rien dire tant qu’on ne sait pas comment la caméra a bougé. J’ai passé plus de temps sur la géométrie que sur le modèle, et j’ai appris à lister honnêtement les limites d’un système.',
    next: ['Détecter automatiquement les lignes du terrain', 'Heatmaps par joueur et minimap vue de dessus', 'Un dashboard Streamlit'],
  },
  {
    slug: 'veille-ruptures',
    title: 'veille-ruptures',
    hook: 'L’ANSM publie chaque jour les médicaments en rupture, mais oublie la veille. Cet outil s’en souvient.',
    kind: 'Projet perso',
    year: '2026',
    domain: 'data',
    status: { label: 'Collecte automatique chaque matin', done: true },
    summary:
      'Un outil en ligne de commande, installable avec pip, qui enregistre chaque jour l’état des ruptures de stock de médicaments en France et en reconstruit l’historique : nouvelles ruptures, aggravations, remises à disposition, durées.',
    stack: ['Python', 'click', 'GitHub Actions', 'pytest + Hypothesis', 'ruff', 'mypy'],
    repo: gh('projet4'),
    flow: ['Base publique des médicaments', 'Croisement des fichiers', 'Instantané CSV daté', 'Comparaison jour à jour', 'Rapport, RSS, JSON'],
    featured: true,
    star: {
      situation:
        'La liste officielle des médicaments en rupture ou en tension ne garde que l’état du jour. Impossible de savoir depuis quand un médicament manque, ni ce qui a changé depuis hier.',
      task: 'Garder une mémoire de cette liste et la rendre lisible, par un humain comme par un programme.',
      action: [
        'Téléchargement et croisement des fichiers de la Base de données publique des médicaments (nom, laboratoire, classe thérapeutique, MITM).',
        'Un instantané CSV par jour, commité automatiquement chaque matin par une GitHub Action : l’historique Git sert de base de données.',
        'Lecture tolérante des fichiers (encodage, dates, lignes bancales) : une ligne illisible est signalée au lieu de faire planter l’outil.',
        'Sept commandes (etat, diff, historique, stats, rapport, flux…), sorties en tableau, JSON, CSV, Markdown et RSS.',
      ],
      result:
        'Un outil packagé sous licence MIT, testé avec pytest et Hypothesis, vérifié par ruff et mypy, programmé pour collecter ses données tout seul chaque matin.',
    },
    learned:
      'Des données publiques ne sont jamais aussi propres qu’on l’espère. Écrire un outil que d’autres peuvent installer m’a obligé à soigner ce qu’on oublie dans un notebook : les erreurs, la documentation, les tests.',
  },
  {
    slug: 'images-app',
    title: 'Images App',
    hook: 'Déposez une photo : l’application devine ce qu’elle montre et retrouve celles qui lui ressemblent.',
    kind: 'Projet d’études',
    year: '2025',
    domain: 'ia',
    status: { label: 'Démo en ligne', done: true },
    team: 'À trois, avec Amine et Anass. Ma partie : toute l’IA.',
    summary:
      'Une application web de partage d’images avec classification automatique (CNN entraîné sur CIFAR-10) et recherche d’images similaires par histogrammes de couleurs ou sac de mots visuels.',
    stack: ['Python', 'TensorFlow / Keras', 'Java · Spring Boot', 'BoofCV', 'Vue 3', 'PostgreSQL'],
    repo: gh('projet6'),
    demo: { label: 'Voir la démo en ligne', href: 'https://images-app-production.up.railway.app/' },
    flow: ['Image déposée', 'Classification CNN', 'Descripteurs visuels', 'Distance entre images', 'Images similaires'],
    star: {
      situation: 'Projet de L3 à l’Université de Bordeaux : une galerie d’images publique où l’on puisse chercher par ressemblance.',
      task: 'Prendre en charge toute la partie IA et la brancher dans une application Java / Vue développée en équipe.',
      action: [
        'Entraînement d’un réseau convolutif sur CIFAR-10 en Python (10 classes : avion, chat, bateau…).',
        'Intégration du modèle dans le back-end Spring Boot via TensorFlow Java : chaque image déposée reçoit son étiquette.',
        'Recherche d’images similaires : histogrammes 2D et 3D de couleurs, et sac de mots visuels (vocabulaire construit par k-means).',
      ],
      result: 'Une application complète et en ligne, avec comptes, albums et favoris, où chaque image est classée et comparable aux autres.',
    },
    learned:
      'Un modèle qui marche dans un notebook n’est que la moitié du travail. Le brancher dans le code de deux coéquipiers, en Java, m’a appris à penser interfaces et formats d’échange.',
  },
  {
    slug: 'temps-et-conges',
    title: 'Temps & Congés',
    hook: 'Mon premier projet de stage, en 2021, pour remplacer le papier. Repris et durci en 2026.',
    kind: 'Stage',
    year: '2021 · 2026',
    domain: 'logiciel',
    status: { label: 'Terminé', done: true },
    summary:
      'Une application web de badgeage et de demandes de congé pour une administration publique marocaine : cinq profils, un circuit de validation agent → chef → directeur, et les règles de la fonction publique traduites en code.',
    stack: ['PHP 8', 'SQLite / MySQL', 'JavaScript', 'PWA', 'Tests'],
    repo: gh('projet9'),
    image: { src: 'projets/05-validation-directeur.png', alt: 'Écran de décision du directeur sur une demande de congé' },
    flow: ['Badgeage', 'Calcul du temps de travail', 'Demande de congé', 'Avis du chef', 'Décision du directeur'],
    star: {
      situation: 'En stage dans une direction provinciale, les présences et les congés étaient suivis sur papier.',
      task: 'Remplacer ce papier par une application qui respecte exactement les règles administratives.',
      action: [
        'Traduction des règles en code : horaires (36 h 30 par semaine), ramadan, 22 jours de congé après 12 mois de service, congés exceptionnels, jours fériés calculés.',
        'Badgeage pensé comme une suite d’états (on ne peut pas arriver deux fois), borne d’entrée avec matricule et code PIN.',
        'En 2026 : reprise du code, tests, requêtes préparées et sécurité renforcée, installation comme une application (PWA).',
      ],
      result: 'Une application complète sans aucun framework, testable à n’importe quelle date, qui détecte retards, départs anticipés et badges oubliés.',
    },
    learned:
      'Le plus dur n’était pas le code, mais de comprendre les décrets avant de l’écrire. Relire mon code de 2021 cinq ans après m’a aussi montré tout le chemin parcouru.',
  },
  {
    slug: 'novawatt',
    title: 'NovaWatt Analytics',
    hook: 'Un fournisseur d’électricité verte gagne des clients. Mais gagne-t-il de l’argent avec ?',
    kind: 'Projet perso',
    year: '2026',
    domain: 'data',
    status: { label: 'En cours · étape 1 sur 6', done: false },
    summary:
      'Un outil d’analyse pour un fournisseur d’électricité fictif : MRR, cohortes, CAC, churn et marge par client, calculée avec les vrais prix et le vrai taux de CO₂ français, heure par heure.',
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit', 'API RTE éCO2mix', 'Open-Meteo', 'GitHub Actions'],
    repo: gh('projet2'),
    flow: ['API RTE + Open-Meteo', 'JSON brut', 'DuckDB', 'dbt', 'Dashboard Streamlit'],
    star: {
      situation: 'Croissance ne veut pas dire rentabilité. Je voulais un cas réaliste où il faut croiser données métier et données énergétiques.',
      task: 'Construire la chaîne complète, de l’API au tableau de bord, avec des indicateurs définis avant d’être codés.',
      action: [
        'Ingestion des données réelles RTE (consommation, production, CO₂ toutes les 30 min) et météo de 8 villes, stockées brutes puis chargées dans DuckDB.',
        'Règles de gestion écrites avant le code (client actif, churn, MRR, CAC, bouclage du MRR), chacune destinée à devenir un test dbt.',
        'Tests et intégration continue dès la première étape.',
      ],
      result: 'L’ingestion est faite et testée. Prochaines étapes : générateur de clients, modèles dbt, indicateurs, dashboard et note de synthèse.',
    },
    learned:
      'Définir un indicateur est plus difficile que le calculer. Écrire « qu’est-ce qu’un client actif ? » noir sur blanc avant de coder m’a évité beaucoup de débats avec moi-même.',
  },
  {
    slug: 'velib-pipeline',
    title: 'Vélib’ Pipeline',
    hook: 'Combien de vélos reste-t-il à la station ? Un pipeline pour le savoir, et le garder en mémoire.',
    kind: 'Projet perso',
    year: '2026',
    domain: 'data',
    status: { label: 'En cours · ingestion faite', done: false },
    summary:
      'Un pipeline qui récupère en continu la disponibilité des Vélib’ à Paris depuis l’API open data et la stocke dans PostgreSQL, pour l’analyser ensuite.',
    stack: ['Python', 'PostgreSQL', 'Docker', 'pytest'],
    repo: gh('Projet1'),
    flow: ['API open data Vélib’', 'JSON brut (schéma raw)', 'PostgreSQL', 'dbt (à venir)', 'Dashboard (à venir)'],
    star: {
      situation: 'Je voulais apprendre à monter un pipeline de données de A à Z sur des données qui bougent vraiment.',
      task: 'Collecter l’état des stations sans doublons ni perte quand l’API flanche.',
      action: [
        'Appels aux endpoints station_information et station_status, avec trois tentatives en cas d’échec.',
        'Stockage brut en JSON, clé primaire sur station et heure de mise à jour pour ne pas réinsérer une station inchangée.',
        'Tests sur une API simulée, base PostgreSQL lancée avec Docker.',
      ],
      result: 'Une ingestion fiable et rejouable. La suite : transformations dbt, planification et petit dashboard.',
    },
    learned: 'Garder la donnée brute avant de la transformer, c’est pouvoir se tromper sans tout retélécharger.',
  },
  {
    slug: 'prix-des-maisons',
    title: 'Prix des maisons',
    hook: 'À partir de la taille du terrain, des chambres ou de la clim, deviner le prix d’une maison.',
    kind: 'Projet d’études',
    year: '2026',
    domain: 'ia',
    status: { label: 'Terminé', done: true },
    summary:
      'Une régression linéaire sur 546 ventes de maisons à Windsor (Canada) : exploration en notebooks, puis code remis au propre en modules.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
    repo: gh('Projet8'),
    flow: ['546 maisons (CSV)', 'Nettoyage, oui/non → 1/0', 'Entraînement 80 %', 'Test 20 %', 'R² et erreur'],
    star: {
      situation: 'Projet d’ING2 pour pratiquer la régression linéaire sur un vrai jeu de données.',
      task: 'Prédire le prix de vente et comprendre le poids de chaque caractéristique.',
      action: [
        'Exploration et visualisation dans des notebooks.',
        'Code réorganisé en modules (chargement, préparation, modèle, évaluation, graphiques) lancés par un seul script.',
        'Évaluation sur 20 % de maisons jamais vues par le modèle.',
      ],
      result: 'R² d’environ 0,62 et une erreur moyenne autour de 16 000 $ : correct pour un modèle linéaire sans réglage, avec des pistes claires pour faire mieux.',
    },
    learned:
      'Un R² de 0,62, ce n’est ni bien ni mal tant qu’on ne sait pas l’expliquer. Je préfère un résultat moyen bien compris qu’un bon score que je ne saurais pas défendre.',
    next: ['Passer le prix en log', 'Normaliser les variables', 'Comparer avec Ridge et Random Forest'],
  },
  {
    slug: 'takuzu',
    title: 'Takuzu',
    hook: 'Un jeu de logique écrit en C, avec un solveur automatique. Il tourne dans votre navigateur.',
    kind: 'Projet d’études',
    year: '2023',
    domain: 'logiciel',
    status: { label: 'Jouable en ligne', done: true },
    team: 'À trois, en Licence Informatique.',
    summary:
      'Le jeu Takuzu (ou Binairo) en C : bibliothèque de jeu, version terminal, solveur qui compte les solutions, interface SDL2 et version navigateur en WebAssembly.',
    stack: ['C', 'CMake', 'SDL2', 'WebAssembly (Emscripten)', 'Tests unitaires'],
    repo: gh('projet5'),
    demo: { label: 'Jouer une partie', href: 'demos/takuzu/jouer.html' },
    flow: ['Moteur du jeu en C', 'Version terminal', 'Solveur', 'Interface SDL2', 'WebAssembly'],
    star: {
      situation: 'Projet de Licence : construire un jeu complet, étape par étape, en équipe.',
      task: 'Écrire une bibliothèque de jeu solide, puis plusieurs façons de jouer autour d’elle.',
      action: [
        'Moteur en C : grilles de toute taille, mode où la grille boucle sur ses bords, annuler / rétablir.',
        'Solveur capable de trouver une solution ou de compter toutes les solutions d’une grille.',
        'Interface graphique SDL2, puis compilation en WebAssembly pour jouer dans le navigateur.',
      ],
      result: 'Un jeu jouable de trois façons, couvert par des tests unitaires sur chaque fonction.',
    },
    learned: 'Le C ne pardonne rien. Gérer la mémoire à la main m’a appris à lire mon propre code avec méfiance, et ça me sert encore en Python.',
  },
];

export const experience = [
  {
    title: 'Gestionnaire de sinistres',
    org: 'GMF, Generali et Allianz',
    period: 'Étés 2025 et 2026',
    note: 'Dossiers sinistres pour plusieurs compagnies, demandes clients au téléphone, procédures suivies à la lettre.',
  },
  {
    title: 'Animateur dégustation',
    org: 'Château Lafite Rothschild, Pauillac',
    period: 'Avril – mai 2026',
    note: 'Dégustations et conseil auprès d’une clientèle exigeante.',
  },
  {
    title: 'Animateur commercial',
    org: 'Plantes pour tous',
    period: 'Depuis décembre 2023',
    note: 'Ventes sur des événements partout en France et conseil client.',
  },
  {
    title: 'Stagiaire développeur web et bases de données',
    org: 'Direction provinciale de l’équipement, Bouarfa (Maroc)',
    period: 'Avril – juillet 2021',
    note: 'Application web de gestion du personnel et automatisation des demandes de congés.',
  },
];

export const education = [
  { title: 'Cycle ingénieur, majeure Big Data & Machine Learning', org: 'Efrei Bordeaux', period: 'Depuis septembre 2026' },
  { title: 'Licence Informatique', org: 'Université de Bordeaux', period: '2022 – 2026' },
  { title: 'DUT Développement d’applications informatiques', org: 'École supérieure de technologie, Oujda (Maroc)', period: '2019 – 2021' },
];

export const languages = [
  { name: 'Arabe', level: 'langue maternelle' },
  { name: 'Français', level: 'courant' },
  { name: 'Anglais', level: 'courant' },
];
