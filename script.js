let homeBtn = document.querySelector(".home");
let aboutBtn = document.querySelector(".about");
let contactBtn = document.querySelector(".contact");
let projectBtn = document.querySelector(".project");
let skills = document.querySelector(".skills");
let experience = document.querySelector(".experience");
let education = document.querySelector(".education");
let skillsExpand = document.querySelector(".skills-expand");
let educationExpand = document.querySelector(".education-expand");
let experienceExpand = document.querySelector(".experience-expand");

homeBtn.addEventListener("click", () => {
  let targetHeight = 70;

  window.scrollTo({
    top: targetHeight,
    behavior: "smooth",
  });
});

aboutBtn.addEventListener("click", () => {
  let targetHeight = 700;

  window.scrollTo({
    top: targetHeight,
    behavior: "smooth",
  });
});

contactBtn.addEventListener("click", () => {
  let targetHeight = 1300;

  window.scrollTo({
    top: targetHeight,
    behavior: "smooth",
  });
});

experience.addEventListener("click", () => {
  educationExpand.style.display = "none";
  skillsExpand.style.display = "none";
  experienceExpand.style.display = "block";

  experience.style.textDecoration = "underline";
  skills.style.textDecoration = "none";
  education.style.textDecoration = "none";
});
education.addEventListener("click", () => {
  skillsExpand.style.display = "none";
  experienceExpand.style.display = "none";
  educationExpand.style.display = "block";

  experience.style.textDecoration = "none";
  skills.style.textDecoration = "none";
  education.style.textDecoration = "underline";
});
skills.addEventListener("click", () => {
  skillsExpand.style.display = "block";
  experienceExpand.style.display = "none";
  educationExpand.style.display = "none";

  experience.style.textDecoration = "none";
  skills.style.textDecoration = "underline";
  education.style.textDecoration = "none";
});
