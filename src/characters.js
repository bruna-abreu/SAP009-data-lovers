import {searchCharacter} from './data.js'; 

import data from './data/ghibli/ghibli.js';

const films = data.films
const characters = document.getElementById('charactersCards')
const characterSearch = document.getElementById('characters-search')


function showingCharactersCards(films) {
  const listOfPeople = films.map((film) => {
    const people = film.people.map((person) => {
      const allPeople = 
    `
    <div id="container">
    <div id="card">


     <div id="frontCard" class="characters">
     <img id="characterImg" alt="Character poster" src="${person.img}"/>
     <div id="charactersName">
     <p class="charactersTitle">${person.name}</p>
     <p class="charactersMovie">(${film.title})</p>
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
    `
      return allPeople
    });
    return people.join('');
  })
  return listOfPeople.join('');
}

characters.innerHTML = showingCharactersCards(films) 

//Função para buscar o personagem pelo nome  --- TRABALHAR DEPOIS
characterSearch.addEventListener ('input', event => {
  const searchedName = event.target.value.toLowerCase()
  const filteredName = searchCharacter(films, searchedName)
  const card = showingCharactersCards(filteredName)
  characters.innerHTML = card


  console.log(filteredName)
})