import { useEffect, useState, useRef } from 'react'
import { SearchBar } from '../../components/searchBar/searchBar'
import { MovieCard } from '../../components/movieCard/movieCard'
import { Pagination } from '../../components/pagination/pagination'
import { Tmdb, createRequest } from '../../Connector/TmdbConnector'

import './home.css'

export const Home = () => {

  const [searchMade, setSearchMade] = useState(false)
  const returnToHome = () => { setSearchMade(false); goToPage('1') }
  const searchBar = useRef();

  const goToPage = (pageNumber) => {
    Tmdb
      .get(createRequest.getMovies(pageNumber))
      .then((response) => setMoviesList(response.data))
      .catch((err) => { console.error('Um erro ocorreu enquanto buscando a lista de filmes.' + err) })
    searchBar.current.focus();
  }

  const searchMovies = (searchedTerms) => {
    Tmdb
      .get(createRequest.searchMovies(searchedTerms))
      .then((response) => setMoviesList(response.data))
      .catch((err) => { console.error('Um erro ocorreu enquanto buscando a lista de filmes.' + err) })
    setSearchMade(true)
  }

  const LoadMovies = () => { useEffect(() => { goToPage() }, []) }

  const [moviesList, setMoviesList] = useState(LoadMovies())

  return (<>
    <SearchBar action={searchMovies} returnFunction={returnToHome}>{searchBar}</SearchBar>
    <main className='container' >
      {moviesList ? moviesList.results.map((item) => <MovieCard key={item.id} movie={item} />) : void 0}
    </main>
    {!searchMade && moviesList ?
      <Pagination total_pages={moviesList.total_pages} actual_page={moviesList.page} action={goToPage} /> :
      void 0}
  </>)
}