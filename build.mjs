// ─────────────────────────────────────────────────────────────
//  Générateur du site : zéro dépendance, Node 22+.
//  Lit src/data/profile.ts et écrit le site statique dans dist/.
//    node --experimental-strip-types build.mjs
//  Tu n'as normalement rien à modifier ici : le contenu est dans profile.ts.
// ─────────────────────────────────────────────────────────────
import { cpSync, mkdirSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { profile, about, outside, skills, domains, projects, experience, education, languages } from './src/data/profile.ts';

// Adresse publique du site (pour Google, LinkedIn et le sitemap).
// Avec un domaine perso plus tard : SITE_URL = 'https://alae-naggaz.dev/'
const SITE_URL = process.env.SITE_URL ?? 'https://naggaz-alae.github.io/Portfolio/';
const OUT = 'dist';

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const abs = (path = '') => new URL(path, SITE_URL).href;
const isExternal = (href) => /^https?:\/\//.test(href);
const ext = 'target="_blank" rel="noopener"';

const status = (s) => `<span class="status ${s.done ? 'done' : 'wip'}">${esc(s.label)}</span>`;
const tags = (items, label = 'Technologies') =>
  `<ul class="tags" aria-label="${label}">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;
const flow = (steps, cls = '') =>
  `<ol class="flow ${cls}" aria-label="Le chemin des données, étape par étape">${steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>`;

const yearKey = (y) => Math.max(...String(y).match(/\d{4}/g).map(Number));
const ordered = [...projects].sort((a, b) => yearKey(b.year) - yearKey(a.year) || Number(!!b.featured) - Number(!!a.featured));

function layout({ r, title, description, path, type = 'website', body }) {
  const canonical = abs(path);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    url: SITE_URL,
    image: abs('alae.jpg'),
    sameAs: [profile.github, profile.linkedin].filter(Boolean),
    alumniOf: ['Université de Bordeaux', 'Efrei'],
    knowsAbout: ['Data Analysis', 'Machine Learning', 'Data Engineering', 'RAG', 'Computer Vision', 'Python', 'SQL'],
  };
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="author" content="${esc(profile.name)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" type="image/svg+xml" href="${r}favicon.svg">
<meta name="theme-color" content="#eef1f3" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#10161b" media="(prefers-color-scheme: dark)">
<meta property="og:type" content="${type}">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="${esc(profile.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${abs('og-image.png')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(`${profile.name}, ${profile.role}`)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Schibsted+Grotesk:wght@400..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${r}style.css">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
${profile.goatcounter ? `<script data-goatcounter="https://${profile.goatcounter}.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>` : ''}
</head>
<body>
<a class="skip" href="#contenu">Aller au contenu</a>
<header class="site-header">
  <nav class="wrap nav" aria-label="Navigation principale">
    <a class="brand" href="${r}index.html">Alae Naggaz<span>.</span></a>
    <ul>
      <li><a href="${r}index.html#projets">Projets</a></li>
      <li class="hide-sm"><a href="${r}index.html#parcours">Parcours</a></li>
      <li class="hide-sm"><a href="${r}index.html#a-propos">À propos</a></li>
      <li><a class="nav-cta" href="${r}index.html#contact">Me contacter</a></li>
    </ul>
  </nav>
</header>
<main id="contenu">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <span>© ${new Date().getFullYear()} ${esc(profile.name)}</span>
    <span>Site fait main, sans framework, hébergé sur GitHub Pages.</span>
  </div>
</footer>
</body>
</html>
`;
}

// ── Accueil ───────────────────────────────────────────────
function home() {
  const r = '';
  const featured = projects.filter((p) => p.featured);
  const featureHtml = featured
    .map(
      (p) => `
    <article class="feature">
      <div>
        <div class="meta"><span>${esc(p.kind)}, ${esc(p.year)}</span>${status(p.status)}</div>
        <h3><a href="projets/${p.slug}/index.html">${esc(p.title)}</a></h3>
        <p class="hook">${esc(p.hook)}</p>
        <p class="summary">${esc(p.summary)}</p>
        ${tags(p.stack)}
        <a class="read" href="projets/${p.slug}/index.html">Lire l’histoire du projet</a>
      </div>
      <div>
        <p class="flow-caption">Ce que devient la donnée</p>
        ${flow(p.flow)}
      </div>
    </article>`,
    )
    .join('');

  const rows = ordered
    .map(
      (p) => `
      <li data-domain="${p.domain}">
        <a class="row" href="projets/${p.slug}/index.html">
          <span class="year">${esc(p.year)}</span>
          <div><h3>${esc(p.title)}</h3><p class="hook">${esc(p.hook)}</p></div>
          <div>${status(p.status)}</div>
        </a>
      </li>`,
    )
    .join('');

  const filters = [{ id: 'all', label: `Tout (${projects.length})` }, ...domains.map((d) => ({ ...d, label: `${d.label} (${projects.filter((p) => p.domain === d.id).length})` }))]
    .map((d, i) => `<button type="button" data-filter="${d.id}" aria-pressed="${i === 0}">${esc(d.label)}</button>`)
    .join('');

  const body = `
<section class="hero" aria-labelledby="hello">
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <span class="available"><i aria-hidden="true"></i>Disponible pour une alternance dès septembre 2026</span>
        <h1 id="hello">${esc(profile.hello)}</h1>
        <p class="pitch">${esc(profile.pitch)}</p>
        <p class="seeking">Je cherche une alternance de 24 mois comme <strong>${esc(profile.roles.slice(0, -1).join(', '))} ou ${esc(profile.roles.at(-1))}</strong>, à partir de septembre 2026. Je suis en cycle ingénieur à l’${esc(profile.school)}, majeure Big Data &amp; Machine Learning.</p>
        <div class="actions">
          <a class="btn" href="#projets">Voir mes projets</a>
          <a class="btn ghost" href="mailto:${profile.email}?subject=Alternance%20data">M’écrire</a>
          ${profile.cv ? `<a class="btn ghost" href="${r}${profile.cv.replace(/^\//, '')}" download>Télécharger mon CV</a>` : ''}
        </div>
      </div>
      <figure class="portrait">
        <img src="alae.jpg" alt="Portrait d’Alae-eddine Naggaz" width="269" height="269">
        <div class="note"><b>En ce moment</b><p>${esc(profile.now.replace(/^En ce moment, /, ''))}</p></div>
      </figure>
    </div>
    <dl class="facts">
      <div><dt>Contrat</dt><dd>Alternance de 24 mois</dd></div>
      <div><dt>Rythme</dt><dd>${esc(profile.rhythm)}</dd></div>
      <div><dt>Où</dt><dd>${esc(profile.location)}</dd></div>
    </dl>
  </div>
</section>

<section id="projets" class="tint" aria-labelledby="projets-title">
  <div class="wrap">
    <div class="section-head">
      <h2 id="projets-title">Trois projets dont je suis fier</h2>
      <p>Chacun part d’un vrai problème. À droite, le chemin que suit la donnée, de la source brute jusqu’à la réponse.</p>
    </div>
    <div class="featured">${featureHtml}
    </div>
  </div>
</section>

<section id="tous" aria-labelledby="tous-title">
  <div class="wrap">
    <div class="section-head">
      <h2 id="tous-title">Tout ce que j’ai construit</h2>
      <p>De mon premier stage en 2021 au projet d’hier. Le code de chacun est sur GitHub, et je dis honnêtement où en sont ceux qui ne sont pas finis.</p>
    </div>
    <div class="filters" role="group" aria-label="Filtrer les projets">${filters}</div>
    <ul class="list" id="liste">${rows}
    </ul>
  </div>
</section>

<section id="competences" class="tint" aria-labelledby="competences-title">
  <div class="wrap">
    <div class="section-head">
      <h2 id="competences-title">Mes outils</h2>
      <p>Ceux que j’ai réellement utilisés dans les projets ci-dessus, et ceux vus en cours.</p>
    </div>
    <div class="skills">
      ${skills.map((s) => `<div><h3>${esc(s.group)}</h3>${tags(s.items, s.group)}</div>`).join('')}
    </div>
  </div>
</section>

<section id="parcours" aria-labelledby="parcours-title">
  <div class="wrap">
    <div class="section-head"><h2 id="parcours-title">Mon parcours</h2></div>
    <div class="two">
      <div>
        <h3>Études</h3>
        <ol class="timeline">
          ${education.map((e, i) => `<li${i === 0 ? ' class="now"' : ''}><span class="when">${esc(e.period)}</span><h4>${esc(e.title)}</h4><p class="org">${esc(e.org)}</p></li>`).join('')}
        </ol>
        <h3>Langues</h3>
        <ul class="langs">${languages.map((l) => `<li><b>${esc(l.name)}</b>, ${esc(l.level)}</li>`).join('')}</ul>
      </div>
      <div>
        <h3>Expériences</h3>
        <ol class="timeline">
          ${experience.map((e) => `<li><span class="when">${esc(e.period)}</span><h4>${esc(e.title)}</h4><p class="org">${esc(e.org)}</p><p class="what">${esc(e.note)}</p></li>`).join('')}
        </ol>
      </div>
    </div>
  </div>
</section>

<section id="a-propos" class="tint" aria-labelledby="about-title">
  <div class="wrap about">
    <div>
      <div class="section-head"><h2 id="about-title">Du papier à la donnée</h2></div>
      <div class="story">${about.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
    </div>
    <aside>
      <div class="aside-card"><h3>Ce que j’apporte à une équipe</h3><p>La rigueur des procédures (on ne plaisante pas avec un dossier sinistre), l’habitude d’expliquer simplement, et l’envie de finir ce que je commence.</p></div>
      <div class="aside-card"><h3>Hors écran</h3><p>${esc(outside.replace(/^Hors écran : /, ''))}</p></div>
    </aside>
  </div>
</section>

<section id="contact" class="contact" aria-labelledby="contact-title">
  <div class="wrap">
    <div class="section-head">
      <h2 id="contact-title">On en parle ?</h2>
      <p>Vous cherchez un alternant data pour septembre 2026 ? Un échange de 15 minutes suffit pour voir si mon profil correspond à votre équipe. Je réponds sous 24 heures.</p>
    </div>
    <a class="mail" href="mailto:${profile.email}?subject=Alternance%20data">${esc(profile.email)}</a>
    <div class="actions">
      <button class="btn" type="button" id="copy" data-email="${esc(profile.email)}">Copier l’adresse</button>
      <a class="btn ghost" href="${profile.github}" target="_blank" rel="me noopener">Mon GitHub</a>
      ${profile.linkedin ? `<a class="btn ghost" href="${profile.linkedin}" target="_blank" rel="me noopener">Mon LinkedIn</a>` : ''}
    </div>
  </div>
</section>

<script>
  (function () {
    var buttons = document.querySelectorAll('[data-filter]');
    var items = document.querySelectorAll('#liste [data-domain]');
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        buttons.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        items.forEach(function (li) { li.hidden = b.dataset.filter !== 'all' && li.dataset.domain !== b.dataset.filter; });
      });
    });
    var copy = document.getElementById('copy');
    copy.addEventListener('click', function () {
      var done = function () { copy.textContent = 'Adresse copiée'; setTimeout(function () { copy.textContent = 'Copier l’adresse'; }, 2000); };
      try { navigator.clipboard.writeText(copy.dataset.email).then(done, function () { copy.textContent = copy.dataset.email; }); }
      catch (e) { copy.textContent = copy.dataset.email; }
    });
  })();
</script>`;

  return layout({
    r,
    path: '',
    title: `${profile.name} · Alternance data (Analyst, Scientist, Engineer)`,
    description: `${profile.role} à l’${profile.school}. ${profile.seeking} Projets : RAG, computer vision, pipelines de données.`,
    body,
  });
}

// ── Page projet ───────────────────────────────────────────
function caseStudy(p, i) {
  const r = '../../';
  const prev = ordered[(i - 1 + ordered.length) % ordered.length];
  const next = ordered[(i + 1) % ordered.length];
  const demoIsLocal = p.demo && !isExternal(p.demo.href);
  const demoHref = p.demo ? (demoIsLocal ? r + p.demo.href : p.demo.href) : '';

  const media = demoIsLocal
    ? `<div class="play"><iframe src="${demoHref}" title="${esc(p.title)} : version jouable" loading="lazy"></iframe></div>`
    : p.image
      ? `<figure class="shot"><img src="${r}${p.image.src}" alt="${esc(p.image.alt)}" loading="lazy"><figcaption>${esc(p.image.alt)}</figcaption></figure>`
      : '';

  const body = `
<section class="case-hero" aria-labelledby="titre">
  <div class="wrap">
    <a class="back" href="${r}index.html#tous">Tous les projets</a>
    <div class="meta"><span>${esc(p.kind)}, ${esc(p.year)}</span>${status(p.status)}</div>
    <h1 id="titre">${esc(p.title)}</h1>
    <p class="hook">${esc(p.hook)}</p>
    ${p.team ? `<p class="team">${esc(p.team)}</p>` : ''}
    ${tags(p.stack)}
    <div class="actions">
      <a class="btn" href="${p.repo}" ${ext}>Voir le code sur GitHub</a>
      ${p.demo ? `<a class="btn ghost" href="${demoHref}" ${demoIsLocal ? '' : ext}>${esc(p.demo.label)}</a>` : ''}
    </div>
  </div>
</section>

<section class="tint" style="padding-block:clamp(32px,5vw,56px)" aria-label="Le chemin des données">
  <div class="wrap">
    <p class="flow-caption">Ce que devient la donnée</p>
    ${flow(p.flow, 'horizontal')}
  </div>
</section>

<section style="padding-top:clamp(40px,6vw,72px)">
  <div class="wrap">
    ${media ? `<div style="margin-bottom:clamp(40px,6vw,64px)">${media}</div>` : ''}
    <div class="star">
      <div><h2>Le point de départ<small>Situation</small></h2><p>${esc(p.star.situation)}</p></div>
      <div><h2>Ce que je voulais faire<small>Tâche</small></h2><p>${esc(p.star.task)}</p></div>
      <div><h2>Ce que j’ai fait<small>Actions</small></h2><ul>${p.star.action.map((a) => `<li>${esc(a)}</li>`).join('')}</ul></div>
      <div><h2>Le résultat<small>Résultat</small></h2><p>${esc(p.star.result)}</p></div>
    </div>

    <div class="lesson">
      <img src="${r}alae.jpg" alt="" width="64" height="64">
      <div><b>Ce que j’en retiens</b><p>${esc(p.learned)}</p></div>
    </div>

    ${p.next?.length ? `<div class="next-steps"><h2>Et ensuite</h2><ul>${p.next.map((n) => `<li>${esc(n)}</li>`).join('')}</ul></div>` : ''}

    <nav class="pager" aria-label="Autres projets">
      <a href="${r}projets/${prev.slug}/index.html"><span>Projet précédent</span><strong>${esc(prev.title)}</strong></a>
      <a class="next" href="${r}projets/${next.slug}/index.html"><span>Projet suivant</span><strong>${esc(next.title)}</strong></a>
    </nav>
  </div>
</section>`;

  return layout({
    r,
    path: `projets/${p.slug}/`,
    type: 'article',
    title: `${p.title} · ${profile.name}`,
    description: `${p.hook} ${p.summary}`.slice(0, 300),
    body,
  });
}

function notFound() {
  return layout({
    r: SITE_URL,
    path: '404.html',
    title: `Page introuvable · ${profile.name}`,
    description: 'Cette page n’existe pas.',
    body: `<section class="case-hero"><div class="wrap"><h1>Cette page n’existe pas.</h1><p class="hook">Le lien est peut-être ancien. Les projets, eux, sont toujours là.</p><div class="actions"><a class="btn" href="${SITE_URL}">Revenir à l’accueil</a></div></div></section>`,
  });
}

// ── Écriture ──────────────────────────────────────────────
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('public', OUT, { recursive: true });
writeFileSync(`${OUT}/style.css`, readFileSync('src/styles/global.css'));
writeFileSync(`${OUT}/index.html`, home());
writeFileSync(`${OUT}/404.html`, notFound());
ordered.forEach((p, i) => {
  mkdirSync(`${OUT}/projets/${p.slug}`, { recursive: true });
  writeFileSync(`${OUT}/projets/${p.slug}/index.html`, caseStudy(p, i));
});
const urls = ['', ...ordered.map((p) => `projets/${p.slug}/`)];
writeFileSync(
  `${OUT}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${abs(u)}</loc></url>`).join('\n')}\n</urlset>\n`,
);
writeFileSync(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${abs('sitemap.xml')}\n`);
console.log(`Site généré dans ${OUT}/ : ${urls.length} pages.`);
