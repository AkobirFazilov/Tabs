let content = document.querySelector(".content");
let firstTab = document.querySelector(".first");
let secondTab = document.querySelector(".second");
let thirdTab = document.querySelector(".third");
let fourthTab = document.querySelector(".fourth");

firstTab.addEventListener("click", () => {
  firstTab.style.borderBottom = "2px solid black";
  firstTab.style.color = "black";
  content.innerHTML = "First Tab content to be displayed here.";
  secondTab.style.borderBottom = "none";
  thirdTab.style.borderBottom = "none";
  fourthTab.style.borderBottom = "none";
  secondTab.style.color = "rgb(168, 161, 161)";
  thirdTab.style.color = "rgb(168, 161, 161)";
  fourthTab.style.color = "rgb(168, 161, 161)";
});

secondTab.addEventListener("click", () => {
  secondTab.style.borderBottom = "2px solid black";
  secondTab.style.color = "black";
  content.innerHTML = "Second Tab content to be displayed here.";
  firstTab.style.borderBottom = "none";
  thirdTab.style.borderBottom = "none";
  fourthTab.style.borderBottom = "none";
  firstTab.style.color = "rgb(168, 161, 161)";
  thirdTab.style.color = "rgb(168, 161, 161)";
  fourthTab.style.color = "rgb(168, 161, 161)";
});

thirdTab.addEventListener("click", () => {
  thirdTab.style.borderBottom = "2px solid black";
  thirdTab.style.color = "black";
  content.innerHTML = "Third Tab content to be displayed here.";
  firstTab.style.borderBottom = "none";
  secondTab.style.borderBottom = "none";
  fourthTab.style.borderBottom = "none";
  firstTab.style.color = "rgb(168, 161, 161)";
  secondTab.style.color = "rgb(168, 161, 161)";
  fourthTab.style.color = "rgb(168, 161, 161)";
});

fourthTab.addEventListener("click", () => {
  fourthTab.style.borderBottom = "2px solid black";
  fourthTab.style.color = "black";
  content.innerHTML = "Fourth Tab content to be displayed here.";
  firstTab.style.borderBottom = "none";
  secondTab.style.borderBottom = "none";
  thirdTab.style.borderBottom = "none";
  firstTab.style.color = "rgb(168, 161, 161)";
  secondTab.style.color = "rgb(168, 161, 161)";
  thirdTab.style.color = "rgb(168, 161, 161)";
});
