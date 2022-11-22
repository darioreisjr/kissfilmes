import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Tmdb, createRequest } from '../../Connector/TmdbConnector'

import { SearchBar } from '../../components/searchBar/searchBar'

import { AiFillClockCircle } from "react-icons/ai";

import './filme.css'


export default function Filme() {
    const [movie, setMovie] = useState('')

    const params = useParams()

    const detalhes = (id) => {
        Tmdb
            .get(createRequest.getMovie(id))
            .then((response) => setMovie(response.data))
            .catch((err) => { console.error('Um erro ocorreu enquanto buscando a lista de filmes.' + err) })
    }

    useEffect(() => {
        detalhes(params.id)
    }, [params.id])

    console.log(params.id)
    console.log(movie)

    const imgBaseUrl = 'http://image.tmdb.org/t/p/w300'


    return (
        <>
            <SearchBar />
            <div className='container-filme'>
                <section className='container-cardFilme' key={params.id}>

                    <div className='imagem-cardFilme'>
                        <img src={imgBaseUrl + movie.poster_path} />
                    </div>
                    <div>
                        <h1 className='titulo-cardFilme'>
                            {movie.title}
                        </h1>

                        <p className='descricao-cardFilme'>
                            {movie.overview}
                        </p>
                        <div className="container-minutos">
                            <span><AiFillClockCircle /></span>
                            <p>{movie.runtime} minutos</p>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

