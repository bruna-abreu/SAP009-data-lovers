//Funções dos filmes
//Função para buscar o filme pelo nome
export const searchBar = (title, searchedName) => {
  return title.filter(movie => movie.title.toLowerCase().includes(searchedName)); 
};

//Função para ordenar por A-Z/Z-A (a lógica de exibir de A-Z está no main.js)

export const sortByOrderFilms = (films) => {
  const filmsCopy = [...films]

  filmsCopy.sort((az, za) => {
    if (az.title > za.title) {
      return -1
    } 
  })
  return filmsCopy
}

//Função para ordenar por data de lançamento (a lógica exibir o mais antigo está no main.js)
export const sortByRelease = (films) => {
  const filmsCopy = [...films]

  filmsCopy.sort((oldest, recent) => {
    if (oldest.release_date > recent.release_date) {
      return -1
    }
  })
  return filmsCopy
}

//Função para filtrar por diretor
export const filters = (array, key, condition) =>
  array.filter((item) => item[key] === condition);


//Funções dos personagens

//Função para buscar o personagem pelo nome
export const searchCharacter = (films, searchedName) => {
  const filmsCopy = [...films]

  filmsCopy.forEach(film => {
    const search = film.people.filter(person => person.name.toLowerCase().includes(searchedName))
    film.people = search
  });
  return filmsCopy;
}

//Função para mostrar os personagens de acordo com o filme
export function filmPeople (films, btn) {
  const filmsCopy = [...films]

  const filmSelected = filmsCopy.filter((film) => {
    if (btn === film.title){
      return film.people;
    }
  })
  return filmSelected;
}