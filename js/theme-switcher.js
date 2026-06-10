const themeLink = document.getElementById("theme-style");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  themeLink.href = `css/${savedTheme}.css`;
}

function setTheme(themeName) {
  themeLink.href = `css/${themeName}.css`;

  localStorage.setItem("theme", themeName);
}
