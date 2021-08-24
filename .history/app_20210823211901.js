import data from "./data.js";
const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
// if length is 2, add copies of slides
let people = [...data];
if (data.length === 2) {
  people = [...data, ...data];
}
container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }
    if (data.length <= 1) {
      position = "active";
    }
    return `<article class="slide ${position}">
  <img src=${img} class="img" alt="${name}"/>
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
   ${text}
  </p>
  <p>Fonte: <a href="https://www.google.com/maps/place/Floripa+Surf+Club+Surf+School/@-27.5722772,-48.4276483,3a,75y/data=!3m7!1e2!3m5!1sAF1QipNeZv-e5wVZk1upf5xb2Mxlu2Z3TG-rbVS8ihxQ!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNeZv-e5wVZk1upf5xb2Mxlu2Z3TG-rbVS8ihxQ%3Dw150-h150-k-no-p!7i720!8i720!4m11!1m2!2m1!1sfloripa+surfclub!3m7!1s0x95273f5658129455:0xe63707f3e5b0a90b!8m2!3d-27.5722772!4d-48.4276483!9m1!1b1!15sChBmbG9yaXBhIHN1cmZjbHVikgENc3BvcnRzX3NjaG9vbA">Google Maps</a></p>
 </article>`;
  })
  .join("");

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};
nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
