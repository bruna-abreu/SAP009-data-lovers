export const searchBar = (title, searchedName) => {
  return title.filter(movie => movie.title.toLowerCase().includes(searchedName)); 
}; 

export function sortByOrderFilms(films, order){
  const newArray = [...films]

  if(order === "az") {
    newArray.sort(function(a,b){
      if(a.title < b.title){
        return -1;
      }
    })
  } else {
    newArray.sort(function(a,b){
      if(a.title > b.title){
        return -1;
      }
    })
  }
  return newArray;
}

export function sortByRelease(films, order){
  const newArray = [...films]

  if(order === "oldest") {
    newArray.sort(function(oldest, recent){
      if(oldest.release_date < recent.release_date){
        return -1;
      }
    })
  } else{
    newArray.sort(function(oldest, recent){
      if(oldest.release_date > recent.release_date){
        return -1;
      }
    })
  }
  return newArray;
}

export const filters = (array, key, condition) =>
  array.filter((item) => item[key] === condition);

const getMoviesCharacters = (films) => {
  let chars = [] 
  for (let index = 0; index < films.length; index++) {
    chars = [...chars, ...films[index].people]
  }
  return chars
}

export const searchCharacter = (films, searchedName) => {
  const chars = getMoviesCharacters(films)
  const search = chars.filter(person => person.name.toLowerCase().includes(searchedName))
   
  return search;
} 

export function filmPeople (films, title) {
  const filmsCopy = [...films]

  const filmSelected = filmsCopy.find((film) => {
    return film.title === title
  })
  return filmSelected.people
}