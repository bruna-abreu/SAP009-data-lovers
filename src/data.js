//Funções dos filmes
//Função para buscar o filme pelo nome
export const searchBar = (title, searchedName) => {
  return title.filter(movie => movie.title.toLowerCase().includes(searchedName)); 
};

//Função para ordenar por A-Z/Z-A
export function sortByOrderFilms(films, order){
  const newArray = [...films]

  if(order === "az") {
    newArray.sort(function(a,b){
      if(a.title < b.title){
        return -1; //linha que não está sendo coberta
      }
    })
  } else if(order === "za"){
    newArray.sort(function(a,b){
      if(a.title > b.title){
        return -1;
      }
    })
  }
  return newArray;
}

//Função para ordenar por data de lançamento
export function sortByRelease(films, order){
  const newArray = [...films]

  if(order === "oldest") {
    newArray.sort(function(oldest, recent){
      if(oldest.release_date < recent.release_date){
        return -1; //linha que não está sendo coberta
      }
    })
  } else if(order === "recent"){
    newArray.sort(function(oldest, recent){
      if(oldest.release_date > recent.release_date){
        return -1;
      }
    })
  }
  return newArray;
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
      return film.people
    }
  })
  return filmSelected;
}