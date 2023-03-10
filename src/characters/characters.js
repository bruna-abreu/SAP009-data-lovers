import { searchCharacter, filmPeople } from "../data.js"

import data from "../data/ghibli/ghibli.js";

const films = data.films;
const characters = document.getElementById("charactersCards");
const characterSearch = document.getElementById("characters-search");
const btnFilms = document.querySelectorAll(".btn-film");
const stats = document.querySelector(".stats");

function showingCharactersCards(characters) {
  const people = characters.map((person) => {
    const allPeople = `
    <div id="container">
      <div id="card">
      <div id="frontCard" class="characters">
        <img id="characterImg" alt="Character poster" src="${person.img}"/>
        <div id="charactersName">
          <p class="charactersTitle">${person.name}</p>
        </div>
     </div>
      <div id="backCard" class="characters">
        <ul style="list-style: none;">
          <li id="gender"><strong>Gender:</strong> ${person.gender}</strong>
          <li id="age"><strong>Age:</strong> ${person.age}</strong>
          <li id="eye_color"><strong>Eye color:</strong> ${person.eye_color}</strong>
          <li id="hair_color"><strong>Hair color:</strong> ${person.hair_color}</strong>
          <li id="specie"><strong>Specie:</strong> ${person.specie}</strong>
        </ul> 
     </div>
     </div>
     </div>
    `;
    return allPeople;
  });
  return people.join("");
}

characterSearch.addEventListener("input", (event) => {
  const searchedName = event.target.value.toLowerCase();
  const filteredName = searchCharacter(films, searchedName);
  const card = showingCharactersCards(filteredName);
  characters.innerHTML = card;
});

const clean = document.getElementById("clean");
clean.addEventListener("click", function refresh() {
  window.location.reload();
});

for (let i = 0; i < btnFilms.length; i++) {
  btnFilms[i].addEventListener("click", () => {
    const people = filmPeople(films, btnFilms[i].value);
    const cards = showingCharactersCards(people);
    characters.innerHTML = cards;

    const message = `${people.length} characters help tell this story!`;
    stats.innerHTML = message;
  });
}
