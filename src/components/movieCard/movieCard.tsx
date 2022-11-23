
import { FaStar } from "react-icons/fa";

import './movieCard.css'


export const MovieCard = (props: any) => {

    const imgBaseUrl = 'http://image.tmdb.org/t/p/w185'

    function hadleDetails(id: number) {
        window.open("/filme/" + id, '_self')
    }

    const data_formatada = props.movie.release_date.split('-').reverse().join(' - ');

   

    return (
        <>
            <article className='container-card'>

                <div className='card'>

                    <img className='movie-poster' src={
                        props.movie ?
                            props.movie.poster_path ?
                                imgBaseUrl + props.movie.poster_path :
                                require('../../null.jpg') :
                            require('../../null.jpg')} />

                    <article>

                        <h5 className="title">
                            {props.movie ? props.movie.title : ''}
                        </h5>

                        <p className='star'>
                            <span><FaStar /></span>
                            {props.movie.vote_average.toFixed(1)}
                        </p>

                        <label>Data de lançamento</label>
                        <h6>{props.movie ? data_formatada : ''}</h6>

                        <button className='btn-details' onClick={() => hadleDetails(props.movie.id)} >
                            Detalhes
                        </button>

                    </article>

                </div>

            </article>
        </>
    )
}