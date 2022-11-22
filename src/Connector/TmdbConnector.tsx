import axios from 'axios'

const api_key = 'a88e38b7a04727795f3c5447e2c8d41d'
const language = 'pt-BR'

export const Tmdb = axios.create({
  baseURL: `https://api.themoviedb.org/3`
})

export const createRequest = {
  'getMovies': (pageNumber = '1') => {
    return (`/movie/upcoming?api_key=${api_key}&language=${language}&page=${pageNumber}`)
  },

    'getMovie':(id:number) => {
      return (`/movie/${id}?api_key=${api_key}&language=${language}`)
    },

  'searchMovies': (searchedTerms: number | string) => {
    return (`/search/movie?api_key=${api_key}&query=${searchedTerms}`)
  }
}