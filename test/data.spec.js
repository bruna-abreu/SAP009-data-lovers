import { searchBar, sortByOrderFilms, sortByRelease, filters } from '../src/data.js';

const castle = { 
  title: "Castle in the Sky", 
  director: "Hayao Miyazaki", 
  release_date: 1986
}

const fireflies = { 
  title: "Grave of the Fireflies", 
  director: "Isao Takahata", 
  release_date: 1988
}

const marnie = { 
  title: "When Marnie Was There", 
  director: "Hiromasa Yonebayashi", 
  release_date: 2014
}

const testMovies = [castle, fireflies, marnie]

//testar se a const testMovies realmente é um objeto -- ok
describe('testMovies', () => {
  it('should be an object', () => {
    expect(typeof testMovies).toBe('object')
  })
})

//testar se a função searchByName realmente é uma função -- ok
describe('search by name', () => {
  it('should be a function', () => {
    expect(typeof searchBar).toBe('function')
  });

  //testar a barra de pesquisa (palavra inteira) -- ok
  it('should filter by search bar - full word', () => {
    const title = 'fireflies';
    expect(searchBar(testMovies, title)).toStrictEqual([fireflies])
  });

  //testar a barra de pesquisa (primeiras letras) -- ok
  it('should filter by search bar - only some letters', () => {
    const title = 'mar';
    expect(searchBar(testMovies, title)).toStrictEqual([marnie])
  });
})

//testar se a função sortByOrder realmente é uma função -- ok
describe('sort by order', () => {
  it('should be a function', () => {
    expect(typeof sortByOrderFilms).toBe('function')
  });

  //testar a ordenação de Z-A -- ok
  it('should sort by ZA', () => {
    const order = sortByOrderFilms(testMovies, 'ZA')
    expect(order[2].title).toEqual("When Marnie Was There")
  });

  //testar a ordenação de A-Z -- ok
  it('should sort by AZ', () => {
    const order = sortByOrderFilms(testMovies, 'AZ')
    expect(order[0].title).toEqual("Castle in the Sky")
  });
})

//testar se a função sortByRelease realmente é uma função -- ok
describe('sort by release', () => {
  it('should be a function', () => {
    expect(typeof sortByRelease).toBe('function')
  });

  //testar a data de lançamento mais antiga -- ok
  it('should sort by release date - oldest', () => {
    const release = sortByRelease(testMovies, 'Castle In The Sky')
    expect([release[2].release_date]).toEqual([castle.release_date])
  });

  //testar a data de lançamento mais recente -- ok
  it('should sort by release date - more recent', () => {
    const release = sortByRelease(testMovies, 'When Marnie Was There')
    expect([release[0].release_date]).toEqual([marnie.release_date])
  });
})

//testar se a função filters realmente é uma função -- ok
describe('filter', () => {
  it('should be a function', () => {
    expect(typeof filters).toBe('function')
  });

  //testar se a função filtra por diretor (retornar "Castle in the Sky" para o diretor Miyazaki) -- ok
  it('should filter by director', () => {
    expect(filters(testMovies, 'director', 'Hayao Miyazaki')).toEqual([castle])
  })
})