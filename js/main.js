// ~~~~~~~~~~~~~~~~~ Dark mode on of section ~~~~~~~~~~~~~~~~~~~~~~~ //

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme_btn");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}
themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});
function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

// ~~~~~~~~~~~~~~~~~ scroll up section ~~~~~~~~~~~~~~~~~~~~~~~ //

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (window.scrollY >= 100) {
    scrollUpBtn.classList.add("bottom-5");
    scrollUpBtn.classList.remove("-bottom-60");
  } else {
    scrollUpBtn.classList.add("-bottom-60");
    scrollUpBtn.classList.remove("bottom-5");
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollUpBtn = document.getElementById("scroll-up");
scrollUpBtn.addEventListener('click', scrollToTop);

window.addEventListener('scroll', scrollUp);