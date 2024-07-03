// ~~~~~~~~~~~~~~~~~ Dark mode on of section ~~~~~~~~~~~~~~~~~~~~~~~ //

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme_btn");


let currentMode = localStorage.getItem("mode");


if (currentMode === "dark") {
  darkMode();
} else {
  lightMode();
}


themeBtn.addEventListener('click', (e) => {
  if (currentMode === "dark") {
    lightMode();
    currentMode = "light";
  } else {
    darkMode();
    currentMode = "dark";
  }
  localStorage.setItem("mode", currentMode);
})


function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
}


function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
}


// ~~~~~~~~~~~~~~~~~ scroll up section ~~~~~~~~~~~~~~~~~~~~~~~ //

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
 
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollUpBtn = document.getElementById("scroll-up");
scrollUpBtn.addEventListener('click', scrollToTop);

window.addEventListener('scroll', scrollUp);