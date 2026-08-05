const root = document.querySelector("#portfolio-root");

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const arrowIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6"></path>
  </svg>`;

const downloadIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"></path>
  </svg>`;

const renderProject = (project, index) => `
  <article class="project-card">
    <div class="project-topline">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <span>${escapeHtml(project.status)}</span>
    </div>
    <p class="project-category">${escapeHtml(project.category)}</p>
    <h3>${escapeHtml(project.title)}</h3>
    <p class="project-summary">${escapeHtml(project.summary)}</p>
    <ul class="tag-list" aria-label="Tecnologías y áreas">
      ${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
    </ul>
  </article>`;

const renderContact = ({ label, value, prefix = "" }) => {
  if (!value) {
    return `
      <div class="contact-link contact-placeholder">
        <span>${escapeHtml(label)}</span>
        <strong>Enlace por agregar</strong>
        <span class="placeholder-mark">+</span>
      </div>`;
  }

  const newTab = label === "Correo" ? "" : ' target="_blank" rel="noreferrer"';
  return `
    <a class="contact-link" href="${escapeHtml(prefix + value)}"${newTab}>
      <span>${escapeHtml(label)}</span>
      <strong>Visitar perfil</strong>
      ${arrowIcon}
    </a>`;
};

const renderPortfolio = (data) => {
  const { profile, about, projects, journey, skills } = data;
  const contacts = [
    { label: "Correo", value: profile.contacts.email, prefix: "mailto:" },
    { label: "WhatsApp", value: profile.contacts.whatsapp, prefix: "https://wa.me/" },
    { label: "LinkedIn", value: profile.contacts.linkedin },
    { label: "GitHub", value: profile.contacts.github },
  ];

  document.title = `${profile.name} | Portafolio profesional`;
  root.innerHTML = `
    <a class="skip-link" href="#contenido">Ir al contenido</a>

    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Volver al inicio">
        <span class="brand-mark">RG</span>
        <span class="brand-name">${escapeHtml(profile.name)}</span>
      </a>
      <nav class="desktop-nav" aria-label="Navegación principal">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a class="nav-cta" href="#contacto">Hablemos ${arrowIcon}</a>
    </header>

    <section class="hero section-shell" id="inicio">
      <div class="hero-copy" id="contenido">
        <p class="eyebrow"><span class="status-dot"></span> ${escapeHtml(profile.availability)}</p>
        <h1>Ingeniería que convierte<span>ideas en soluciones.</span></h1>
        <p class="hero-intro">${escapeHtml(profile.intro)}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#proyectos">Ver mis proyectos ${arrowIcon}</a>
          <a class="button button-secondary" href="./public/${escapeHtml(profile.cvFile)}">${downloadIcon} Descargar CV</a>
        </div>
        <dl class="hero-facts">
          ${profile.facts
            .map(
              (fact) => `<div><dt>${escapeHtml(fact.label)}</dt><dd>${escapeHtml(fact.value)}</dd></div>`,
            )
            .join("")}
        </dl>
      </div>

      <div class="hero-visual" aria-label="Presentación visual de ${escapeHtml(profile.name)}">
        <div class="blueprint-card">
          <span class="drawing-label label-top">PORTFOLIO / 2026</span>
          <span class="drawing-label label-side">COLÓN — PANAMÁ</span>
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          ${
            profile.photo
              ? `<img class="profile-photo" src="./public/${escapeHtml(profile.photo)}" alt="Retrato de ${escapeHtml(profile.name)}" />`
              : '<div class="monogram">RG</div>'
          }
          <div class="axis axis-x"></div>
          <div class="axis axis-y"></div>
          <span class="coordinate coordinate-a">A.01</span>
          <span class="coordinate coordinate-b">B.04</span>
        </div>
      </div>
    </section>

    <section class="about section-shell" id="sobre-mi">
      <div class="section-heading">
        <p class="section-number">01 / SOBRE MÍ</p>
        <h2>${escapeHtml(about.title)}</h2>
      </div>
      <div class="about-body">
        <p class="lead-copy">${escapeHtml(about.lead)}</p>
        <p>${escapeHtml(about.detail)}</p>
        <div class="focus-grid">
          ${about.focus
            .map(
              (item) => `
                <article class="focus-card">
                  <span>${escapeHtml(item.number)}</span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.description)}</p>
                </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="projects section-shell" id="proyectos">
      <div class="section-heading projects-heading">
        <div>
          <p class="section-number">02 / TRABAJO SELECCIONADO</p>
          <h2>Proyectos con propósito.</h2>
        </div>
        <p>Una selección de iniciativas donde combino ingeniería, investigación y herramientas digitales.</p>
      </div>
      <div class="project-grid">${projects.map(renderProject).join("")}</div>
    </section>

    <section class="journey section-shell" id="trayectoria">
      <div class="section-heading">
        <p class="section-number">03 / TRAYECTORIA</p>
        <h2>Aprender, aplicar y seguir mejorando.</h2>
      </div>
      <div class="timeline">
        ${journey
          .map(
            (item, index) => `
              <article class="timeline-item">
                <span class="timeline-index">0${index + 1}</span>
                <div>
                  <p class="timeline-period">${escapeHtml(item.period)}</p>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p class="timeline-place">${escapeHtml(item.place)}</p>
                </div>
                <p class="timeline-description">${escapeHtml(item.description)}</p>
              </article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="skills-section section-shell" id="habilidades">
      <div class="skills-copy">
        <p class="section-number">04 / CAPACIDADES</p>
        <h2>Una base técnica que conecta disciplinas.</h2>
        <p>Competencias construidas entre la formación académica, la práctica industrial y el desarrollo de proyectos propios.</p>
      </div>
      <ul class="skills-list" aria-label="Habilidades y conocimientos">
        ${skills
          .map(
            (skill, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(skill)}</li>`,
          )
          .join("")}
      </ul>
    </section>

    <section class="contact section-shell" id="contacto">
      <div class="contact-copy">
        <p class="section-number">05 / CONTACTO</p>
        <h2>Construyamos algo que funcione.</h2>
        <p>Estoy abierto a oportunidades laborales, colaboraciones y proyectos donde pueda aportar criterio técnico, disciplina y ganas de aprender.</p>
      </div>
      <div class="contact-panel">
        ${contacts.map(renderContact).join("")}
        <a class="contact-cv" href="./public/${escapeHtml(profile.cvFile)}">
          ${downloadIcon}
          <span><small>Documento</small>Descargar currículum</span>
        </a>
      </div>
    </section>

    <footer class="site-footer section-shell">
      <a class="brand" href="#inicio">
        <span class="brand-mark">RG</span>
        <span class="brand-name">${escapeHtml(profile.name)}</span>
      </a>
      <p>${escapeHtml(profile.role)}</p>
      <p>© 2026 · ${escapeHtml(profile.location)}</p>
    </footer>`;
};

try {
  const response = await fetch("./content/portfolio.json");
  if (!response.ok) throw new Error(`No se pudo cargar el contenido (${response.status})`);
  renderPortfolio(await response.json());
} catch (error) {
  console.error(error);
  root.innerHTML = `
    <section class="load-error">
      <p class="section-number">PORTAFOLIO</p>
      <h1>No se pudo cargar el contenido.</h1>
      <p>Revisa que el archivo <code>content/portfolio.json</code> esté disponible.</p>
    </section>`;
}
