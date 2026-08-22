/*
 * Public profile and project URLs are kept here so they are easy to update.
 */
const links = {
  github: "https://github.com/reyquza?tab=repositories",
  chatGithub: "https://github.com/reyquza/2WIS_skill_test",
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const url = links[element.dataset.link];

  if (url) {
    element.href = url;
    element.target = "_blank";
    element.rel = "noreferrer";
    return;
  }

  element.setAttribute("aria-disabled", "true");
  element.setAttribute("title", "URL to be added");
  element.addEventListener("click", (event) => event.preventDefault());
});

document.querySelector("#year").textContent = new Date().getFullYear();
