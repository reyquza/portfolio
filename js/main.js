const content = window.portfolioContent;

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderList = (items = [], className = "") => {
  if (!items.length) return "";
  return `<ul${className ? ` class="${className}"` : ""}>${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
};

const renderProjectMedia = (project) => {
  if (project.video) {
    return `
      <div class="project-media">
        <video controls muted playsinline preload="metadata" aria-label="${escapeHtml(project.video.label)}">
          <source src="${escapeHtml(project.video.src)}" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>`;
  }

  if (project.images?.length) {
    return `
      <div class="project-gallery" aria-label="${escapeHtml(project.title)} outputs">
        ${project.images
          .map(
            (image) =>
              `<img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" />`,
          )
          .join("")}
      </div>`;
  }

  if (project.image) {
    return `
      <div class="project-media">
        <img src="${escapeHtml(project.image.src)}" alt="${escapeHtml(project.image.alt)}" loading="lazy" />
      </div>`;
  }

  return "";
};

const renderProjectFooter = (project) => {
  const links = (project.links ?? [])
    .map(
      (link) =>
        `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`,
    )
    .join("");

  const privateLabel = project.privateReason
    ? `<span class="private-label">Private repository</span><span class="private-reason">${escapeHtml(project.privateReason)}</span>`
    : "";

  if (!links && !privateLabel) return "";
  return `<div class="project-links">${links}${privateLabel}</div>`;
};

const renderExperience = () => {
  const target = document.querySelector("#experience-list");
  target.innerHTML = content.experience
    .map(
      (item) => `
        <article class="experience-item">
          <div class="experience-meta">
            <p class="experience-date">${escapeHtml(item.period)}</p>
            <span class="status">In progress</span>
          </div>
          <div>
            <h3>${escapeHtml(item.role)}</h3>
            <p class="experience-place">${escapeHtml(item.organization)}</p>
            ${renderList(item.points, "detail-list")}
          </div>
        </article>`,
    )
    .join("");
};

const renderProjects = () => {
  const target = document.querySelector("#projects-grid");
  target.innerHTML = content.projects
    .map(
      (project) => `
        <article class="project-card">
          ${renderProjectMedia(project)}
          <div class="project-content">
            <p class="project-type">${escapeHtml(project.type)}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.description)}</p>
            ${project.metrics ? `<p class="project-metrics">${escapeHtml(project.metrics)}</p>` : ""}
            ${project.note ? `<p class="project-note">${escapeHtml(project.note)}</p>` : ""}
            ${renderList(project.technologies, "tech-list")}
            ${renderProjectFooter(project)}
          </div>
        </article>`,
    )
    .join("");
};

const renderEducation = () => {
  const target = document.querySelector("#education-list");
  target.innerHTML = content.education
    .map(
      (item) => `
        <article class="education-item">
          <div class="education-meta">
            <p>${escapeHtml(item.period)}</p>
            ${item.status ? `<span class="status">${escapeHtml(item.status)}</span>` : ""}
          </div>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="education-place">${escapeHtml(item.organization)}</p>
            ${renderList(item.details, "detail-list")}
          </div>
        </article>`,
    )
    .join("");
};

const renderRecognition = () => {
  const target = document.querySelector("#recognition-grid");
  target.innerHTML = content.recognition
    .map(
      (item) => `
        <article class="recognition-card">
          <p class="recognition-date">${escapeHtml(item.date)}</p>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.description)}</p>
        </article>`,
    )
    .join("");
};

const renderSkills = () => {
  const target = document.querySelector("#skills-grid");
  target.innerHTML = content.skills
    .map(
      (group) => `
        <div class="skill-group">
          <h3>${escapeHtml(group.category)}</h3>
          <p>${group.items.map(escapeHtml).join(", ")}</p>
        </div>`,
    )
    .join("");
};

const applyProfileLinks = () => {
  document.querySelectorAll("[data-profile-link]").forEach((element) => {
    const url = content.profileLinks[element.dataset.profileLink];
    if (!url) {
      element.hidden = true;
      return;
    }
    element.hidden = false;
    element.href = url;
    element.target = "_blank";
    element.rel = "noreferrer";
  });
};

renderExperience();
renderProjects();
renderEducation();
renderRecognition();
renderSkills();
applyProfileLinks();

document.querySelector("#year").textContent = new Date().getFullYear();
