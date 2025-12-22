// 1. Modify title dynamically
const title = document.getElementById("mainTitle");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  title.textContent = "Welcome to My Interactive Portfolio :)";
});

// 2. Change background color
const bgColorBtn = document.getElementById("bgColorBtn");

bgColorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#64a2bfff";
});

// 3. Add new project dynamically
const addProjectBtn = document.getElementById("addProjectBtn");
const projectsSection = document.getElementById("projects");

addProjectBtn.addEventListener("click", function () {
  const newProject = document.createElement("div");
  newProject.className = "project";
  newProject.textContent = "New Project Added ✨";

  projectsSection.appendChild(newProject);
});

// 4. Hover effect using event listener
title.addEventListener("mouseover", function () {
  title.style.color = "blue";
});

title.addEventListener("mouseout", function () {
  title.style.color = "black";
});
