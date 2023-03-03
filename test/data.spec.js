import { searchBar, sortByOrderFilms, sortByRelease, filters, searchCharacter, filmPeople} from '../src/data.js';

const castle = { 
  title: "Castle in the Sky", 
  director: "Hayao Miyazaki", 
  release_date: 1986,
  people: [
    {name: "Lusheeta Toel Ul Laputa"}
  ]
}

const fireflies = { 
  title: "Grave of the Fireflies", 
  director: "Isao Takahata", 
  release_date: 1988,
  people: [
    {name: "Seita Yokokawa"},
    {name: "Setsuko Yokokawa"},
    {name: "Mrs. Yokokawa"}
  ]
}

const marnie = { 
  title: "When Marnie Was There", 
  director: "Hiromasa Yonebayashi", 
  release_date: 2014,
  people: [
    {name: "Anna Sasaki"} 
  ]
}

const testMovies = [fireflies, castle, marnie]

//testar se a const testMovies realmente é um objeto -- ok
describe('testMovies', () => {
  it('should be an object', () => {
    expect(typeof testMovies).toBe('object')
  })
})

//testar se a função searchBar realmente é uma função -- ok
describe('search by name', () => {
  it('should be a function', () => {
    expect(typeof searchBar).toBe('function')
  });

  //testar a barra de pesquisa -- ok
  it('should filter by search bar', () => {
    const title = 'mar';
    expect(searchBar(testMovies, title)).toStrictEqual([marnie])
  });
})

//testar se a função sortByOrder realmente é uma função -- ok
describe('sort by order', () => {
  it('should be a function', () => {
    expect(typeof sortByOrderFilms).toBe('function')
  });

  //testar a ordenação de A-Z -- ok
  it('should sort by AZ', () => {
    const order = sortByOrderFilms(testMovies, 'az')
    expect(order[0].title).toEqual("Castle in the Sky")
  });

  //testar a ordenação de Z-A -- ok
  it('should sort by ZA', () => {
    const order = sortByOrderFilms(testMovies, 'za')
    expect(order[0].title).toEqual("When Marnie Was There")
  });
})

//testar se a função sortByRelease realmente é uma função -- ok
describe('sort by release', () => {
  it('should be a function', () => {
    expect(typeof sortByRelease).toBe('function')
  });

  //testar a data de lançamento mais antiga -- ok
  it('should sort by release date - oldest', () => {
    const release = sortByRelease(testMovies, 'oldest')
    expect(release[0].release_date).toEqual(castle.release_date)
  });

  //testar a data de lançamento mais recente -- ok
  it('should sort by release date - more recent', () => {
    const release = sortByRelease(testMovies, 'recent')
    expect(release[0].release_date).toEqual(marnie.release_date)
  });
})

//testar se a função filters realmente é uma função -- ok
describe('filter', () => {
  it('should be a function', () => {
    expect(typeof filters).toBe('function')
  });

  //testar se a função filtra por diretor (retornar "Castle in the Sky" para o diretor Miyazaki) -- ok
  it('should filter by director', () => {
    expect(filters(testMovies, 'director', 'Hayao Miyazaki')).toStrictEqual([castle])
  })
})

//testar se a função searchCharacter realmente é uma função -- ok
describe('search by character', () => {
  it('should be a function', () => {
    expect(typeof searchCharacter).toBe('function')
  });

  //testar a barra de pesquisa de personagem -- ERRO
  it('should filter by character', () => {
    const name = 'lus';
    const resultado = searchCharacter(testMovies, name)
    expect(resultado.length).toEqual(testMovies.length)
    expect(resultado[0].people.length).toEqual(1)
    expect(resultado[1].people.length).toEqual(0)
    expect(resultado[2].people.length).toEqual(0)
  });
})

//testar se a função filmPeople realmente é uma função -- ok
describe('filter characters by film', () => {
  it('should be a function', () => {
    expect(typeof filmPeople).toBe('function')
  });

  //testar se os botões estão filtrando os personagens de acordo com os filmes -- ok
  it('should filter characters by film', () => {
    const people = filmPeople(testMovies, "Grave of the Fireflies");
    expect(people).toEqual(fireflies.people);
  })
})