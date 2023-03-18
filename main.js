import data from "./monster.json" assert { type: "json" };

const monsterCardTemplate = document.querySelector("[data-monster-template]");
const monsterCardContainer = document.querySelector("[monster-card-container");
const searchInput = document.querySelector("[data-search]");

let monsters = [];

monsters = data.map((monster) => {
  const card = monsterCardTemplate.content.cloneNode(true).children[0];
  const image = card.querySelector("[data-image]");
  const name = card.querySelector("[data-name]");
  const stats = card.querySelector("[data-stats]");
  name.textContent = monster["name"];
  stats.textContent = monster["Hit Points"];
  image.src = monster["img_url"];
  monsterCardContainer.append(card);
  return { name: monster.name, stats: monster.stats, element: card };
});
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  monsters.forEach((monster) => {
    const isVisible = monster.name.toLowerCase().includes(value);
    monster.element.classList.toggle("hide", !isVisible);
  });
});
