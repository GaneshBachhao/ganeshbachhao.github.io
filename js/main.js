console.log("Portfolio Loaded");

const titles = [
  "Senior Full Stack Engineer",
  ".NET Backend Developer",
  "Senior .NET Developer",
  ".NET & Azure Specialist",
  "Cloud Solution Designer",
  "AI Solutions Engineer",
  ".NET Gen AI Developer",
  "Technology Lead",
  ".NET/Technology Architect",
];

let titleIndex = 0;

// const updateTitle = () => {
//   document.getElementById("dynamic-title").textContent = titles[titleIndex];
//   titleIndex = (titleIndex + 1) % titles.length;
// };

// updateTitle();
// setInterval(updateTitle, 2500);

setInterval(() => {
  document.getElementById("dynamic-title").innerText = titles[titleIndex];

  titleIndex++;

  if (titleIndex >= titles.length) titleIndex = 0;
}, 2500);
