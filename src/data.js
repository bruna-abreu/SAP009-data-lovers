/* Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):

filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.

sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das 
informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.

computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.

Estes nomes de funções e parâmetros são somente referência, o que vocês decidir utilizar vai depender da sua implementação. */

//Funções dos filmes
//Função para buscar o filme pelo nome
export const searchBar = (title, searchedName) => {
  return title.filter(movie => movie.title.toLowerCase().includes(searchedName)); 
};

//-1 para ordem crescente
//1 para ordem decrescente

//Função para ordenar por A-Z/Z-A
export const sortByOrderFilms = (films) => films.sort((az, za) => {
  if (az.title < za.title) {
    return -1
  } else if (az.title > za.title) {
    return 1
  } else {
    return 0
  }
})

//Função para ordenar por data de lançamento
export const sortByRelease = (films) => films.sort((oldest, recent) => {
  if (oldest.release_date > recent.release_date) {
    return -1
  } else if (oldest.release_date < recent.release_date) {
    return 1
  } else {
    return 0
  }
})

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
};

//Função para mostrar os personagens de acordo com o filme
export function filmPeople (films, btn) {
  const filmSelected = films.filter((film) => {
    if (btn === film.title){
      return film.people;
    }
  })
  return filmSelected;
}